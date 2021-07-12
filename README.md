#Huddle 2021

##Overview
A simple communication app that enables video calling WITHOUT any sign up or login, as well as video calling and chat functionalities for signed in users. 

##Technologies used
Backend was created using Node.js and Express to enable video calling, and the chatengine.io API to enable chat functionalities and to maintain the users. 
The frontend was made entirely in React JS. 

##Set Up on Local System

###Setting up the backend
Requirement: Node.js
Libraries required: cors, express, nodemon, simple-peer, socket.io

To run the backend, use the command `nodemon index.js`. If you are running the backend locally make sure to change the io() to localhost:5000 (or the appropriate port) in SocketContext.js 


###Setting up the frontend
Libraries required: React, react-router-dom, axios, react-icons, react-chat-engine, material-ui, react-copy-to-clipboard, react-dom, simple-peer, socket.io-client

To run the frontend, navigate to the client folder and run using npm start.

##Deployed version
The backend has been deployed on [https://demo-app-xyz.herokuapp.com/](https://demo-app-xyz.herokuapp.com/).
The website has been deployed and can be found on [https://huddle-2021.netlify.app/](https://huddle-2021.netlify.app/)




