import { LinRouter } from 'lin-mizar';
import { ContentService } from '../../service/content';
import { AddContentValidator, EditContentValidator, DeleteContentValidator } from '../../validator/content';
import { groupRequired } from '../../middleware/jwt';
import { logger } from '../../middleware/logger';
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
    const v = await new AddContentValidator().validate(ctx);
    ContentService.AddContent(v.get('body'));
    ctx.success({
      msg: '新增成功'
    });
  });