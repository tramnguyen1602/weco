window.onload=    function HienThiList(){
    // lấy danh sách sản phẩm ở localstorage hàm LayListItemCart() được tái sử dụng từ file cart.js
    var ListItemOrder = LayListItemOrder();
   
    if(ListItemOrder.length==0)
    {
        html='<br> <div class="giohangtrong" <div class="trong"> BẠN KHÔNG CÓ LỊCH SỬ MUA HÀNG NÀO!</div> </div>';

    }
    else
    {
     var  html=ChuyenListCartToHTML(ListItemOrder);
    }

    document.getElementById('cart').innerHTML=html;
}


function ChuyenListCartToHTML(ListitemCart){
    var html= 
    '    <table id="table"  class="cart">  '  + 
'                 <tr class="header-cart">  '  + 
'                     <th class="item-header-cart">  '  + 
'                         Mã đơn hàng  '  + 
'                     </th>  '  + 
'                     <th class="item-header-cart">  '  + 
'                         Ngày mua hàng  '  + 
'                     </th>  '  + 
'                     <th class="item-header-cart">Tổng tiền</th>  '  + 
'                      </th>  '  + 
'                     <th class="item-header-cart">Chi tiết</th>  '  + 
'                   '  + 
'                </tr>  ' ; 

    for(var i=0;i<ListitemCart.length;i++){
        html += chuyenItemCarttoHTML(ListitemCart[i]);
    }

    html +=  '</table>'  ; 

    return html;
}

//    chuyển đối tượng giỏ hàng thành html hiển thị
function chuyenItemCarttoHTML(itemCart){
 var ListItemCart = LayListItemOrder();
//DUYỆT DANH SÁCH CÁC SẢN PHẨM CÓ TRONG GIỞ HÀNG

for(var i=0;i<ListItemCart.length;i++)
{
    nowItemcart =ListItemCart[i];
  // idProduct là ID lấy từ localstorage
  //id là id sản phẩm thêm vào giỏ hàng
  if(nowItemcart.idOrder== itemCart.idOrder)
  {
    var html =
    '      <tr class="item-cart">  '  + 
'                     <td class="td-item-cart">  '  + 
                                    'DH'        + nowItemcart.idOrder+
'                     </td>  '  + 
'                     <td class="td-item-cart">  '  + nowItemcart.ngay  + 
'                     </td>  '  + 
'                     <td class="td-item-cart">  '  + nowItemcart.tongtien +'đ'+'</td>  '  + 
'                     <td class="td-item-cart">  '  + 
'                         <div id="chitietdonhang" onclick="xemchitiet(nowItemcart.idOrder)">Xem chi tiết</div>  '  + 
'                     </td>  '  + 
'                </tr>  ' ; 
}
}
return html;
}


function xemchitiet(idOrder){


document.getElementById('id01').style.display='block';
var ListItemCart = LayListItemOrder();
//DUYỆT DANH SÁCH CÁC SẢN PHẨM CÓ TRONG GIỞ HÀNG

for(var i=0;i<ListItemCart.length;i++)
{

  // idProduct là ID lấy từ localstorage
  //id là id sản phẩm thêm vào giỏ hàng
  if(nowItemcart.idOrder==idOrder)
  {
     document.getElementById('idorder').innerHTML='DH'+nowItemcart.idOrder;
     document.getElementById('thongtingiaohang').innerHTML= 'Khách hàng: '+ nowItemcart.ten+'<br>'  + 'Địa chỉ: '+nowItemcart.diachi+
    '<br>'+'Email: '+nowItemcart.email+
    '<br>'+'Phone: '+nowItemcart.phone
    ;
    document.getElementById('thongtindonhang').innerHTML=nowItemcart.chitiet
    document.getElementById('tongtien').innerHTML='Tổng tiền: '+nowItemcart.tongtien;
  }
}

}
