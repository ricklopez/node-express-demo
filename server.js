const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const staticRouter = require('./routers/static.router');
const apiRouter = require('./routers/api.router');

// http.createServer((request, response) => {
//   console.log("Request ", request.url);
//   if (request.url === '/'){
//     response.end("<h1>Home Page</h1>");
//   }else if(request.url === '/contact'){
//     response.end("<h1>Contact Page</h1>");
//   }else{
//     response.end("<h1>404</h1>");
//   }
// }).listen(8080); // Activates this server, listening on port 8080.


app.use(function(req, res, next){
  console.log("Request URL:", req.url);
  console.log("@", new Date());
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', staticRouter);
app.use('/api/v1', apiRouter);

app.listen(8080, function(){
  console.log("App running on port 8080");
});