const formLogin = document.getElementById('formLogin')
formLogin.addEventListener('submit', checkForm)

function checkForm(e){
    let inputs = document.querySelectorAll('input')
    inputs.forEach(i => {
        if(i.value == ''){
            i.classList.add('is-invalid')
        }else{
            i.classList.remove('is-invalid')
        }
    });
    for(let i of inputs){
        if(i.value == '')
        return false
    }
    localStorage.setItem('login', true)
    localStorage.setItem('regEmail', floatemail.value)

}

function callback(response){
    const JWTpayload = decodeJWT(response.credential)
    localStorage.setItem('regEmail', JWTpayload.email)
    localStorage.setItem('login', true)
    window.location.href = "index.html"
}

function decodeJWT(data){
    let tokens = data.split(".");
    return JSON.parse(atob(tokens[1]))
}