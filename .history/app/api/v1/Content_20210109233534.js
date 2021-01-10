import { LinRouter } from 'lin-mizar';
import { ContentService } from '../../service/content';
import { AddContentValidator, EditContentValidator } from '../../validator/content';
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
  ctx.json(v.get('body'));
});

module.exports = { contentApi };