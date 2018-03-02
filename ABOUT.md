# nodeAnglarjs

# Instructions
##
to run the test use: npm test
to run the server use: npm start

# assumptions 
##


# Issue Log
## TypeError: app.address is not a function
## solution: export the server from server.js 

## spaces in json 
## use jsonminify 

##general steps to deploy to heroku:
1- add Procfile with :  web: node server.js written in it
2- add var port = process.env.PORT||8080; to the server file
change 8080 according to your port
3- wherever you are sending from the front end 
add: "http://127.0.0.1:8080/session"
remove session and add your own route 