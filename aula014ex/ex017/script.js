function tabuada() {
    let txtn = document.getElementById('numeru')
    let seltabu = document.getElementById('tabu')
    
    if (txtn.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let num = Number(txtn.value)
        let cont = 1
        seltabu.innerHTML = ''
        while (cont <= 10) {
            let multi = num * cont
            let item = document.createElement('option')
            item.innerHTML = `${num} x ${cont} = ${multi}`
            item.value = `tab${cont}`
            seltabu.appendChild(item)
            cont++
        }
    }
}