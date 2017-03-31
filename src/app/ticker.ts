export class Ticker {
  lastprice:0;
  constructor(
    public symbol: string,
    public exchange: string
  ) {  }

  update(data, symbol){
    console.log(data)
    if(data.code == this.symbol){
      this.lastprice = data.price;
    }
  }
}