export class Ticker {
  lastprice = 0;
  percent = 0;
  change = 0;
  img = 'http://img1.money.126.net/chart/hs/time/210x140/';
  updateHandler;

  constructor(
    public symbol: string,
    public exchange: string
  ) {
    this.img = 'http://img1.money.126.net/chart/hs/time/210x140/' + symbol + '.png';
  }

  update(data, symbol) {
    //console.log(data)
    if (data.code == this.symbol) {
      this.lastprice = data.price;
      this.percent = parseFloat((data.percent * 100).toFixed(2));
      this.change = data.updown;
      this.img = this.img.replace(/#.*/, "") + "#" + new Date().getTime();
      this.updateHandler(data);
    }
  }

  public onUpdateHandler(handler: Function){
    this.updateHandler = handler;
  }
}