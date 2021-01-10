import { FlowDao } from '../dao/flow';
class Flow {
  static async flowList () {
    const list = FlowDao.flowList();

    return list;
  }
}

export { Flow as FlowService }