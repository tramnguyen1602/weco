window.onload=   function HienThiList(){
    // lấy danh sách sản phẩm ở localstorage hàm LayListItemCart() được tái sử dụng từ file cart.js
    var ListItemCart = LayListItemCart();
   
    if(ListItemCart.length==0)
    {
        html=' <div class="giohangtrong" <div class="trong"> GIỎ HÀNG ĐANG TRỐNG BẠN HÃY MUA THÊM SẢN PHẨM!</div> </div>';
        // ẩn button đặt hàng

        document.getElementById('btndathang').style.display='none'
    }
    else
    {
     var  html=ChuyenListCartToHTML(ListItemCart);
     document.getElementById('total').innerHTML='Tổng tiền: '+ total() +'đ';
    }

    document.getElementById('cart').innerHTML=html;
}


function ChuyenListCartToHTML(ListitemCart){
    var html= 
    '        <table id="table"  class="cart">  '  + 
'                 <tr class="header-cart">  '  + 
'                     <th class="item-header-cart">  '  + 
'                         Hình ảnh  '  + 
'                     </th>  '  + 
'                     <th class="item-header-cart">  '  + 
'                         Sản phẩm  '  + 
'                     </th>  '  + 
'                     <th class="item-header-cart">Đơn giá</th>  '  + 
'                     <th class="item-header-cart">  '  + 
'                         Số lượng  '  + 
'                      </th>  '  + 
'                     <th class="item-header-cart">Thành tiền</th>  '  + 
'                     <th class="item-header-cart">Xóa</th>  '  + 
'                </tr>  ' ; 

    for(var i=0;i<ListitemCart.length;i++){
        html += chuyenItemCarttoHTML(ListitemCart[i]);
    }

    html +=  '</table>'  ; 

    return html;
}



//    chuyển đối tượng giỏ hàng thành html hiển thị
function chuyenItemCarttoHTML(itemCart){
 var ListItemCart = LayListItemCart();
//DUYỆT DANH SÁCH CÁC SẢN PHẨM CÓ TRONG GIỞ HÀNG

for(var i=0;i<ListItemCart.length;i++)
{
    nowItemcart =ListItemCart[i];
  // idProduct là ID lấy từ localstorage
  //id là id sản phẩm thêm vào giỏ hàng
  if(nowItemcart.idProduct== itemCart.idProduct)
  {
      var thanhtien=eval(nowItemcart.soluong)*eval(nowItemcart.dongia);
      if(nowItemcart.dongiacu!=' ')
      {
          giacu= nowItemcart.dongiacu + 'đ';
      }
      else
      {
         giacu=' ';
      }
    var html =
     '     <tr class="item-cart">  '  + 
 '                     <td class="td-item-cart">  '  + 
 '                         <img class="img-cart" src="IMAGES//'+nowItemcart.hinhanh+'">                    '  + 
 '                     </td>  '  + 
 '                     <td class="td-item-cart">  '  +nowItemcart.ten  + 
 '                     </td>  '  + 
 '                     <td class="td-item-cart">'+  ' <span class="dongiacu">'+giacu+'</span>' +' '+ nowItemcart.dongia+'đ'+'</td>  '  + 
 '                     <td class="td-item-cart">  '  + 


     '    <span class="plus" onclick="trusoluong(\''+nowItemcart.idProduct+'\')"> '
         +'<i style="color: black;" class="iconsoluong fas fa-minus"></i></span><input readonly value="'+nowItemcart.soluong+'" class="inputsoluong" width="10px"  type="text" id="soluong"></input>   '  + 
'  <span class="plus" onclick="congsoluong(\''+nowItemcart.idProduct+'\')"> <i style="color: black;" class="iconsoluong fas fa-plus"></i></span>  ' +


 '                     </td>  '  + 
 '                     <td class="td-item-cart">'+thanhtien+'đ'+'</td>  '  + 
 '                     <td class="td-item-cart">  '  + 
 '                       <i onclick="xoaItemcart(\''+nowItemcart.idProduct+'\')"  class="icon-cart fas fa-trash-alt"></i>  '  + 
 '                     </td>  '  + 
 '                </tr>  ' ; 

}
}
return html;



}
