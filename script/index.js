const btn = document.querySelector(".btn");
const input = document.querySelector('[type="email"]');
const msg = document.querySelector('.error__message')




function validate(email){

    if(email.indexOf("@gmail.com") === -1){
        return "Please provide a valid email address"
    }
}

input.addEventListener("blur", ()=>{
    const error = validate(input.value) 
    msg.textContent= error;
    input.setAttribute('class', "error__input")
})
