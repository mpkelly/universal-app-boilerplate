'use strict';

const express = require('express');
const http = express();

const {app, server} = require('./app');
const port = app.get('port');

server.on('listening', () =>
  console.log(`Feathers application started on ${app.get('host')}:${port}`)
);

//
// set up a route to redirect http to https
//
http.get('*',function(req,res){
  res.redirect('https://localhost:8082'+req.url)
});


http.listen(3030, console.log(`HTTP > HTTPS redirect service running`));
