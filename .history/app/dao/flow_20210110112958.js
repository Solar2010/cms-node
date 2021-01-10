import { MovieModel } from '../model/movie';
import { NotFound } from 'lin-mizar';
class Flow {
  static async addFlow (v) {
    const res = await FlowModel.create({
        
    })
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

export { Flow as FlowDao };