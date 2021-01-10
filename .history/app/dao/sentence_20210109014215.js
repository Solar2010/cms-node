import { SentenceModel } from '../model/sentence';
class Sentence {
  static async addSentence (v) {
    // eslint-disable-next-line no-return-await
    return await SentenceModel.create(v);
  }
}

export { Sentence as SentenceDao };