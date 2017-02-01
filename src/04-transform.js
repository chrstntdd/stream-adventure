let through = require('through2');

let thru = through(function (buf, enc, next) {
    this.push(buf.toString().toUpperCase());
    next();
});

process.stdin.pipe(thru).pipe(process.stdout);