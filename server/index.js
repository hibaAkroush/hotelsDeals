const express = require('express')
const app = express()
module.exports = app


app.listen(9000, function() {
  console.log('Application is listening on 9000');
});