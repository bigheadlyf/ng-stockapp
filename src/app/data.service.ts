import { Injectable } from '@angular/core';
import { Ticker } from './ticker';
import { Jsonp, Http } from '@angular/http';

@Injectable()
export class DataService {
  timer;
  tickers = [];

  constructor(private jsonp: Jsonp) {
    this.timer = window.setInterval(()=>{
      this.getData();
    }, 10000);
   }

  subscribe(tk: Ticker) {
    this.tickers.push(tk);
  }

  private publish(data, symbol) {
    for (let tk of this.tickers) {
      tk.update(data);
    }
  }

  private getData() {
    let tks = [];
    for (let tk of this.tickers) {
      tks.push(tk.symbol);
    }
    this.jsonp.get('http://api.money.126.net/data/feed/' + tks.join(',') + ',money.api?1490939418000&callback=JSONP_CALLBACK').subscribe(
      res => {
        let rs = res.json();
        for (let r in rs) {
          this.publish(rs[r], r);
        }
      });
  }
}
