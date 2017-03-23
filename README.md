# Quick Start

1. Clone repo and rename root folder
2. Delete .git file in project root
3. Update paths in mobile/start.sh
6. Add any additional packages to package.json, mobile/package.json & web/package.json
7. Run *npm install -S* for each package.json file

# Running mobile

1. Start package server by executing *start.sh* in web folder
2. Run *react-native run-android*

# Building client

1. Add css web fonts and icons to public/index.html 
2. Run *webpack -w* in web folder

# Running server

1. Run *npm start* in server folder.
2. Check https://localhost:8081 in your browser

## SSL Security
 
The web application uses HTTPS. This boilerplate ships with a test certificate that can be used for testing. A production certificate can be generated using your hosting provider or by visiting [ Let's Encrypt](https://letsencrypt.org/getting-started/).


