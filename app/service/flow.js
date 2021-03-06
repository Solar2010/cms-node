import { FlowDao } from '../dao/flow';
import { MovieModel } from '../model/movie';
import { MusicModel } from '../model/music';
import { SentenceModel } from '../model/sentence';
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
          detail = await MovieModel.findByPk(2);
          console.log(detail)
          break;
        case 200:
          detail = await MusicModel.findByPk(list[i].art_id);
          break;
        case 300:
          detail = await SentenceModel.findByPk(list[i].art_id);
          break;
      }
      list[i].setDataValue('detail', detail);
      newList.push(list);
    }
    return newList;
  }
}

export { Flow as FlowService }