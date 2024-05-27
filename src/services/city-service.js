const { CityRepository } = require('../repository/index');

class CityService {
    constructor(){
        this.cityRepository = new CityRepository();
    }
    async createCity(data){
        try{
            const city =await this.cityRepository.createCity(data);
            return city;
        }catch(error){
            console.log("Somthing went wrong at service level");
            throw{error};
        }

    }
    async deleteCity(cityId){
        try{
           
            const city = await this.cityRepository.destroyCity(cityId);
            return city;
        }catch(error){
            console.log("Somthing went wrong at service level");
            throw{error};
        }
    }
    async updateCity(cityId,data){
        try{
            const city =await this.cityRepository.updateCity(cityId,data);
            return city;
        }catch(error){
            console.log("Somthing went wrong at service level");
            throw{error};
        }
    }
    async getCity(cityId){
        try{
            const city = await this.cityRepository.getCity(cityId);
            return city;
        }catch(error){
            console.log("Somthing went wrong at service level");
            throw{error};
        }
    }
    async getAllCities(filter){
        try{
            const citys = await this.cityRepository.getAllCities({name: filter.name});
            return citys;
        }catch(error){
            console.log("Somthing went wrong at service level");
            throw{error};
        }
    }

}
module.exports = CityService;