function simpleArraySum(ar) {
    let arSum = ar.reduce( (accumulator, currentValue) => accumulator + currentValue);
    return arSum;
}

function main() {
    // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    // const arCount = parseInt(readLine(), 10);
    // const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));
    const ar = [1, 2, 3, 4, 10, 11];
    console.log(simpleArraySum(ar));
}

main();