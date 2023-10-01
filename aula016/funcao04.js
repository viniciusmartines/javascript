function fatorial(n1) {
    let fat = 1
    for(let cont = n1; cont > 1; cont--) {
        fat = fat * cont
    }
    return fat
}

console.log(fatorial(5))