function solve(a0, a1, a2, b0, b1, b2) { 
    let alice = Array.prototype.slice.call(arguments);
    let bob = alice.splice(3, alice.length);
    let a = 0, b = 0;
    for (let i=0; i<bob.length; i++) {
        if (alice[i] > bob[i]) {
        a++;
        }
        if (alice[i] < bob[i]) {
        b++;
        }
    }
    return [a, b];
}

function main() {
    const input1 = "5, 6, 7"
    const input2 = "3, 6, 10"
    const a0A1A2 = input1.split(' ');
    const a0 = parseInt(a0A1A2[0], 10);
    const a1 = parseInt(a0A1A2[1], 10);
    const a2 = parseInt(a0A1A2[2], 10);
    const b0B1B2 = input2.split(' ');
    const b0 = parseInt(b0B1B2[0], 10);
    const b1 = parseInt(b0B1B2[1], 10);
    const b2 = parseInt(b0B1B2[2], 10);

    let result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));    
}
  

main();