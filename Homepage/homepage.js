function onclickAbout(){
   let aboutselect =document.getElementById("aboutselect")
   aboutselect.style.border="none"
}

function onchangeService(){
    const select=document.getElementById("aboutselect").value
    
    if(select==="CEO"){
        window.open("https://yourstory.com/people/girish-shivanna#:~:text=Mr.,%2C%20Qspiders%2C%20Jspiders%20%26%20Flagroot.")
    }
    else if(select==="JSPIDERS"){
      window.open("https://jspiders.com/")
    }
    else if(select==="FACULTIES"){
       document.getElementById("mainid").remove();
       const main =document.getElementById("main1")
        
       let table=document.createElement("table")
       main.appendChild(table)
       console.log(table);
       table.setAttribute("id","fact_table")
       table.setAttribute("border","")

       
      
       const tr=document.createElement("tr")
       table.appendChild(tr)
       console.log(tr);
       const th1=document.createElement("th")
        th1.textContent="Name"
        tr.appendChild(th1)
        const th2=document.createElement("th")
        th2.textContent="Role"
        tr.appendChild(th2)
        const th3=document.createElement("th")
        th3.textContent="img"
        tr.appendChild(th3)

     
       const fact=fetch("facultiesDetails.json")
       .then((x)=>x.json())
       .then((x)=>{
         x.map((x)=>{
          const tr2=document.createElement("tr")
       table.appendChild(tr2)
       
          const td=document.createElement("td")
          td.textContent=`${x.name}`
          tr2.appendChild(td)
          const td2=document.createElement("td")
          td2.textContent=`${x.Role}`
          tr2.appendChild(td2)
          const td3=document.createElement("td")
         let img =document.createElement('img')
         img.setAttribute("src",`${x.img}`)
         img.setAttribute("class","fact_img")
         td3.appendChild(img)
         tr2.appendChild(td3)
          

         })
       })
        
    }
}
function signUpClick() {
    window.open("http://127.0.0.1:5500/LoginPage/loginpage.html")
   

}