const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 

require('dotenv').config();
const PORT = process.env.PORT;

const routes = require('./routes');



// ********************************* Middleware ************************************ //

// BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// testing
// app.use('/', (req, res ) => {
//   res.send('<h1>Upstate</h1>');
// });

// api routes
app.use('/api/v1/cities', routes.city);

// Server
app.listen(process.env.PORT || 4000, () => console.log(`Server connected at http://localhost:${PORT}`))
