
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
  var htmlDanhSachSanPham =   '<div class="items-product">';
  var dsSanPham = xmlDoc.getElementsByTagName("PRODUCTS");

  for (i = 0; i <dsSanPham.length; i++) {
    var sanpham = dsSanPham[i].getElementsByTagName("PRODUCT");
    for (j = 0; j <sanpham.length; j++)
    {
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
        htmlDanhSachSanPham += 
        '<div class="item">' +
        '<div class="item-photo">'+ 
         dis +   
         
         '<a onclick="localStorage.setItem(\'textidsanpham\',\''+sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue+'\') ,localStorage.setItem(\'textdongia\',\''+price+'\') " href="chitietsanpham.html">  '
        // '<a onclick="setlocalstorage()" href="chitietsanpham.html">  '

     +   '<img src="IMAGES//'+ sanpham[j].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue +'" alt="" srcset="">'+
        
        
         '</a>'
        + 
        '</div>' +
        '<h2 class="item-name">'+ sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue+'</h2>'+
        '<div class="item-price">' +
        '<span class="item-price-old">'+ oldprice +'</span>'+'&nbsp'+
        '<span class="item-price-new">'+ price +'đ'+'</span>'+
        '</div>'+
        '<button onclick="onclickAddCart(\''+ sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue+'\')" class="btn snip1582">Thêm vào giỏ</button>'+
        '</div>';
    }
}
  htmlDanhSachSanPham+='</div>';
  document.getElementById("products").innerHTML = htmlDanhSachSanPham;
}
