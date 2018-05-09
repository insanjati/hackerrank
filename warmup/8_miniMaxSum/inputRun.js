'use strict';

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

function miniMaxSum(arr) {
    let allSum = [], result = [];
    for (let i=0; i<arr.length; i++) {
        let sum = 0;
        for (let j=0; j<arr.length-1; j++) {
        sum += arr[j];
        }
        allSum.push(sum);
        arr.push(arr[0]);
        arr.shift();
    }
    console.log((Math.min(...allSum)) + ' ' + (Math.max(...allSum)))
  
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}