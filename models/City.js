const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
  city: {
     type: String
  },
  state: {
     type: String
  },
  description:{
     type: String
  },
  image:{
     type: String
  },
  latitude: {
     type: Number
  },
  longitude: {
     type: Number
  },
  name: {
     type: String
  }
})

const City = mongoose.model( 'City', CitySchema );
module.exports = City;