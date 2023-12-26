const fs = require('fs');

fs.readFile('r.txt', 'utf-8', function(err, data) {
  if(err) {
    console.error(err);
  }
  else {
    console.log(data);
  }
})

function expoOp() {
  let count = 0;
  for(let i = 0; i < 1000000; i++) {
    count += i;
  }
  console.log(count);
}