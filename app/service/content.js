import { MovieDao } from '../dao/movie';
import { MusicDao } from '../dao/music';
import { SentenceDao } from '../dao/sentence';
import { NotFound } from 'lin-mizar';
class Content {
  static async AddContent (v) {
    switch (v['type']) {
      case 100:
        delete v['url']
        await MovieDao.addMovie(v);
        break;
      case 200:
        await MusicDao.addMusic(v)
        break;
      case 300:
        await SentenceDao.addSentence(v)
        break;
      default:
        throw new NotFound('内容不存在')
    }
  }

  static async getContentList () {
    const movies = await MovieDao.movieList();
    const musics = await MusicDao.musicList();
    const sentences = await SentenceDao.sentenceList();
    let res = [];
    res.push.apply(res, movies);
    res.push.apply(res, musics);
    res.push.apply(res, sentences);

    // 排序
    res.sort((a, b) => b.created_at.localeCompare(a.created_at));
    return res;
  }

  static async editContent (id, params) {
    switch (params['type']) {
      case 100:
        delete params['url']
        await MovieDao.editMovie(id, params);
        break;
      case 200:
        await MusicDao.editMusic(id, params)
        break;
      case 300:
        await SentenceDao.editSentence(id, params)
        break;
      default:
        throw new NotFound('内容不存在')
    }
  }

  static async deleteContent (id, type) {
    switch (type) {
      case 100:
        await MovieDao.deleteMovie(id);
        break;
      case 200:
        await MusicDao.deleteMusic(id)
        break;
      case 300:
        await SentenceDao.deleteSentence(id)
        break;
      default:
        throw new NotFound('内容不存在')
    }
  }
}

export { Content as ContentService };