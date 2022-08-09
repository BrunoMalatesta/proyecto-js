/*VARIABLES*/
let nombre = document.getElementById("name")
let email = document.getElementById("email")
let dire = document.getElementById("adress")
let form = document.getElementById("form")
let parrafo = document.getElementById("warnings")

/*INTEREACUAMOS CON EL DOM DEL INICIO*/
form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(dire.value.length < 8){
        warnings += `La direccion no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        /*GUARDO EN LOCAL STORAGE LOS DATOS. PARA USARLOS PARA EL ENVIO*/
        localStorage.setItem('nombre', JSON.stringify(nombre.value))
        localStorage.setItem('email', JSON.stringify(email.value))
        localStorage.setItem('direccion', JSON.stringify(dire.value))
        window.open("./index2.html", "_self")
    }
})







