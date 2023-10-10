const db = require('./db');
const { Movie } = db.models;


(async () => { 
  // Sync all tables
  await db.sequelize.sync({ force: true }) 

  try {
    const movie = await Movie.create({
      title: "Debby Does Dallas",
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'The Incredibles'
    });
    console.log(movie2.toJSON());

  } catch (error) {
    console.error('Error connecting to the database: ', error);
  }
})();


