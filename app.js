const db = require('./db');
const { Movie, Person } = db.models;


(async () => { 
  // Sync all tables
  await db.sequelize.sync({ force: true }) 

  try {
    const movie = await Movie.create({
      title: "Debby Does Dallas",
      runtime: 90,
      releaseDate: '1978-10-01',
      isAvailableOnDVD: true
    });
    console.log(movie.toJSON());

    const movie2 = await Movie.create({
      title: 'The Incredibles',
      runtime: 115,
      releaseDate: '2004-04-14',
      isAvailableOnDVD: true
    });
    console.log(movie2.toJSON());

    const person = await Person.create({
      firstName: 'Tom',
      lastName: 'Hanks',
    });
    console.log(person.toJSON());

    const movie3 = await Movie.build({
      title: 'Toy Story 3',
      runtime: 103,
      releaseDate: '2010-06-18',
      isAvailableOnDVD: false,
    });
    await movie3.save(); // save the record
    console.log(movie3.toJSON());

    // const movieById = await Movie.findByPk();
    // console.log(movieById.toJSON());

    // const movieByRuntime = await Movie.findOne({ where: { runtime: 115 } });
    // console.log(movieByRuntime.toJSON());

    // const movies = await Movie.findAll();
    // console.log( movies.map(movie => movie.toJSON()) );


    // const movies = await Movie.findAll({
    //   attributes: ['id', 'title'], // return only id and title
    //   where: {
    //     isAvailableOnVHS: true,
    //   },
    // });
    // console.log( movies.map(movie => movie.toJSON()) );

    

  } catch (error) {
    if(error.name === 'SequelizeValidationError') {
      const errors = error.errors.map(err => err.message);
      console.error('Validation errors: ', errors);
    } else {
      throw error;
    }
  }
})();


