var collections = require('../collections');
var models = require('../models');
var should = require('chai').should();

describe('Movie tests', function() {
  var movies;

  before(function() {
    movies = new collections.Movies();
  });

  after(function() {

  });

  it('should save a Movie model', function() {
    movies.create({
      title: 'Foo movie',
      genres: ['action', 'comedy']
    }).then(function(movie) {
      should.exist(movie.id);
      console.log('movie:', movie.toJSON());
    });
  });

  it('should read movies', function() {
    return movies
      .fetch()
      .then(function() {
        console.log('movies', movies.toJSON());
      });
  });
});