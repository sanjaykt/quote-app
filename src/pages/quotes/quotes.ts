import {Component, OnInit} from '@angular/core';
import {AlertController, NavParams} from "ionic-angular";
import {Quote} from "../../data/quote.interface";
import {QuotesService} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  constructor(
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService) {}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  // add elvis operator (?) in template to use this approach
  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // }
  onAddToFavourite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            this.quoteService.addQuoteToFavourites(selectedQuote)
          }
        },
        {
          text: 'No, I changed my mind!',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!')
          }
        }
      ]
    });
    alert.present();
  }

}
