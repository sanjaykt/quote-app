import {Quote} from "../data/quote.interface";

export class QuotesService {
  private favouritQuotes: Quote[] = [];

  addQuoteToFavourites(quote: Quote) {
      this.favouritQuotes.push(quote);
  }

  removeQuoteFromFavourites(quote: Quote) {
    const position = this.favouritQuotes.findIndex((quoteEl: Quote) => {
      return quoteEl.id === quote.id
    });
  }

  getFavouriteQuotes() {
    return this.favouritQuotes.slice();
  }
}
