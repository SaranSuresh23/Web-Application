document.querySelector('#profile').addEventListener('click',goToLogin)
let flags = JSON.parse(localStorage.getItem('flag'))
function goToLogin(){
    if(flags){
        window.location.href = 'account.html'
    }else{
        window.location.href = 'login.html'
    }
    }