'use strict';
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const https = require('https');
const serveStatic = require('feathers').static;
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const bodyParser = require('body-parser');
const socketio = require('feathers-socketio');
const middleware = require('./middleware/index');
const services = require('./services');

const app = feathers();

const config = {
  key: fs.readFileSync('ssl/server.key'),
  cert: fs.readFileSync('ssl/server.crt'),
  passphrase: 'testkey'
};

app.configure(configuration(path.join(__dirname, '../..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(helmet())
  .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
  .use('/', serveStatic( app.get('public') ))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(rest())
  .configure(socketio())
  .configure(services)
  .configure(middleware);

const server = https.createServer(config, app).listen(app.get('port'));
app.setup(server);

module.exports = {app, server};
