import { SentenceModel } from '../model/sentence';
class Sentence {
  static async addSentence (v) {
    return SentenceModel.create(v);
  }
}

export { Sentence as SentenceDao };