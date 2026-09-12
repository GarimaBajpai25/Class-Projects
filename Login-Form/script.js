const form=document.querySelector('form')
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const button=document.querySelector("#button");
const message=document.querySelector("#message");
const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
form.addEventListener('submit',function(e){
    e.preventDefault();
    const emailValue=email.value;
    const passwordValue=password.value;
    const testEmail=emailRegex.test(emailValue);
    const testPassword=passwordRegex.test(passwordValue);
    if ( !testEmail){
        message.textContent="Invalid email ";
        message.style.color="red";
        return;
    }else if(!testPassword){
        message.textContent="Password must be at least 8 characters must include uppercase,lowercase and special character .";
        message.style.color="red";
        return;
    }
    if(testEmail && testPassword){
        message.textContent="Login successful";
        message.style.color="green";
    }


})