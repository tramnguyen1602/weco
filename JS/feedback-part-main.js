
//cái này ko có liên quan gì đến trang chủ nha, đọc xml để làm bên trang Feedback riêng thôi
window.onload=  function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            myFunction(this);
        }
    };
    xhttp.open("GET", "XML//dataFeedback.xml", true);
    xhttp.send();
}
function myFunction(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var htmlFeedback="";   
    var feedback = xmlDoc.getElementsByTagName("FB");
    for (i = 0; i < feedback.length; i++) {          
        htmlFeedback += "<div  class='slide'>"+
        "<div id='divfb'><img class='img-feedback' src='IMAGES\\HEADERSLIDE\\" + feedback[i].getElementsByTagName("ANHSANPHAM")[0].childNodes[0].nodeValue + "'></div>"+
       "<div id='divfb' class='name-feedback'>" + 
       feedback[i].getElementsByTagName("TENKHACHHANG")[0].childNodes[0].nodeValue +
         "</div><div id='divfb' class='content-feedback'>" + feedback[i].getElementsByTagName("NOIDUNG")[0].childNodes[0].nodeValue + 
        "</div></div>";  
         }          
    document.getElementById("slides").innerHTML ="<div class='slide first'></div>"+htmlFeedback ;
        }