import { SentenceModel } from '../model/sentence';
import { NotFound } from 'lin-mizar';
class Sentence {
  static async addSentence (v) {
    return SentenceModel.create(v);
  }

  static async sentenceList () {
    return SentenceModel.findAll();
  }

  static async editSentence (id, params) {
    const sentence = SentenceModel.findByPk(id);
    if (!sentence) {
      throw new NotFound('内容不存在')
    }
    return (await sentence).update({ ...params })
  }

  static async deleteSentence (id) {
    return Sentence.destroy({
      where: { id }
    });
  }
}

export { Sentence as SentenceDao };