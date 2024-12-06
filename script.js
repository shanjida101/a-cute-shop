const logReg = document.querySelector('.log-reg');
const loginLink= document.querySelector('.log-link');
const registerLink= document.querySelector('.register-link');
 
registerLink.addEventListener('click',()=> {
    logReg.classList.add('active');
}
);
loginLink.addEventListener('click',()=> {
    logReg.classList.remove('active');
}
);

