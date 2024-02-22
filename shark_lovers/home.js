var bolinha = document.querySelector('.bolinhas')
var quant = document.querySelectorAll('.slides  .imagens')
var atual = 0
var imgem = document.getElementById('atual')
var proximo = document.getElementById('proximo')
var voltar = document.getElementById('voltar')
var rolar = true
//toda vez que "i = 0" , "i<quantidade de imagens" "i" vai aumentar
for (let i = 0; i < quant.length; i++) {
    var div = document.createElement('div')
    div.id = i
    bolinha.appendChild(div)
}
document.getElementById('0').classList.add('imgAtual')

var pos = document.querySelectorAll('.bolinhas div')

for (let i = 0; i < pos.length; i++) {
    pos[i].addEventListener('click', () => {
        atual = pos[i].id
        rolar = false
        slide()
    })
}
voltar.addEventListener('click', () => {
    atual--
    rolar = false
    slide()
})
proximo.addEventListener('click', () => {
    atual++
    rolar = false
    slide()
})
function slide(){
    if (atual >= quant.length) {
        atual = 0
    }
    else if (atual < 0) {
        atual = quant.length-1
    }
    document.querySelector('.imgAtual').classList.remove('imgAtual')
    imgem.style.marginLeft = -580*atual+'px'
    document.getElementById(atual).classList.add('imgAtual')
}
setInterval(() => {
    if(rolar){
    atual++
    slide()
    }
    else{
        rolar = true
    }
}, 4000)