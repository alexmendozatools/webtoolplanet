function generateQR(){

document.getElementById("qrcode").innerHTML="";

var text=document.getElementById("text").value;

new QRCode(document.getElementById("qrcode"),{
text:text,
width:200,
height:200
});

}