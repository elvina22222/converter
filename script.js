var input = document.querySelector('input');
var exclude = [8, 46, 37 , 39]
input.addEventListener('keydown',function(e){
    var code = e.keyCode 
    if (!(code >= 48 && code <= 57 ) && !!!exclude.find( k => k === +code)){
        e.preventDefault()
        return false;
    }
    var len = e.target.value.length
    if ((code >= 48 && code <= 57))
        if (len % 4 === 0 && len <50 && code!==8)
            e.target.value += " "
})

const currency = document.querySelector('.cur');
const one = document.querySelector('.first');
const two = document.querySelector('.second');
const rub = document.querySelector('.rub');
const usd = document.querySelector('.usd');
let a=0;
currency.addEventListener("click", function() {
    if (currency == rub ){
            c=one.value*1.68;
                 console.log(conamount.value +' EUR = ' + c +' AZN');
          }
    }
    
})