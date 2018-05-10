function aVeryBigSum(n, ar) {
    let bigSum = ar.reduce( (accumulator, currentValue) => accumulator + currentValue);
    return bigSum;
}

function main() {
    const input1 = "5"
    const input2 = "1000000001 1000000002 1000000003 1000000004 1000000005";
    const n = parseInt(input1, 10);
    const ar = input2.split(' ').map(arTemp => parseInt(arTemp, 10));
    let result = aVeryBigSum(n, ar);

    console.log(result);
}

main();
