export default class Quote {
  constructor(data) {
    this.quote = data.body || data.quote;
    this.author = data.author;
  }

}