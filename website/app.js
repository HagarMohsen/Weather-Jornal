

// Create a new date instance dynamically with JS
let d = new Date();
//adding the value of '1' to the newDate syntax because the method getMonth() start counts from 0
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();


/* Function to Get data from the web API */
const getData = async (url)=> {//fetching data from api
    const responce = await fetch(url)
  
    try{//code to convert json data and give us the data back
     const data = await responce.json();
     return data;
    }
    
    catch(error){//catching the error and logging it to the console
        console.log("there is a GET error which is: ", error)
    }
   
  }

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), 
    });
  
      try {
        const newData = await response.json();
        return newData;
       
      }catch(error) {//catching the error and logging it to the console
        console.log("there is a POST error which is: ", error);
      }
  }
  
  
/* Function to Update the UI */
//Fetching the data from the local server
let updateUI = async ()=> {
  let request = await fetch('/all')

  try{
  //code to convert json data and give us the data back
   let allData = await request.json();
   console.log(allData); //consoling the optained data to the console
   //Updating the UI content
   document.getElementById('zipCode').innerHTML='your entered zip Code is '+allData.newZip; 
   document.getElementById('date').innerHTML='Today Date is '+allData.todayDate; 
   document.getElementById('temp').innerHTML='The Current Temperature is '+allData.userTemp+' C';
   document.getElementById('content').innerHTML='you Feel '+allData.userFeel;
  
  }

  catch(error){//catching the error and logging it to the console
      console.log("There is an error in updaing the UI content ", error)
  }
 
}


/* listening to the click action for te button generate and performing our main action */ 
document.getElementById('generate').addEventListener('click',performAction);
function performAction(e) {

/* setting the URL data */
//API credentials
const apiKey = '16618fc712bee609d629433f387ff748' ;
//getting zip code entered by the user
let zipCode = document.getElementById('zip').value;
//coding the dynamic URL that we're going to fetch the data from
let dynamicURL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

/* getting the user Feeling */
let feeling = document.getElementById('feelings').value;

/* getting the required Data */ 
getData(dynamicURL)
/* posting the data to our local server */
.then (function(data){
    postData('/addWeatherData',{userZip:zipCode,userFeeling:feeling,userTemp:data.main.temp,date:newDate});

})
/* chaining the promices to make sure that either one won't activate before achiving the pervious promise */
.then (function(){
  updateUI();
});

}


 
