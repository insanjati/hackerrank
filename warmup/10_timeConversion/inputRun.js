'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function timeConversion(s) {
    let [hours, minutes, seconds] = s.split(':').map(x => x);

    if (hours === '12') {
        hours = '00';
    }
    if (seconds[2] === 'P') {
        hours = parseInt(hours, 10) + 12;
    }
    
    return `${hours}:${minutes}:${seconds[0]}${seconds[1]}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const s = readLine();
    let result = timeConversion(s);

    ws.write(result + "\n");
    ws.end();
}
