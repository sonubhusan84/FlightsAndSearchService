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
->"npx sequelize db:create"
->now go to cmd ->mysql --version(if not seen download it) ->mysql -u root -p
->password = Sonumonu@944
show databases;(you can find filgts_Searches_db_dev)
->We need to gitignore the file config.json as it contains password and other sensitive information.So, go to .gitignore and src/config/config.json

========== models chapter ==========
##### DB Design ######
    - Airplane Table
    - Flight
    - Airport
    - City


 ->A flight belongs to an airplane but once airplane can be used in multiple flights
 ->A city has many airports but one airport belong to a city
 ->One airport can have many flights,but a flight belong to one airport


$$$$ go to src in gitbash
->npx seqelize model:generate --name City --atributes name:String
   ->npx sequelize db:migrate "the apply the changes in the database"
     ->go to cmd & "mysql -u root -p" "Sonumonu944"
       ->use Flights_Search_DB_DEV
         ->show tables; 
           ->select * from SequelizeMeta;
             ->desc Cities;
               ->git status -> cd .. -> git add . ->git commint -m "Added city model and migrations"
                 -> git push origin master
    ->npx sequelize db:migrate:undo  "it will go back to the initial state or previous state"
      ->show tables;  "you can't find anything here which means you went to previous state"
        

->create city-repository.js in repository folder
->check city-repository
->git add .
->git commit -m "Added unique constraint and started city-repository"
-> async createcity({name}) -> if we write like this it will segregate only the keys from the argument which is passed as createcity({name: "new delhi"}) else you can pass as createcity(name) and here you need to use the object as "obj.name" for the same calling function createcity({name: "new delhi"}).

->create a index.js file in repository folder and check it.
->create a city-service and index.js file in service folder.
->git  commit -m "Added city service" 
->create city-controller.js in controller folder.

->create routes folder -> inside it create a index.js file and v1 folder.
->inside v1 folder create index.js
->go to /flightsandsearch/index.js file and define Apiroutes.

->search sequelize like query


##### Tables #####

### City -> id,name,created_at,updated_at

### Airport -> id,name,address,city_id,created_at,updated_at
    Realationship ->City has many airports and Airport belong to a city (one to many)


->we will create a new model Airport,go inside src
->npx sequelize model:generate --name Airport --attributes name:String ,address:String,cityId:Integer
->do changes in city.js and aiport.js "associate functions" and do changes airport migrations  (you can check about associations in sequelize     documentation)
->do changes in airport and city migrate file in cityId field
->npx sequelize db:migrate
->do git commit

-> npx sequelize seed:generate --name add-airports
->seeders -> add-airports.js and add the data in the bulkInsert function
->npx sequelize db:seed:all
->select * from airports;
->select * from Airports Join Cities onAirports.cityId = Cities.id where Cities.id = 9;


->learn about model/db synchronization
->db.sequelize.sync({alter: true});

=========== Creating Aeroplane model ================
->npx sequelize model:generate --name Airplane --attributes modelNumber:String,capacity:integer inside src
->make changes in model and migration of Airplane
->npx sequelize db:migrate
npx sequelize seed:generate --name add-airplanes
->npx sequelie db:seed:all



======== creating flights =========

->npx sequelize model:generate --name Flights --attributes flightNumber:String,airplaneId:integer,departureAirportId:integer,arrivalAirportId:integer,arrivalTime:Date,departureTime:Date,price:integer,boardingGate:String,totalSeats:integer
->do changes in model and migration
->npx sequelize db:migrate
->do git
-> creating CRUD for flights and airplane

=> repository -> flight-repository & -> airplane-repository
->utils -> helper.js


========= Implementing Crud Repositry ==========

->repository -> crud-repository
->airport-reposirtory
->crud-service.js
->airport-service.js
->airport_controller.js
->middleware->flight-middlewares.js
->utils error-codes.js







