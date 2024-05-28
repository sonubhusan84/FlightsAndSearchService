const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverconfig');
//const CityRepository = require('./repository/city-repository');
const ApiRoutes = require('./routes/index');
const {Airport,City,Airplane} = require('./models/index')
const db = require('./models/index');

const setupAndStartServer = async() =>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,async () => {
        console.log(`The server is running on port ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
        // const airports =  await Airport.findAll({
        //     include: [{
        //         model: City,
        //     }]
        // });
        // console.log(airports);
        
        //console.log(process.env);
        // const repo = new CityRepository();
        // repo.createCity({name:"new delhi"});
        const city = await City.findOne({
            where: {
                id: 7
            }
        });
        const airports = await city.getAirports()
        console.log(city,airports);
        await Airplane.create({
            modelNumber: "Boeing 878",
            createdAt : new Date(),
            updatedAt: new Date()
        })
    })
}

setupAndStartServer();
