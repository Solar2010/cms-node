import { FlowDao } from '../dao/flow';
class Flow {
  static async flowList () {
    const list = await FlowDao.flowList();

    if (list.length === 0) {
      return list;
    }

    const newList = [];

    for (let i = 0; i < list.length; i++) {
        let defail;
        switch (list[i].type) {
        case 100:
          break;
        case 200:
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