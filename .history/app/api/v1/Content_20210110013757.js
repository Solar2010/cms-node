import { LinRouter } from 'lin-mizar';
import { ContentService } from '../../service/content';
import { AddContentValidator, EditContentValidator, DeleteContentValidator } from '../../validator/content';
const contentApi = new LinRouter({
  prefix: '/v1/content'
});

contentApi.post('/', async ctx => {
  const v = await new AddContentValidator().validate(ctx);
  ContentService.AddContent(v.get('body'));
  ctx.success({
    msg: '新增成功'
  });
});

contentApi.get('/', async ctx => {
  const list = await ContentService.getContentList();
  ctx.json(list);
});

contentApi.put('/:id', async ctx => {
  const v = await new EditContentValidator().validate(ctx);
  const id = v.get('path.id');
  const params = v.get('body');

  await ContentService.editContent(id, params);

  ctx.success({
    msg: '修改成功'
  });
});

contentApi.delete('/:id', async ctx => {
  const v = await new DeleteContentValidator().validate(ctx);
  const id = v.get('path.id');
  const type = v.get('query.type');

  await ContentService.deleteContent(id, type);

  ctx.success({
    msg: '删除成功'
  });
});
module.exports = { contentApi };