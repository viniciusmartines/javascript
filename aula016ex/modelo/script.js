let txtf = document.getElementById('numer')
let txts = document.getElementById('sele')
let resp = document.getElementById('resp')
let valores = []

function isnumero(v) {
    if(Number(v) >= 1 && Number(v) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(v, l) {
    if(l.indexOf(Number(v)) != -1) {
        return true
    } else {
        return false
    }
}

function adicion() {
    if(isnumero(txtf.value) && !inlista(txtf.value, valores)) {
        valores.push(Number(txtf.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${txtf.value} adicionado.`
        txts.appendChild(opt)
        resp.innerHTML = ''
    } else {
        alert("Valor inválido ou já adicionado na lista.")
    }
    txtf.value = ''
    txtf.focus()
}

function analisa(x) {
    if (x.length == 0) {
        return true
    } else {
        return false
    }
}

function final() {
    if(!analisa(valores)) {
        // valores.sort()
        let qntd = valores.length
        // let menor = valores[0] EU QUE FIZ
        // let maior = valores[(valores.length) -1]
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let cont in valores) {
            soma += valores[cont]
            if (valores[cont] > maior) {
                maior = valores[cont]
            }
            if (valores[cont] < menor) {
                menor = valores[cont]
            }
        }
        media = soma/qntd
        resp.innerHTML = ''
        resp.innerHTML += `<p>Ao todo, temos ${qntd} números cadastrados.</p>`
        resp.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resp.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resp.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resp.innerHTML += `<p>A média dos valores digitadso é ${media}.</p>`
    } else {
        alert("Adicione valores antes de finalizar!")
    }
}