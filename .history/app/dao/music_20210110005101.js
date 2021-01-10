import { MusicModel } from '../model/music';
import { NotFound } from 'lin-mizar';
class Music {
  static async addMusic (v) {
    return MusicModel.create(v);
  }

  static async musicList () {
    return MusicModel.findAll();
  }

  static async editMusic (id, params) {
    const music = MusicModel.findByPk(id);
    if (!music) {
      throw new NotFound('内容不存在')
    }
    return (await music).update({ ...params })
  }
}

export { Music as MusicDao };