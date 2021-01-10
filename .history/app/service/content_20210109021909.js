import { MovieDao } from '../dao/movie';
import { MusicDao } from '../dao/music';
import { SentenceDao } from '../dao/sentence';
import { NotFound } from 'lin-mizar';
class Content {
  static AddContent (v) {
    switch (v['type']) {
      case 100:
        delete v['url']
        MovieDao.addMovie(v);
        break;
      case 200:
        MusicDao.addMusic(v)
        break;
      case 300:
        SentenceDao.addSentence(v)
        break;
      default:
        throw new NotFound('内容不存在')
    }
  }
}

export { Content as ContentService };