//Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

// handle routing all types of HTTP request (POST, GET, PUT, DELETE, etc.)
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>');
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...');
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
