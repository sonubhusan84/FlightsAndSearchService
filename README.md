dynamic named values - these are the values called as environment variables that will change over time like PORT variable in out index.js file, so we need to store these variables in a certain file name as DOTENV file and also we need to add it to the gitignore file so that we shouldn't expose it to anyone in the public.(npm install dotenv)
Create a file named .env inside src folder,you can go go to dotenv npm and check it how to follow the installation.
remove the PORT variable from index.js file and add it to .env file according to the documentation and require in the file.file sequence (.env-->serverConfig-->index.js)