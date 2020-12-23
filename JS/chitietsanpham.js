//load sản phẩm lên giao diện

window.onload= function timkiem() {
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

    //biến id được đẩy vào localstorage khi nhấn vào hình của trang sp
      nhap=localStorage.getItem('textidsanpham');
      sl=eval(document.getElementById("soluong").value);


    var i;
    var xmlDoc = xml.responseXML;
    var dsSanPham = xmlDoc.getElementsByTagName("PRODUCTS");
  
    for (i = 0; i <dsSanPham.length; i++) {
      var sanpham = dsSanPham[i].getElementsByTagName("PRODUCT");
      for (j = 0; j <sanpham.length; j++)
      {
          ten=sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;

          //tìm id trong xml phù hợp với id trong localstorage
          
         if(sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue==nhap)
         {
                 
           

            if(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue!=" "){
                dis= '<span class="item-discount">'+ sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue+'%'+'</span>';
                 var price= eval(sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue)*((100-eval(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue))/100);
                 oldprice=sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue + 'đ';
            }         
            else
            {
                dis=' ';
                price=eval( sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue);
                oldprice=' ';
    
    

            }
            document.getElementById("giacu").innerHTML=oldprice;
            document.getElementById("giamoi").innerHTML=price +'đ';

            document.getElementById("tensp").innerHTML=ten;
            document.getElementById("hinhanhchitiet").innerHTML=  '<img  src="IMAGES/'+sanpham[j].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue+'" >'
            document.getElementById("mausac").innerHTML=sanpham[j].getElementsByTagName("COLOR")[0].childNodes[0].nodeValue;
            document.getElementById("kichthuoc").innerHTML='<br>'+'Chiểu dài:'+ sanpham[j].getElementsByTagName("LENGTH")[0].childNodes[0].nodeValue  +'cm<br>'+
            'Chiều rộng:'+ sanpham[j].getElementsByTagName("WIDTH")[0].childNodes[0].nodeValue  +'cm<br>'+
            'Chiều cao:'+ sanpham[j].getElementsByTagName("HEIGHT")[0].childNodes[0].nodeValue  +'cm<br>';
            document.getElementById("chatlieu").innerHTML=sanpham[j].getElementsByTagName("MATERIAL")[0].childNodes[0].nodeValue;
            document.getElementById("tinhnang").innerHTML=sanpham[j].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue;

            var today=new Date();
            month=today.getMonth()+1;
            var date= today.getDate()+"/"+ month +"/"+ today.getFullYear();

            document.getElementById("ngayhientai").innerHTML= 'Ngày: '+ date;
            document.getElementById("tongtien").innerHTML=sl*price +' đ';

            // <LENGTH>160</LENGTH>
			// 	<HEIGHT>40</HEIGHT>
			// 	<WIDTH>60</WIDTH>


         }
          
      }
  }
 
  }


  // thêm vào giỏ hàng:
function onclickAddCart(idproduct) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        aaa(this, idproduct);
        }      
    };
    xhttp.open("GET", "XML//products.xml", true);
    xhttp.send();
  }
  
  
  
  function aaa(xml, idproduct) {
    var i;
    var xmlDoc = xml.responseXML;
    var dsSanPham = xmlDoc.getElementsByTagName("PRODUCTS");



    sl=eval(document.getElementById("soluong").value);
  
    for (i = 0; i <dsSanPham.length; i++) {
      var sanpham = dsSanPham[i].getElementsByTagName("PRODUCT");
        for (j = 0; j <sanpham.length; j++){
  
                 //tên sản phẩm
                 tensanpham=sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
              
                
                 //hình ảnh sản phẩm
                 hinhanh=sanpham[j].getElementsByTagName("IMAGE")[0].childNodes[0].nodeValue;
  
                 // giá sản phẩm
              

                 if(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue!=" ")
                 {
                    dongiacu=sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;  
                    var dongiaSanpham= eval(sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue)*((100-eval(sanpham[j].getElementsByTagName("DISCOUNT")[0].childNodes[0].nodeValue))/100);
                  }         
                 else
                 {
                   dongiacu=' ';
                   dongiaSanpham= sanpham[j].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;
                 }
                 
          //Khi truy suất được ID của sản phẩm hiện tại trùng với ID của nó trong XML
  
          if(sanpham[j].getElementsByTagName("ID_PRODUCT")[0].childNodes[0].nodeValue==idproduct)
          {
  
            //LẤY DANH SÁCH SẢN PHẨM ĐANG CÓ TRONG GIỎ HÀNG Ở LOCALSTORAGE
          var ListItemCart= LayListItemCart();
  
  
          var TonTaiTrongGioHang=false;
          // DUYỆT DANH SÁCH CÁC SẢN PHẨM CÓ TRONG GIỞ HÀNG
  
          for(var x=0;x<ListItemCart.length;x++)
          {
            var nowItemCart=ListItemCart[x];
            // idProduct là ID lấy từ localstorage
            //id là id sản phẩm thêm vào giỏ hàng
            if(nowItemCart.idProduct== idproduct)
            {
              // nếu sản phẩm đã tồn tại thì tăng số lượng
              nowItemCart.soluong+=sl;
              TonTaiTrongGioHang=true;
            }
          }
          //thêm mới sẩn phẩm nếu chưa tồn tại trong giỏ hàng
          if(TonTaiTrongGioHang==false)
          {
            var newItemCart=TaoDoiTuongItemCart(idproduct, sl,tensanpham,dongiacu,dongiaSanpham,hinhanh);
            ListItemCart.push(newItemCart);
          }
          SaveLocalStorageCart(ListItemCart);
  
          alert('thêm thành công sản phẩm ' + sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + ' vào giỏ hàng' )
  
          }
        }
    }
  }
  

                 