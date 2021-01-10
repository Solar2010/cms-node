import { FlowDao } from '../dao/flow';
class Flow {
  static async flowList () {
    FlowDao.flowList();
  }
}

export { Flow as FlowService }