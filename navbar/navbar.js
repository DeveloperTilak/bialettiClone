var x=document.getElementById('login');
var y=document.getElementById('register');
var z=document.getElementById('btn');
function register()
{
    x.style.left='-400px';
    y.style.left='50px';
    z.style.left='110px';
}
function login()
{
    x.style.left='50px';
    y.style.left='450px';
    z.style.left='0px';
}
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        document.getElementById("login-form").style.display = "none";
    }
}  

document.querySelector(".submit-btn").addEventListener("click", display);

var loginpass = document.getElementById("login-pass").value;
console.log(document.getElementById("login-pass").value);

function display(){
   const close = document.getElementById("login-form");
  
   if(document.getElementById("login-pass").value!=""&&document.getElementById("login-pass").value!=""){
close.style.display = "none";
   }
}





