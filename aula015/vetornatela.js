let numb = [8, 2, 536, 65, 1, 10, 46, 6]

/*
for(let cont = 0; cont < numb.length; cont++ ) {
    console.log(`Na posição ${cont} temos o valor ${numb[cont]}`)
}
*/


for(let cont in numb) {
    console.log(`Na posição ${cont} temos o valor ${numb[cont]}`)
}