import { LinValidator, Rule } from 'lin-mizar';
class AddFlowValidator extends LinValidator {
  constructor () {
    super();
    this.index = [
      new Rule('isNotEmpty', '有效状态未指定'),
      new Rule('isInt', '有效状态必须是数字')
    ];
    this.type = [
      new Rule('isNotEmpty', '有效状态未指定'),
      new Rule('isInt', '有效状态必须是数字')
    ];
    this.art_id = [
      new Rule('isNotEmpty', '有效状态未指定'),
      new Rule('isInt', '有效状态必须是数字')
    ];
    this.status = [
      new Rule('isNotEmpty', '有效状态未指定'),
      new Rule('isInt', '有效状态必须是数字')
    ];
  }
}

class EditContentValidator extends AddFlowValidator {
  constructor () {
    super();
    this.id = [
      new Rule('isNotEmpty', 'id不能为空'),
      new Rule('isInt', 'ID必须是数字', { min: 1 })
    ];
  }
}

class DeleteContentValidator extends LinValidator {
  constructor () {
    super();
    this.id = [
      new Rule('isNotEmpty', 'id不能为空'),
      new Rule('isInt', 'ID必须是数字', { min: 1 })
    ];
    this.type = [
      new Rule('isNotEmpty', '内容类型不能为空'),
      new Rule('isInt', '类型必须是数字')
    ];
  }
}
export { AddFlowValidator, EditContentValidator, DeleteContentValidator };