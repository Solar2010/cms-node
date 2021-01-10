import { FlowDao } from '../dao/flow';
class Flow {
  static async flowList () {
    const list = await FlowDao.flowList();

    if (list.length === 0) {
      return list;
    }

    const newList = [];

    for (let i = 0; i < list.length; i++) {
        switch (list[i])
    }

    return list;
  }
}

export { Flow as FlowService }