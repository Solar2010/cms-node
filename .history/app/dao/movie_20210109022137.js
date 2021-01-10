import { MovieModel } from '../model/movie';
class Movie {
  static async addMovie (v) {
    return await MovieModel.create(v);
  }
}

export { Movie as MovieDao };