dynamic named values - these are the values called as environment variables that will change over time like PORT variable in out index.js file, so we need to store these variables in a certain file name as DOTENV file and also we need to add it to the gitignore file so that we shouldn't expose it to anyone in the public.(npm install dotenv)
Create a file named .env outside src folder,you can go go to dotenv npm and check it how to follow the installation.
remove the PORT variable from index.js file and add it to .env file according to the documentation and require in the file.file sequence (.env-->serverConfig-->index.js)

------------------------------------------------------------------------------
//Steps to install sequelize sequelize-cli and mysql2

->sequelize is a ORM(Object Relational Mapper)
->mysql2 is used for connection between mqsql server and sequelize.

-> npm i mysql2 seqelize sequelize-cli
-> npx sequelize init
-> bring the models folder outside src to inside src before that delete inside src models and even do the same for config but in this only bring the config file which is in outside src to inside config 
->Insdie config/config.json delete test and production and enter your password ("insdie this") and database name(here = Flights_Searches_DB_DEV)
inside config->config.json delete test and production 
next change the directory to src
->npx sequelize db:create
->now go to cmd ->mysql --version(if not seen download it) ->mysql -u root -p
->password = Sonumonu@944
show databases;(you can find filgts_Searches_db_dev)
->We need tio gitignore the file config.json as it contains password and other sensitive information.So, go to .gitignore and src/config/config.json
->