const {Op} = require('sequelize');
const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city =  await City.create({name});
            return city;
        }catch(error){
            console.log("Not able to create city");
            throw{error};
        }
    }
    async destroyCity(cityId){
        try{
            const city= await City.destroy({
                where:{
                    id:cityId
                }
            })
            return true;
        }catch(error){
            console.log("Not able to delete city city");
            throw{error};
        }
    }
    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where:{
                    id:cityId
                }
            });
            // const city = await City.findByPk(cityId);
            // this.name = data.name;
            // await city.save();
            return city;
        }catch(error){
            console.log("Not able to update city city");
            throw{error};
        }
    }
    async getCity(cityId){
        try{
            
            const city = await City.findByPk(cityId)
            return city;
        }catch(error){
            console.log("Not able to get  city");
            throw{error};
        }
    }
    async getAllCities(filter){ //filter can be empty also
        try{
            if(filter.name){
                const city = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith] : filter.name
                        }
                    }
                });
                return city;
            }
            const city = await City.findAll();
            return city; 
        }catch(error){
            console.log("Not able to get all city");
            throw{error};
        }
    }
}
module.exports = CityRepository;