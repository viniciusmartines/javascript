function verificar() {

    let data = new Date()
    let ano = data.getFullYear()
    let caixa = document.getElementById('txtano')
    let resp = document.getElementById('resp')

    if (Number(caixa.value) > ano || caixa.value.length == 0) {
        alert('[ERRO] verifique os dados e tente novamente')
    } else {
        let fsex = document.getElementsByName('sex')
        let idade = ano - Number(caixa.value)
        let gene = ''
        let fotos = document.createElement('img')
        fotos.setAttribute('id', 'foto')
        fotos.style.width = '250px'
        fotos.style.height = '250px'
        fotos.style.borderRadius = '50%'
        fotos.style.display = 'block'
        fotos.style.margin = 'auto'
        fotos.style.padding = '10px'
        if (fsex[0].checked) {
            gene = 'Homem'
            if (idade >= 0 && idade < 10) {
                fotos.setAttribute('src', 'imagens/homem-bebe.jpg')
            } else if (idade < 21) {
                fotos.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                fotos.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else {
                fotos.setAttribute('src', 'imagens/homem-velho.jpg')
            }
        } else if (fsex[1].checked) {
            gene = 'Mulher'
            if (idade >= 0 && idade < 10) {
                fotos.setAttribute('src', 'imagens/mulher-bebe.jpg')
            } else if (idade < 21) {
                fotos.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                fotos.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else {
                fotos.setAttribute('src', 'imagens/mulher-velha.jpg')
            }
        }
        resp.innerHTML = `Detectamos ${gene} com ${idade} anos`
        resp.style.textAlign = 'center'
        resp.appendChild(fotos)
    }
}
