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
              nowItemCart.soluong++;
              TonTaiTrongGioHang=true;
            }
          }
          //thêm mới sẩn phẩm nếu chưa tồn tại trong giỏ hàng
          if(TonTaiTrongGioHang==false)
          {
            var newItemCart=TaoDoiTuongItemCart(idproduct, 1,tensanpham,dongiacu,dongiaSanpham,hinhanh);
            ListItemCart.push(newItemCart);
          }
          SaveLocalStorageCart(ListItemCart);
  
          alert('thêm thành công sản phẩm ' + sanpham[j].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + ' vào giỏ hàng' )
  
          }
        }
    }
  }
  