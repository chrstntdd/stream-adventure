let fs = require('fs');

let file = process.argv[2];

fs.createReadStream(file).pipe(process.stdout);