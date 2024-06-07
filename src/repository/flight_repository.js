const {Flights} = require("../models/index")
const {Op} = require("sequelize")

class FlightRepository{
    #createFilter(data){
        let filter = {};
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.arriavalAirportId){
            filter.arriavalAirportId = data.arriavalAirportId
        }
        // if(data.minprice){
        //     Object.assign(filter, {price: {[Op.gte]:data.minprice}});
        // }
        // if(data.maxprice){
        //     Object.assign(filter, {price: {[Op.lte]:data.maxprice}});
        //     //when using maxprice or minprice uncomment which you are not using it causes conflict
        // }
        // Object.assign(filter,{[Op.and]: [{price:{[Op.lte]:data.minprice}},{price:{[Op.gte]:data.maxprice}}]})
        //OR
        let priceFilter = [];
        if(data.minprice){
            priceFilter.push({price: {[Op.gte]:data.minprice}});
        }
        if(data.maxprice){
            priceFilter.push({price: {[Op.lte]:data.minprice}});
        }
        Object.assign(filter,{[Opand]: priceFilter});
        console.log(filter);
        return filter;

    }
    async createFlight(data){
        try{
            console.log(data)
            const flight = await Flights.create(data);
            return flight; 
        }catch(error){
            console.log("Something went wrong at repository layer");
            throw{error};
        }

    }
    async getFlight(flightId){
        try{
            const flight = await Flights.findByPk(flightId);
            return flight;
        }catch(error){
            console.log("Something went wrong at repository layer");
            throw{error} 
        }
    } 
    async getAllFlights(filter){
        try{
            const filterObject = this.#createFilter(filter)
            const flight = await Flights.findAll({
                where :filterObject
            }); 
        }catch(error){
            throw{error}
        }
    }
    async updateFlights(flightId,data){
        try{
            await Flights.update(data,{
                where:{
                    id:flightId
                }
            })
            return true;

        }catch(error){
            throw new AppError(
                'RepositoryError',
                'Cannot create Booking',
                'there was some issue in updating the booking,please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }


    }
}

module.exports = FlightRepository;