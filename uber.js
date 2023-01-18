class Uber {
  constructor(distance, rate, waitingperiod) {
    this.distance = distance;
    this.rate = rate;
    this.waitingperiod = waitingperiod;
  }
  setDistance(dist) {
    this.distance = dist;
  }
  getRideDetails() {
    return `The distance of the ride is ${this.distance} km with rate of RS.${this.rate} with a waiting period of ${this.waitingperiod} minutes`;
  }
  getPrice() {
    let price = this.distance * this.rate + 5 * this.waitingperiod;
    return price;
  }
}

let uber1 = new Uber(40, 20, 10);
uber1.setDistance(30);

console.log(uber1.getPrice());
console.log(uber1.getRideDetails());
