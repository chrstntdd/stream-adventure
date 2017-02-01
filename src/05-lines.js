let split = require('split');
let through = require('through2');

let lineCount = 0;
let thru = through(function (buf, _, next) {
    let line = buf.toString();
    if (isEven(lineCount)) {
        this.push(line.toLowerCase() + '\n');
    } else {
        this.push(line.toUpperCase() + '\n');
    }
    lineCount++;
    next();
});

function isEven(n) {
    return n % 2 === 0;
}

process.stdin
    .pipe(split())
    .pipe(thru)
    .pipe(process.stdout);