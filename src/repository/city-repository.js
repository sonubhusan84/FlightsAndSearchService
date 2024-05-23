const { where } = require('sequelize');
const {city} = require('../models/index')

class CityRepository {
    async createCity ({name}){
        try{
            const city = await CityRepository.crate({name});
            return city;
        }catch (error){
            throw {error};
        }
    }
    
    async destroyCity({cityId}){
        try{
            await CityRepository.destroy({
                where: {
                    id: cityId
                }
            });
        }catch (error){
            throw { error};
        }
    }
}
module.exports = CityRepository;