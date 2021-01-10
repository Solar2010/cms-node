import { MovieModel } from '../model/movie';
class Movie {
  static async addMovie (v) {
    return MovieModel.create(v);
  }
}

export { Movie as MovieDao };