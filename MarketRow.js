class MarketRow {

  constructor() {
    this.update();
  }

  update() {
    this.available = false;
    this.initialDate = new Date();
  }

  checkTimer() {
    // Each client spends 20 seconds paying
    let now = new Date();
    if (now - this.initialDate > 19999) {
      this.available = true;
      return true;
    }
  }

}
