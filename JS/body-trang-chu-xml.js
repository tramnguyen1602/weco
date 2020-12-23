
//load sản phẩm lên giao diện
window.onload= function loadDoc() {
  var xhttp = new XMLHttpRequest();
  
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      myFunction(this);
      }      
  };
  xhttp.open("GET", "XML//products.xml", true);
  xhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var htmlDanhSachSanPhamMoiNhat =   '<div class="items-product">';
  var htmlDanhSachSanPhamBanChay =   '<div class="items-product">';
  var htmlDanhSachSanPhamKhuyenMai =   '<div class="items-product">';

  var dsSanPham = xmlDoc.getElementsByTagName("PRODUCTS");

  for (i = 0; i <dsSanPham.length; i++) {
    var sanpham = dsSanPham[i].getElementsByTagName("PRODUCT");
    moi=0; banchay=0; uudai=0;
    for (j = 0; j <sanpham.length; j++)
    {
      
        if(sanpham[j].getElementsByTagName("NEW")[0].childNodes[0].nodeValue=="TRUE" && moi<8){
          moi++;
          if(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue!=" "){
              dis= '<span class="item-discount">'+ sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue+'%'+'</span>';
               var price= eval(sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue)*((100-eval(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue))/100);
               oldprice=sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + 'đ';
          }         
          else
          {
              dis=' ';
              price= sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
              oldprice=' ';
  
  
          }
          htmlDanhSachSanPhamMoiNhat += 
          '<div class="item">' +
          '<div class="item-photo">'+ 
           dis +          
           '<a onclick="localStorage.setItem(\'textidsanpham\',\''+sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue+'\') ,localStorage.setItem(\'textdongia\',\''+price+'\') " href="chitietsanpham.html">  '
           // '<a onclick="setlocalstorage()" href="chitietsanpham.html">  '

        +   '<img src="IMAGES//'+ sanpham[j].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +'" alt="" srcset="">'+
           
           
            '</a>' + 
          '</div>' +
          '<h2 class="item-name">'+ sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+'</h2>'+
          '<div class="item-price">' +
          '<span class="item-price-old">'+ oldprice +'</span>'+'&nbsp'+
          '<span class="item-price-new">'+ price +'đ'+'</span>'+
          '</div>'+
          
          '</div>';
        }  



        if(sanpham[j].getElementsByTagName("BESTSELLER")[0].childNodes[0].nodeValue=="TRUE" && banchay<8){
          banchay++
          if(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue!=" "){
              dis= '<span class="item-discount">'+ sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue+'%'+'</span>';
               var price= eval(sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue)*((100-eval(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue))/100);
               oldprice=sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + 'đ';
          }         
          else
          {
              dis=' ';
              price= sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
              oldprice=' ';
  
  
          }
          htmlDanhSachSanPhamBanChay += 
          '<div class="item">' +
          '<div class="item-photo">'+ 
           dis +          
           '<a onclick="localStorage.setItem(\'textidsanpham\',\''+sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue+'\') ,localStorage.setItem(\'textdongia\',\''+price+'\') " href="chitietsanpham.html">  '
                // '<a onclick="setlocalstorage()" href="chitietsanpham.html">  '

             +   '<img src="IMAGES//'+ sanpham[j].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +'" alt="" srcset="">'+
                
                
                 '</a>' + 
          '</div>' +
          '<h2 class="item-name">'+ sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+'</h2>'+
          '<div class="item-price">' +
          '<span class="item-price-old">'+ oldprice +'</span>'+'&nbsp'+
          '<span class="item-price-new">'+ price +'đ'+'</span>'+
          '</div>'+
         
          '</div>';
        } 
        
        

        if(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue!=" "&& uudai<8){
          uudai++;
          dis= '<span class="item-discount">'+ sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue+'%'+'</span>';
           var price= eval(sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue)*((100-eval(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue))/100);
           oldprice=sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + 'đ';
           htmlDanhSachSanPhamKhuyenMai += 
           '<div class="item">' +
           '<div class="item-photo">'+ 
            dis +          
            '<a onclick="localStorage.setItem(\'textidsanpham\',\''+sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue+'\') ,localStorage.setItem(\'textdongia\',\''+price+'\') " href="chitietsanpham.html">  '
            // '<a onclick="setlocalstorage()" href="chitietsanpham.html">  '

         +   '<img src="IMAGES//'+ sanpham[j].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +'" alt="" srcset="">'+
            
            
             '</a>'+ 
           '</div>' +
           '<h2 class="item-name">'+ sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+'</h2>'+
           '<div class="item-price">' +
           '<span class="item-price-old">'+ oldprice +'</span>'+'&nbsp'+
           '<span class="item-price-new">'+ price +'đ'+'</span>'+
           '</div>'+
         
           '</div>';
      }   
    }





}
  htmlDanhSachSanPhamMoiNhat+='</div>';
  document.getElementById("products-moi-nhat").innerHTML = htmlDanhSachSanPhamMoiNhat;
  htmlDanhSachSanPhamBanChay+='</div>';
    document.getElementById("products-ban-chay").innerHTML = htmlDanhSachSanPhamBanChay;
    htmlDanhSachSanPhamKhuyenMai+='</div>';
    document.getElementById("products-khuyen-mai").innerHTML = htmlDanhSachSanPhamKhuyenMai;
}


var xhttps = new XMLHttpRequest();
  
xhttps.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myFunctions(this);
    }      
};
xhttps.open("GET", "XML//dataFeedback.xml", true);
xhttps.send();
function myFunctions(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var htmlFeedback="";   
  var feedback = xmlDoc.getElementsByTagName("FB");
  for (i = 0; i < feedback.length; i++) {          
      htmlFeedback += "<div id='divfb' class='box-feedback'>"+
      "<div id='divfb'><img class='img-feedback' src='IMAGES\\HEADERSLIDE\\" + feedback[i].getElementsByTagName("ANHSANPHAM")[0].childNodes[0].nodeValue + "'></div>"+
     "<div id='divfb' class='name-feedback'>" + 
     feedback[i].getElementsByTagName("TENKHACHHANG")[0].childNodes[0].nodeValue +
       "</div><div id='divfb' class='content-feedback'>" + feedback[i].getElementsByTagName("NOIDUNG")[0].childNodes[0].nodeValue + 
      "</div></div>";  
       }          
  document.getElementById("fb").innerHTML =htmlFeedback ;
      }


     
