const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverconfig');
//const CityRepository = require('./repository/city-repository');
const ApiRoutes = require('./routes/index');

const setupAndStartServer = async() =>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.use('/api',ApiRoutes);
    app.listen(PORT,async () => {
        console.log(`The server is running on port ${PORT}`);
        
        //console.log(process.env);
        // const repo = new CityRepository();
        // repo.createCity({name:"new delhi"});
       
    })
}

setupAndStartServer();
