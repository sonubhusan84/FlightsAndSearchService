const { where } = require('sequelize');
const {City} = require('../models/index')

//All the functions are defined in the sequelize mmodel documentation i.e. create,destroy etc.... 

class CityRepository {
    async createCity ({name}){
        try{
            const city = await City.create({
                //name : name     //her LHS name = the one which is defined in city table and RHS name = the obj which we are receiving
                name    // this is the shortcut
            });
            return city;
        }catch (error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
     
    async destroyCity({cityId}){
        try{
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        }catch (error){
            console.log("Something went wrong in the repository layer")
            throw { error};
        }
    }
    async updateCity(cityId,data){
        try{
            const city = City.update(data,{
                where: {
                    id : cityId
                }
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer")
            throw { error};
        }
    }
    async getCity(cityId){
        try{
            const city = City.findByPK(cityId);   //PK = primary key
            return city;
        }catch{
            console.log("Something went wrong in the repository layer")
            throw { error};
        }
        
    }
}
module.exports = CityRepository;