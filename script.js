function generateQR(){

document.getElementById("qrcode").innerHTML="";

var text=document.getElementById("text").value;

new QRCode(document.getElementById("qrcode"),{
text:text,
width:200,
height:200
});

}



function generatePassword(){

var length=12;
var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

var password="";

for(var i=0;i<length;i++){
password+=chars.charAt(Math.floor(Math.random()*chars.length));
}

document.getElementById("result").innerText=password;

}



function countWords(){

var text=document.getElementById("textInput").value;

var words=text.trim().split(/\s+/).length;

document.getElementById("result").innerText="Words: "+words;

}



function formatJSON(){

try{

var json=document.getElementById("textInput").value;

var formatted=JSON.stringify(JSON.parse(json),null,4);

document.getElementById("result").value=formatted;

}catch(e){

document.getElementById("result").value="Invalid JSON";

}

}



function calculateAge(){

var birth=document.getElementById("birthdate").value;

var birthDate=new Date(birth);

var today=new Date();

var age=today.getFullYear()-birthDate.getFullYear();

var m=today.getMonth()-birthDate.getMonth();

if(m<0||m===0&&today.getDate()<birthDate.getDate()){
age--;
}

document.getElementById("result").innerText="Age: "+age;

}
