const db = require('../models');

// All Cities
const allCities = (req, res) => {

  db.City.find({}, (err, allCities) => {
    if (err) return res.status(500).json({
      status: 500,
      error: [{message: 'Something went wrong! Please try again'}],
    });
    res.json({
      status: 200,
      count: allCities.length,
      data: allCities,
      requestedAt: new Date().toLocaleString(),
    });
  });
};

module.exports = {
  allCities 
}