let counter = 0;
let answer = setInterval(function() {
  console.log(counter++);
}, 1500);

//setTimeout executes the callback only 1nce unlike setInterval