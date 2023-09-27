function carregar(){
    let msg = document.getElementById('msg')
    let foto = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    // let hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        foto.src = 'imagens/foto-manha.jpg'
        document.body.style.background = '#FEBF92'
    } else if (hora >= 12 && hora < 18) {
        foto.src = 'imagens/foto-tarde.jpg'
        document.body.style.background = '#FF7400'
    } else {
        foto.src = 'imagens/foto-noite.jpg'
        document.body.style.background = '#2A4E8C'
    }
}
