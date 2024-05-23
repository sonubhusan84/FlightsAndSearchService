const express = require('express');
const bodyparser = require('body-parser');
const {PORT} = require('./config/serverconfig');
const setupAndStartServer = async() =>{
    const app = express();
    app.use(bodyparser.json());
    app.use(bodyparser.urlencoded({extended: true}));
    app.listen(PORT,() => {
        console.log(`The server is running on port ${PORT}`);
        //console.log(process.env); 

    })
}

setupAndStartServer();
