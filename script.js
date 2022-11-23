var input = document.querySelector('input');
var exlude = [8, 46, 37 , 39]
input.addEventListener('keydown',function(e){
    var code = e.keyCode 
    if (!(code >= 48 && code <= 57 ) && !!!exlude.find( k => k === +code)){
        e.preventDefault()
        return false;
    }
    var len = e.target.value.length
    if ((code >= 48 && code <= 57))
        if (len % 4 === 0 && len <50 && code!==8)
            e.target.value += " "
})