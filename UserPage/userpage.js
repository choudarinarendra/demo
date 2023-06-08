let student_value=document.getElementsByClassName("student_values")

student_value[0].textContent=`${localStorage.getItem("id")}`
student_value[1].textContent=`${localStorage.getItem("name")}`
let ph=localStorage.getItem("number")
student_value[2].textContent=(`${ph.slice(0,2)}`+"*******"+`${ph.slice(0.-2)}`)

/* ------------------------------------create Amount process-------------------------   */ 
document.getElementById("create_Account").addEventListener("click",()=>{
    let user_details=document.getElementById("user_details")
    user_details.setAttribute("class","User_details_class")
      document.getElementById("user_details").innerHTML=`<div id="remove_CreateAccount">
      <form action="" id="form_create" onsubmit="onsubmitCreate()">
      <option selected hidden>MINIMUM TRANSACTION</option>
      <select name="minBal" id="select_user" onclick="onClickSelect()">
      <option  selected hidden>MINIMUM TRANSACTION</option>
          <option >0</option>
          <option >100</option>
          <option >1000</option>
          <option >10000</option>
  
         </select><br><br>
        <input name="password" id="pass_user_create_Account" class="user_inputs" type="password" placeholder="password"><i onmousedown="eyeOpenePassword()" onmouseup="eyeclosePassword()" id="eye_close" class="fa-solid fa-eye"></i><br><br>
        <input name="conformPassword" id="con_pass_user_create_Account" class="user_inputs" type="password" placeholder="conform password"><i onmousedown="eyeOpenConfirmPassword()" onmouseup="eyecloseConfirmPassword()" id="conform_close" class="fa-solid fa-eye"></i><br><br>
        <input name="amount" id="user_create_Account" class="user_inputs" type="number" placeholder="Enter Amount"><br><br>
        <button id="Proceed_btn">Proceed</button>
        
      </form>
     </div>`
     
})
function eyeOpenePassword(){
    let password=document.getElementById("pass_user_create_Account")
    password.removeAttribute("type")
    password.setAttribute("type","text")
    let openEye=document.getElementById("eye_close")
    openEye.setAttribute("class","fa-solid fa-eye-slash")
}
function eyeclosePassword() {
    let password=document.getElementById("pass_user_create_Account")
    password.removeAttribute("type")
    password.setAttribute("type","password")
    let openEye=document.getElementById("eye_close")
    openEye.setAttribute("class","fa-solid fa-eye")
}
function eyeOpenConfirmPassword() {
    let password=document.getElementById("con_pass_user_create_Account")

    password.setAttribute("type","text")
    let openEye=document.getElementById("conform_close")
    openEye.setAttribute("class","fa-solid fa-eye-slash")
}
function eyecloseConfirmPassword() {
    let password=document.getElementById("con_pass_user_create_Account")
    
       password.setAttribute("type","password")
       let openEye=document.getElementById("conform_close")
       openEye.setAttribute("class","fa-solid fa-eye")
}
function onClickSelect(){
    let select=document.getElementById("select_user")
    select.style.border="none"
    select.style.outline="none"
}
 let onsubmitCreate=()=>{
    event.preventDefault()
    let form=document.getElementById("form_create")
    let formdata=new FormData(form)
    let obj=Object.fromEntries(formdata)
   obj.minBal=Number(obj.minBal) 
   obj.amount=Number(obj.amount)
   
  let  validate_password=createUserPassword(obj.password)
  let validate_con_pass =createUserConfirmPassword(obj.conformPassword,obj.password)
  let  validate_amount=createUserAmount(obj.amount,obj.minBal)
 if(validate_password && validate_con_pass && validate_amount){
    console.log(obj);
    delete obj.conformPassword
     let json=JSON.stringify(obj)
     console.log(json);
    document.getElementById("user_details").innerHTML=`<span id="user_remove">
    <div id="div_circle">
   <i id="user_icon" class="fa-sharp fa-solid fa-user-tie fa-5x"></i>
    </div>
    <p class="student">Student id: <span class="student_values"></span></p>
    <p class="student">Student Name:<span class="student_values"></span></p>
    <p class="student">Student Phno:<span class="student_values"></span></p>
    
   
   </span>`
   let student_value=document.getElementsByClassName("student_values")

student_value[0].textContent=`${localStorage.getItem("id")}`
student_value[1].textContent=`${localStorage.getItem("name")}`
let ph=localStorage.getItem("number")
student_value[2].textContent=(`${ph.slice(0,2)}`+"*******"+`${ph.slice(0.-2)}`)
 }

}

 function createUserPassword(password){
passwordElement=document.getElementById("pass_user_create_Account")
if(password.length>5){
    passwordElement.style.border=''
    return true
}else{
    passwordElement.style.border='2px solid red'
    return false
}

}

