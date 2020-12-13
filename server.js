// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//dependancies
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

/* Setup Server*/
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log(`Server running on LocalHost : ${port}`);
}

/* setup the POST Route */

//creating post() with url and callback function
app.post('/addWeatherData', addWeather)

//in the callback function we'll add the data to the project endPoint by using the body of the incoming request
function addWeather(req,res){
   
    projectData.newZip = req.body.userZip,
    projectData.userFeel = req.body.userFeeling,
    projectData.userTemp = req.body.userTemp,
    projectData.todayDate = req.body.date
    console.log(projectData)
}

/* setup the GET Route */
app.get('/all',getData)
function getData(req,res){
    res.send(projectData)
    console.log(projectData)
}