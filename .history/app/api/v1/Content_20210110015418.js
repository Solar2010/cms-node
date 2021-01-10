import { LinRouter } from 'lin-mizar';
import { ContentService } from '../../service/content';
import { AddContentValidator, EditContentValidator, DeleteContentValidator } from '../../validator/content';
const contentApi = new LinRouter({
  prefix: '/v1/content'
});

contentApi.linPost(
  'addContent',
  '/', 
  {
    permission: ''
  },
  async ctx => {
  const v = await new AddContentValidator().validate(ctx);
  ContentService.AddContent(v.get('body'));
  ctx.success({
    msg: '新增成功'
  });
});

contentApi.linGet('/', async ctx => {
  const list = await ContentService.getContentList();
  ctx.json(list);
});

contentApi.linPut('/:id', async ctx => {
  const v = await new EditContentValidator().validate(ctx);
  const id = v.get('path.id');
  const params = v.get('body');

  await ContentService.editContent(id, params);

  ctx.success({
    msg: '修改成功'
  });
});

contentApi.linDelete('/:id', async ctx => {
  const v = await new DeleteContentValidator().validate(ctx);
  const id = v.get('path.id');
  const type = v.get('query.type');

  await ContentService.deleteContent(id, type);

  ctx.success({
    msg: '删除成功'
  });
});
module.exports = { contentApi };