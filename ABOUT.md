# nodeAnglarjs
## Instructions
• From the root directory run: npm install
• to run the test: npm test
• to run the server: npm start
• then to view the project go to http://localhost:9000/ on the browser

##  assumptions
• I have written the assumptions as comments in the files

## Issue Log
• TypeError: app.address is not a function
• solution: add code to export the server 
white spaces in json caused a problem parsing
• use jsonminify

## heroku general guide for future reference
1- change the port to: process.env.PORT 
2- create a Profile with: web: node ./server.js 
3- make sure in package json the npm start command points to "node path/server.js" 
4- if you have requests from front end change the url to /
