let qntd = 0
let soma = 0
let txtf = document.getElementById("numer")
let txts = document.getElementById("sele")
let opt = document.createElement('option')
function adicion() {
    let num = Number(txtf.value)
    if ((num.length == 0) || (num < 1 || num > 100)) {
        alert(`DIGITE UM VALOR DENTRO DOS PARÂMETROS!`)
    } else {
        opt.innerHTML = `Valor ${num} adicionado<br>`
        txts.appendChild(opt)
        qntd = qntd + 1
        soma = soma + num
        media = soma/qntd
    }
}



function final() {
    let answ = document.getElementById("resp")
    answ.innerHTML = `Ao todo, temos ${qntd} números cadastrados<br>`
    answ.innerHTML += `O maior valor informado foi <br>`
    answ.innerHTML += `O menor valor informado foi <br>`
    answ.innerHTML += `Somando todos os valores, temos ${soma}<br>`
    answ.innerHTML += `A média dos valores digitados é  ${media}<br>`
    answ.style.lineHeight = "40px"
}