import { LinRouter } from 'lin-mizar';
import { ContentService } from '../../service/content';
import { AddContentValidator } from '../../validator/content';
const contentApi = new LinRouter({
  prefix: '/v1/content'
});

contentApi.post('/', async ctx => {
  const v = await new AddContentValidator().validate(ctx);
  await ContentService.AddContent(v.get('body'));
  ctx.success({
    msg: '新增成功'
  });
});

module.exports = { contentApi };