import { LinRouter } from 'lin-mizar';
import { FlowDao } from '../../dao/flow';
import { AddFlowValidator, EditFlowValidator } from '../../validator/flow';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
import { FlowService } from '../../service/flow';
const flowApi = new LinRouter({
  prefix: '/v1/flow'
});

flowApi.linPost(
  'addFlow',
  '/',
  {
    permission: '添加内容',
    module: '内容管理',
    mount: true
  },
  groupRequired,
  logger('{user.username}新增了内容'),
  async ctx => {
    const v = await new AddFlowValidator().validate(ctx);
    FlowDao.addFlow(v);
    ctx.success({
      msg: '新增成功'
    });
  });
flowApi.linGet(
  'listFlow',
  '/',
  {
    permission: '内容列表',
    module: '内容管理',
    mount: true
  },
  groupRequired,
  logger('{user.username}查看了内容列表'),
  async ctx => {
    const list = await FlowService.flowList();

    return ctx.json(list);
  });

flowApi.linPut(
  'editFlow',
  '/:id',
  {
    permission: '内容列表编辑',
    module: '内容管理',
    mount: true
  },
  groupRequired,
  logger('{user.username}编辑了内容列表'),
  async ctx => {
    const v = await new EditFlowValidator().validate(ctx);

    const id = v.get('path.id')
    const params = v.get('body')

    return ctx.json(v);
  });
module.exports = flowApi;