function createUserConfirmPassword(confirmPassword,password){
    let confirmPasswordElement=document.getElementById("con_pass_user_create_Account")
    if(confirmPassword===password&& confirmPassword!==""){
        confirmPasswordElement.style.border=""
        return true
       }
       else{
        confirmPasswordElement.style.border="2px solid red"
        return false
       }
}
function createUserAmount(amount,minBal){
    if(minBal===0&&amount !=""){
        if(amount>=0){
          return true
        }else{
            window.alert("it does not allow negativevalues")
        }
    }else if(minBal===100&&amount !=""){
         if(amount>=100){
            return true
         }else{
            window.alert("Amount should minimum 100 rupes")
         }
    }
    else if(minBal===1000&&amount !=""){
         if(amount>=1000){
            return true
         }else{
            window.alert("Amount  should minimum 1000 rupes")
         }
    }
    else if(minBal===10000&&amount !=""){
        if(amount>=10000){
            return true
        }else{
           window.alert("Amount  should minimum 10000 rupes")
        }
   }
}


/*--------------------------GET ACCOUNT----------------------------------------------*/
document.getElementById("get_Account").addEventListener('click',()=>{
    let user_details=document.getElementById("user_details")
    user_details.setAttribute("class","User_details_class")
    let amount=localStorage.getItem("amount");
    if (amount=='') {
        document.getElementById("user_details").innerHTML=` <div id="remove_getAmount">
        
        <h1 id="getId_error_messane">
            Please Create your Account
        </h1>
       </div>`
    }
    else{
        document.getElementById("user_details").innerHTML=` <div id="remove_getAmount">
    <h1 id="user_detilas">User Details</h1>
    <p class="get_User_details">ID:<span class="get_User_values"></span></p>
    <p class="get_User_details">Name:<span class="get_User_values"></span></p>
    <p class="get_User_details">Phone:<span class="get_User_values"></span></p>
    <p class="get_User_details">Account No:<span class="get_User_values"></span></p>
    <p class="get_User_details">Amount:<span class="get_User_values"></span></p>
</div>`
    let user_getvalues=document.getElementsByClassName("get_User_values")
    user_getvalues[0].textContent=`${localStorage.getItem("id")}`
    user_getvalues[1].textContent=`${localStorage.getItem("name")}`
    user_getvalues[2].textContent=`${localStorage.getItem("number")}`
    user_getvalues[3].textContent="SBI********007"
    user_getvalues[4].textContent=`${localStorage.getItem("amount")}`
    }
})
/*------------------------upadte Account------------------------------------ */
document.getElementById("update_Account").addEventListener("click",()=>{
    let user_details=document.getElementById("user_details")
    user_details.setAttribute("class","User_details_class")
    document.getElementById("user_details").innerHTML=`<div id="remove_updateUser">
    <p id="update_acc_col">Account NO: <span id="update_details_color">SBI******007</span></p>
    <form action="" id="form_update" onsubmit="onsubmitUpdate()">
       <select name="minBal" id="select_user" onclick="onClickSelect()">
       <option selected hidden>MINIMUM TRANSACTION</option>
           <option >0</option>
           <option >100</option>
           <option >1000</option>
           <option >10000</option>
   
          </select><br><br>
         <input name="password" id="pass_user_create_Account" class="user_inputs" type="password" placeholder="password"><i onmousedown="eyeOpenePassword()" onmouseup="eyeclosePassword()" id="eye_close" class="fa-solid fa-eye"></i><br><br>
         <input name="confirmPassword" id="con_pass_user_create_Account" class="user_inputs" type="password" placeholder="conform password"><i onmousedown="eyeOpenConfirmPassword()" onmouseup="eyecloseConfirmPassword()" id="conform_close" class="fa-solid fa-eye"></i><br><br>
         <input name="amount" id="user_create_Account" class="user_inputs" type="number" placeholder="Enter Amount"><br><br>
         
         <button id="Proceed_btn">Proceed</button>
       </form>

  </div>`
})
function onsubmitUpdate(){
    event.preventDefault()
   let form=document.getElementById("form_update")
   let formdata=new  FormData(form);
   let obj=Object.fromEntries(formdata)
   console.log(obj);
   obj.minBal=Number(obj.minBal)
   obj.amount=Number(obj.amount)
   delete obj.confirmPassword
   let json=JSON.stringify(obj)
   console.log(json);

   
}

