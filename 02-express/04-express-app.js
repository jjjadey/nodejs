const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
app.use(express.static('./public'));
// Each app.use(middleware) is called every time a request is sent to the server.
//https://stackoverflow.com/questions/11321635/nodejs-express-what-is-app-use

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('resource not found');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000....');
});
