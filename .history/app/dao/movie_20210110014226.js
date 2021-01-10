import { MovieModel } from '../model/movie';
import { NotFound } from 'lin-mizar';
class Movie {
  static async addMovie (v) {
    return MovieModel.create(v);
  }

  static async movieList () {
    return MovieModel.findAll();
  }

  static async editMovie (id, params) {
    const movie = MovieModel.findByPk(id);
    if (!movie) {
      throw new NotFound('内容不存在')
    }
    return (await movie).update({ ...params })
  }

  static async deleteMovie (id) {
    return MovieModel.destroy({
      where: { id }
    });
  }
}

export { Movie as MovieDao };