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
    var n = 3;
    var a = [ [11, 2, 4], [4, 5, 6], [10, 8, -12] ];
    // for(a_i = 0; a_i < n; a_i++){
    //    a[a_i] = input.split(' ');
    //    a[a_i] = input.map(Number);
    // }

    var result = diagonalDifference(a);
    console.log("" + result);
}

main();
