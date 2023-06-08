// function registerPage(){
// window.open("http://127.0.0.1:5500/RegisterPage/registerPage.html")
// }
// function submitLogin(e){
    
//     e.preventDefault()
//     // let emailValue=document.getElementById("log_email").value
//     // let passwordValue=document.getElementById("log_pass").value
   
    
// }

let form = document.getElementById("form")
console.log(form);

form.addEventListener("submit" , (e) => {
   e.preventDefault()
   
   let form1 = new FormData(form)
  
   
   let obj = Object.fromEntries(form1)
   
   let json = JSON.stringify(obj)
   console.log(json);
})