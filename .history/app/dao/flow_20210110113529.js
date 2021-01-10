import { FlowModel } from '../model/flow';
import { NotFound } from 'lin-mizar';
class Flow {
  static async addFlow (v) {
    const res = await FlowModel.create({
        index: v.get('body.index'),
        type: v.get('body.type'),
        art_id: v.get('body.art_id'),
        status: v.get('body.status')
    });
    retrun res;
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