
const form=document.getElementById("login");
const message=document.getElementById("message");
moment().format("YYYYMMDD");                         
form.addEventListener("submit", function(e) {   
    e.preventDefault();
    //console.log(e.target);
    const formData = new FormData(form);
    for (const [key, value] of formData) {
        localStorage.setItem(key, value);
        console.log(  `${key}: ${value}\n`);
        
      }
      message.innerText= 'usuario logueado'
})
