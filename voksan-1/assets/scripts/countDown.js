class ClientPlus {
  constructor(selectPlus, maxNum, duration) {
    this.clientNum = document.querySelector(selectPlus);
    this.maxNum = maxNum;
    this.time = duration / maxNum;
    this.timer = setInterval(() => {
      this.clientPlus(selectPlus);
    }, this.time);
  }

  clientPlus(selectPlus) {
    if (this.clientNum != null) {
      this.clientNum.innerHTML++;
      if (this.clientNum.innerHTML >= this.maxNum) {
        clearInterval(this.timer);
        countWidget = true;
      }
    }
  }
}
