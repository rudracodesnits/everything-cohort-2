class Counter {
  constructor() {
    this.x = 0;
  }

  increment() {
    console.log(this.x);
    this.x++;

    //setting up a timeout for the next incre after 1 seconds (1000 ms)
    if(this.x <= 10) {
      setTimeout(() => this.increment(),1000);
    }
  }
}

//calling the func
const counter = new Counter();
//starting the counter
counter.increment();