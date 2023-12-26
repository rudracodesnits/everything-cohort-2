const fs = require('fs');

fs.readFile('r.txt', 'utf-8', function(err, data) {
  data = data + " okay this works";
  fs.writeFile('r.txt', data, function(err) {
    if(err) {
      console.log(err);
    }
  });
  console.log(data);
})