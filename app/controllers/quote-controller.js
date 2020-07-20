import QuoteService from "../services/quote-service.js";
import _store from "../store.js"

function _drawQuote() {
  document.getElementById("quote").textContent = _store.State.quote.quote;
  document.getElementById("quote").dataset.originalTitle= _store.State.quote.author;
}
export default class QuoteController {
  constructor() {
    this.getQuote();
  }
  getQuote() {
    _store.subscribe("quote", _drawQuote)
    QuoteService.getQuote();

  }
}
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});