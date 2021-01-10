import { MusicModel } from '../model/music';
class Music {
  static async addMusic (v) {
    return MusicModel.create(v);
  }
}

export { Music as MusicDao };