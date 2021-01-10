import { MovieModel } from '../model/movie';
class Movie {
  static async addMovie (v) {
    return MovieModel.create(v);
  }

  static async movieList () {
    return MovieModel.findAll();
  }
}

export { Movie as MovieDao };