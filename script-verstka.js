var button = document.getElementById('btnBuy')

function buttonClick () {
   
    button.textContent='замовлено!'
    //button.style.background='gray'
    window.alert('дякую за замовлення!')
    this.disabled=true
    window.location.href='reg.html'
}

button.addEventListener('click', buttonClick)

var countdate = document.getElementById('likeCount')
var buttonCounter = document.getElementById('likeBtn')

function counter() {
    countdate.textContent++
    if (textContent=1){
        this.disabled = true;
    }
}

buttonCounter.addEventListener('click', counter)