/*----------------------------- delete Account----------------------------------*/
document.getElementById("delete_Account").addEventListener('click',()=>{
    let user_details=document.getElementById("user_details")
    user_details.setAttribute("class","User_details_class")
    document.getElementById("user_details").innerHTML=`<div id="delete_account_div">
    <form action="">
      <br>
      <br>
      <input id="delete_account_number" class="delete_inputs"  type="text" placeholder="Enter Account NO"><br><br>
      <input id="delete_account_password" class="delete_inputs"   type="password" placeholder="Enter Your Password"><i onmousedown="eyeOpenePasswordDelete()" onmouseup="eyeclosePasswordDelete()" id="eye_close_delete" class="fa-solid fa-eye"></i> <br><br>
      <input id="delete_btn" type="button" onclick="onclickDelete()" value="DELETE">
    </form>
   </div>`
})
function eyeOpenePasswordDelete(){
    let password=document.getElementById("delete_account_password")
    password.removeAttribute("type")
    password.setAttribute("type","text")
    let openEye=document.getElementById("eye_close")
    openEye.setAttribute("class","fa-solid fa-eye-slash")
}
function eyeclosePasswordDelete(){
    let password=document.getElementById("delete_account_password")
    password.removeAttribute("type")
    password.setAttribute("type","password")
    let openEye=document.getElementById("eye_close")
    openEye.setAttribute("class","fa-solid fa-eye")
}
 function onclickDelete(){
   let confirm =window.confirm("delete your account")
   console.log(confirm);
 }

 /* ----------------------Payment Account----------------------------------*/
 
 document.getElementById("payment_Account").addEventListener('click',()=>{
    let user_details=document.getElementById("user_details")
    user_details.setAttribute("class","User_details_class")
    document.getElementById("user_details").innerHTML=`<div id="payment_Account_remove">
         
    <form action="">
        <br><br>
        <input   type="button" class="payment_inputs" value="Send Amount" onclick="sendAmountOnclick()"><br><br>
        <input type="button" class="payment_inputs" value="Recieve Amount" onclick="recieveAmountOnclick()"<><br><br>
        <input type="button"class="payment_inputs" value="Check Balance" onclick="checkBalanceOnclick()">
    </form>
   </div>
   
    </div>`
 })



                       /*----------------send------------------------*/

    function sendAmountOnclick(){
        let user_details=document.getElementById("user_details")
    user_details.setAttribute("class","User_details_class")
        document.getElementById("user_details").innerHTML=`<div id="send_Amount_Details">
        <form action="">
            <input type="number" id="send_amount_id" class="send_Amount_inputs" placeholder="Enter Amount"><br><br>
            <input type="password" id="send_amount_pass" class="send_Amount_inputs" placeholder="Enter password"><br><br>
            <input type="button" id="send_Amount_btn"  value="Send" onclick="sendAmountOnclickfunction()">
        </form>

     </div>`
    }


                        /*-----------------Recieve balane-----------------------*/
          function recieveAmountOnclick(){
            let user_details=document.getElementById("user_details")
            user_details.setAttribute("class","User_details_class")
            document.getElementById("user_details").innerHTML=`<div id="Recieve_Amount_Details">
            <form action="">
                <input type="number" id="recieve_amount_id" class="recieve_Amount_inputs" placeholder="Enter Amount"><br><br>
                <input type="password" id="recieve_amount_pass" class="recieve_Amount_inputs" placeholder="Enter password"><br><br>
                <input type="button" id="recieve_Amount_btn"  value="Send" onclick="recieveAmountOnclickfunction()">
            </form>

         </div>`
          }      
         /* ----------------------check Balance-------------------------------------*/ 
         function checkBalanceOnclick(){
            let user_details=document.getElementById("user_details")
           user_details.setAttribute("class","User_details_class")
            document.getElementById("user_details").innerHTML=`<div id="check_Amount_Details">
            <h1 id="check_balance_head">User Details </h1>
            <h1 class="check_Balance_Details">Name:<span class="check_Balance_values"></span></h1>
            <h1 class="check_Balance_Details">Account NO:<span class="check_Balance_values"></span></h1>
            <h1 class="check_Balance_Details">Balance Amount:<span class="check_Balance_values"></span></h1>
            <h1 id="thank">Thank you</h1>
        </div>`
        let check_balance=document.getElementsByClassName("check_Balance_values")
         check_balance[0].textContent=`${localStorage.getItem("name")}`
         check_balance[1].textContent="SBI********007"
         check_balance[2].textContent=`${localStorage.getItem("amount")}`
         }        
          /* ----------------------------User update-------------------------------*/ 
          document.getElementById("update_user").addEventListener('click',()=>{
           let user_details=document.getElementById("user_details")
           user_details.removeAttribute("class")
                 
            document.getElementById("user_details").innerHTML=`
            <div id=remove_updateUser> 
                
            <div id="Login_div_form">
               
               <form action="" id="update_form" onsubmit="updateUserOnSubmit()">
              
                
                <span id="id_error"></span><br>
                <input  id="user_id" name="id" type="text" placeholder="Enter User_Id " size="10">
                <br>
                <br>
                <span id="name_error"></span>
                <br>
                <input id="user_name"name="name" type="text" placeholder="Enter User_Name " size="33">
                <br>
                <br>
                <span id="email_error"></span>
                <br>
                <input id="user_email" name="email" type="email" placeholder="Enter User Email " size="33">
                <br>
                <br>
                <span id="number_error"></span>
                <br>
                <input id="user_phone" name="phno" type="number" placeholder="Enter User Phone No" size="10">
                <br>
                <br>
                <span id="pass_error"></span>
                <br>
                <input id="user_password" name="password" type="password" placeholder="Enter User Password " range="11" size="30" maxlength="15"><i onmousedown="onmouseDownupdate()"  onmouseup="onmouseupUpdate()" id="eye_close" class="fa-solid fa-eye"></i>
                <br>
                <br>
                <span id="conpass_error" ></span>
                <br>
                <input id="con_pass" type="password" name="confirmPassword" placeholder="Enter confirm code " size="30"><i onmousedown="onmouseDownupdate1()" onmouseup="onmouseupUpdate1()" id="conform_close" class="fa-solid fa-eye"></i>
                <br>
                <br>
                <button id="sub_btn">Submit</button> 
                <br>
                <br>
               </form>
            </div>
            </div>
           
        `
        
          })

       function updateUserOnSubmit(){
        event.preventDefault()
        let UserForm=document.getElementById("update_form")
        let formdata= new FormData(UserForm)
        let obj= Object.fromEntries(formdata)
        obj.id=Number(obj.id)
        obj.phno=Number(obj.phno)
        delete obj.confirmPassword
        let json=JSON.stringify(obj)
        console.log(json);
       }
       function onmouseDownupdate(){
        let password=document.getElementById("user_password")
        password.removeAttribute("type")
        password.setAttribute("type","text")
        let openEye=document.getElementById("eye_close")
        openEye.setAttribute("class","fa-solid fa-eye-slash")
       }
       function onmouseupUpdate(){
        let password=document.getElementById("user_password")
        password.removeAttribute("type")
        password.setAttribute("type","password")
        let openEye=document.getElementById("eye_close")
        openEye.setAttribute("class","fa-solid fa-eye")
       }
     function onmouseDownupdate1(){
        let password=document.getElementById("con_pass")

        password.setAttribute("type","text")
        let openEye=document.getElementById("conform_close")
        openEye.setAttribute("class","fa-solid fa-eye-slash")
     }
     function onmouseupUpdate1(){
        let password=document.getElementById("con_pass")
        
           password.setAttribute("type","password")
           let openEye=document.getElementById("conform_close")
           openEye.setAttribute("class","fa-solid fa-eye")
     }