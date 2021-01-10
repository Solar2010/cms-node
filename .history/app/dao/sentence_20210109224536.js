import { SentenceModel } from '../model/sentence';
class Sentence {
  static async addSentence (v) {
    return SentenceModel.create(v);
  }

  static async sentenceList () {
    return SentenceModel.findAll();
  }
}

export { Sentence as SentenceDao };