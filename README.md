# Landing Page Project

/*-----------------------------------------*/
/* ----- The used programming language -----*/

 - HTML5
 - CSS3
 - JavaScript 'with last updates in ES6'
 - Node.js 'for the server side'
 - installed Packages (express, body-parser, cors)

/*-----------------------------------------*/
/* ----- The Project folder Structure -----*/

 -website folder:
 - css                    - index.html                                     
   styles.css                                               

 - js                     
   app.js

 -node_modules folder

 -files:
 - server.js 
 - README.md 
 - package-lock.json

/*-----------------------------------------*/
/* -------- The Project properties --------*/

 - The application gets the temperature from a web API and all the user need to do is to enter the zip code for his city
 - this application can be used for the USA cities 


/*-----------------------------------------*/
/* ---------- The Project Steps -----------*/

 - at first I linked the app.js which represent the client side coding file to my html index file
 - then I decide to divide the work into chunks so I could excute it step by step:

    ** The first :  setting up your project environment
        - installing the express, body-parser & cors packages by the npm.
        - creat the server.js file 
        - including the perivious installed packages to the server file
        - run the server file through a specific port properly (here I choose the port to be 8000)
        - Local server now is running and producing feedback to the Command Line.

     ** The second : APIs and Routes
        -  First step is to creat the API  credentials on OpenWeatherMap.com
        -  Getting the data from the API by using the fetch function and the await key word.
        -  we'll get those data via the client side
        -  after having those data, we'll post it to our local server in 2 steps:
                 - client side: we'll define the function which will have 2 parameters, the url in which we will post the data in our server and the data which entered by the user and also the other part of data which comes from the web API. 
                 - server side: we will creat the post method by using the same url that we previously used in the client side and a callback function to add the data from the client side requested body to the project endpoint object (projectData{}).
        -  fetching the data from the local server by sitting a speceic url at the client side, and then at the server side we'll sitting the get method by using that same url.
        -  the final part is to update the UI by the data that we now have, by getting the id of the element we want to update and give it the corresponding part of the data, but uptill now we just defining the function, we haven't any action to perform this function on.
 
     ** The third : Updating the UI and perform the whole action.
        -  we'll get the dynamic url.
        -  we'll get the data from the web API by using this URL.
        -  after that we'll make the first promise chaning to post the combined data by the user and from the API to our local server.
        -  and now for the final part of our code is to chain the last promice which calls the updating function to update the user UI.
