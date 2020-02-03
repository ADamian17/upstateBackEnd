const db = require('../../models');

const city = require('./city.json');

db.City.remove({}, () => {
	city.forEach( city => {
		db.City.create( city, (error, createdCity) => {
			if (error) return console.log(error);
			console.log(createdCity);
		});
	});
});