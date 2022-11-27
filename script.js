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


const one = document.querySelector('.first');
const two = document.querySelector('.second');
const rub = document.querySelector('.rub');
const usd = document.querySelector('.usd');
const eur = document.querySelector('.eur');
const gbp = document.querySelector('.gbp');

document.querySelector(".rub").addEventListener("click", moneyConvert);
document.querySelector(".usd").addEventListener("click", moneyConvert);

one.addEventListener("input", moneyConvert);
two.addEventListener("input", moneyConvert);

function moneyConvert(){
    fetch('https://api.exchangerate.host/latest?base=USD&symbols=RUB')
    .then(response => response.json())
    .then( data => {
        if ()
    }
)}

// const amount = data.rates.USD;
// const usdField = usd.value;
// const rubField = (usdField * amount).toFixed(4);
// two.value = rubField;

// currency.addEventListener("click", function() {
//     if (currency == rub ){
//             two=one.value*1.68;
//                  console.log(conamount.value +' EUR = ' + c +' AZN');
//           }
//     }
    
// )