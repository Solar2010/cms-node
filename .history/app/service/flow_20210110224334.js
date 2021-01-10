import { FlowDao } from '../dao/flow';
import { MovieModel, MusicModel, SentenceModel } from '../model/movie';
class Flow {
  static async flowList () {
    const list = await FlowDao.flowList();

    if (list.length === 0) {
      return list;
    }

    const newList = [];

    for (let i = 0; i < list.length; i++) {
      let detail;
      switch (list[i].type) {
        case 100:
          detail = MovieModel.findByPk(list[i].art_id);
          break;
        case 200:
          detail = MusicModel.findByPk(list[i].art_id);
          break;
        case 300:
          detail = SentenceModel.findByPk(list[i].art_id);
          break;
        default:
      }
      newList.setData
    }

    return list;
  }
}

export { Flow as FlowService }