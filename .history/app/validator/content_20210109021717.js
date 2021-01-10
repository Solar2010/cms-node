import { LinValidator, Rule } from 'lin-mizar';
class AddContentValidator extends LinValidator {
  constructor () {
    super();

    this.image = [
      new Rule('isNotEmpty', '内容封面不能为空')
    ];

    this.type = [
      new Rule('isNotEmpty', '内容类型不能为空'),
      new Rule('isInt', '类型必须是数字')
    ];

    this.title = [
      new Rule('isNotEmpty', '内容标题不能为空')
    ];

    this.content = [
      new Rule('isNotEmpty', '内容不能为空')
    ];

    this.url = [
      new Rule('isOptional'),
      new Rule('isUrl', '必须是合法的url地址')
    ];

    this.pubDate = [
      new Rule('isNotEmpty', '发布时间不能为空'),
      new Rule('isISO8601', '必须是日期类型')
    ];

    this.status = [
      new Rule('isNotEmpty', '有效状态未指定'),
      new Rule('isInt', '有效状态必须是数字')
    ];
  }
}

export { AddContentValidator };