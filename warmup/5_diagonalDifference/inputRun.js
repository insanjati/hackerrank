process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function diagonalDifference(a) {
    let diagOne = 0, diagTwo = 0, n=a.length;
    
    for (let i=0; i<n; i++) {
      for (let j=0; j<n; j++) {
        if (i === j) {
          diagOne += a[i][j];
        }
        if (i+j === n-1) {
          diagTwo += a[i][j];
        }
      }
    }
    return Math.abs(diagOne - diagTwo);
}

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
