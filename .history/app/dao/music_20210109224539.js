import { MusicModel } from '../model/music';
class Music {
  static async addMusic (v) {
    return MusicModel.create(v);
  }

  static async musicList () {
    return MusicModel.findAll();
  }
}

export { Music as MusicDao };