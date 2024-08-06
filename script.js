const emailInput=document.getElementById('email');
const errorMessage=document.querySelector('.error__messages');
const button =document.querySelector('.button')

button.addEventListener('click',()=>{
 const email=emailInput.value.trim()
  
 emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email)){
    errorMessage.textContent= "Please enter a valid email address"
    errorMessage.style.display="block"
  }
  else{
     errorMessage.style.display="none"
  }

})
