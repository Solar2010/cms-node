import { FlowDao } from '../dao/flow';
class Flow {
  static async flowList () {
    const list = await FlowDao.flowList();

    if (list.length === 0) {
      return list;
    }

    return list;
  }
}

export { Flow as FlowService }