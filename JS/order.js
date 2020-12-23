var keyLocostorageOrder = 'ListItemOrder';
// tạo đối tượng item giỏ hàng với đầu vào là id của sản phẩm và số lượng của sản phẩm
function TaoDoiTuongItemOrder(idOrder, tongtien, ngay , ten, diachi, email, phone, chitiet ){
var itemOrder=new Object();
itemOrder.idOrder=idOrder;
itemOrder.tongtien=tongtien;
itemOrder.ten=ten;
itemOrder.ngay=ngay;
itemOrder.email=email;
itemOrder.diachi=diachi;
itemOrder.phone=phone;
itemOrder.chitiet=chitiet;
return itemOrder;
}

// lấy ra danh sách toàn bộ item giỏ hàng

function LayListItemOrder(){
    var ListItemOrder =new Array();
    var jsonListItemOrder =localStorage.getItem(keyLocostorageOrder);

    if(jsonListItemOrder!=null){
        ListItemOrder =JSON.parse(jsonListItemOrder);
    }
    return ListItemOrder;
}



function SaveLocalStorageOrder(ListItemOrder)
{
    // chuyển lại thành json
    var jsonListItemOrder=JSON.stringify(ListItemOrder);
    //lưu ngược lại localstorage
    localStorage.setItem(keyLocostorageOrder, jsonListItemOrder)
}
