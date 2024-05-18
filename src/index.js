const express = require('express');
const {PORT} = require('./config/serverconfig');
const setupAndStartServer = async() =>{
    const app = express();
    app.listen(PORT,() => {
        console.log(`The server is running on port ${PORT}`);
        //console.log(process.env); 

    })
}

setupAndStartServer();
