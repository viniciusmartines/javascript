let numb = [5, 8, 2, 9, 3]

numb.push(1)
numb.sort()
console.log(numb)
console.log(`O vetor tem ${numb.length} posições`)
console.log(`O primeiro valor do vetor é ${numb[0]}`)
let pos = numb.indexOf(9)
if (pos == -1) {
    console.log(`O valor não foi encontrado no vetor`)
} else {
    console.log(`O valor está na posição ${pos}`)
}