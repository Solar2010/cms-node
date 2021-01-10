import { FlowDao } from '../dao/flow';
import { MovieModel } from '../model/movie';
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
          detail = MovieModel.findByPk(list[i].atr_id);
          break;
        case 200:
            detail = 
          break;
        case 300:
          break;
        default:

      }
    }

    return list;
  }
}

export { Flow as FlowService }