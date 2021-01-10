import { NotFound } from 'lin-mizar';
import { FlowModel } from '../model/flow';
class Flow {
  static async addFlow (v) {
    const res = await FlowModel.create({
      index: v.get('body.index'),
      type: v.get('body.type'),
      art_id: v.get('body.art_id'),
      status: v.get('body.status')
    });
    return res;
  }

  static async flowList () {
    return FlowModel.findAll({
      order: ['index']
    });
  }

  static async editFlow(id, params) {
    const flow = FlowModel.findByPk(id)

    if (!flow) {
      throw new NotFound();
    }
  }
}

export { Flow as FlowDao };