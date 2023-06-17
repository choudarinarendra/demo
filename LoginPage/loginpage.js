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
   let fe=fetch("http://localhost:8080/users/login",{
        method: "POST", 
       
        headers: {
            "Content-Type": "application/json",
           
          },
       
          body: json,
       })
       fe.then((x)=>x.json())
       .then((x)=>{
        console.log(x);
         if(x.id!==0&&x.phno!==0&&x.name!==null){
        sessionStorage.setItem("name",x.name)
        sessionStorage.setItem("email",x.email)
        sessionStorage.setItem("password",x.password)
        sessionStorage.setItem("phno",x.phno)
        sessionStorage.setItem("id",x.id)
        if(x.account!==null){
          sessionStorage.setItem("AccountId",x.account.id)
          sessionStorage.setItem("AccNo",x.account.accNo)
          sessionStorage.setItem("minBal",x.account.minBal)
          sessionStorage.setItem("intAmt",x.account.intAmt)
          sessionStorage.setItem("amount",x.account.amount)
          sessionStorage.setItem("accountPass",x.account.password)
        }
        window.open("../UserPage/userpage.html")
         }
         else{
          
         }
       })
       .catch((x)=>{
        console.log(x);
       })
})