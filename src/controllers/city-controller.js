const {CityService} = require('../services/index')  

/**
 * POST
 *  data -> req.body
 * 
 */
const cityService = new CityService();
const create = async (req,res) => {
    try{

        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
    
} 

//delete -> /city/:id
const destroy= async(req,res) => {
    try{
        
        const city = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully deleted a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    
} 
}


//Get -> /city/:id
const get = async(req,res) => {
    try{
        const city = await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully fetched a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to  fetched a city",
            err: error
        })
    
} }

//patch -> /city/:id -? req.body
const update = async(req,res) =>{
    try{
        const city = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully updated a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to updated a city",
            err: error
        })
    
} }

const getAll = async(req,res) =>{
    try{
        const city = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: city,
            success: true,
            message: "successfully fetched a city",
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to getall city",
            err: error
        })
    }

}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll  
}