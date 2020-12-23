//ĐÂY LÀ HEADER VÀ FOOTER DÙNG CHUNG CHO CẢ WEBSITE. CHỈ CẦN KÉO ĐƯỜNG LINK NÀY : <script src="js/header_footer.js" type="text/javascript" defer></script> 
//LÀ DÙNG ĐƯỢC ( NHỚ SET ID CỦA BODY LÀ MAIN NHÉ )
const template = document.createElement('template');
template.innerHTML = `
<div id="header">
        <div id="header-top">
        <ul class="header-top">
            <li class="item-header">
                <a class="logo-text" href="trangchu.html"> <img class="logo-headertop" src="IMAGES/logo.jpg">
                 </a>
            </li>
            <li class="item-header">
            <a onclick="localStorage.setItem('texttimkiem',document.getElementById('txtnhap').value)" id="btntimkiem" href="ketquatimkiem.html"> <i class="icon-search fas fa-search"></i></a>

            <input  placeholder="Tìm kiếm..."    id="txtnhap" class="input-text" type="text"/> &nbsp  &nbsp
                <a  href="account.html"><i class="icon-account fas fa-user-circle"></i></a>
                <a href="cart.html">
                    <!-- <i class="icon-cart fas fa-shopping-cart"></i> -->
                    <i class=" icon-cart fas fa-cart-plus"></i>
                   
                  </a>
            </li>
           
        </ul>
        </div>

        <nav  id="nav-bar">         
            <ul class="menu-level-1">
                <li class="item-menu-level-1">
                    <a href="trangchu.html" >TRANG CHỦ</a>    
                </li>
                <li class="item-menu-level-1">
                    <a href="gioithieu.html" >GIỚI THIỆU</a> 
                </li>
                <li class="item-menu-level-1">
                    <a href="sanpham.html" >SẢN PHẨM</a> 
                    <ul class="menu-level-2">
                        <li class="item-menu-level-2">
                            <a href="sanpham_phongkhach.html" >Phòng Khách</a> 
                            <ul class="menu-level-3">
                                <li class="item-menu-level-3">
                                    <a href="sanpham_tuketivi.html">Tủ Kệ Tivi</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_bansofa.html">Bàn Sofa-Bàn Cafe-Bàn Trà </a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_sofa.html">Sofa</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_ghebanh.html">Ghế Bành</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_tuvake.html">Tủ và Kệ</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_banlamviec.html">Bàn Làm Việc</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_tugiay.html">Tủ Giày</a> 
                                </li>
                            </ul>
                         </li>
                        <li class="item-menu-level-2">
                            <a href="sanpham_phongan.html" class="item-menu-level-2-link">Phòng Ăn </a> 
                            <ul class="menu-level-3">
                                <li class="item-menu-level-3">
                                    <a href="sanpham_bobanan.html">Bộ Bàn Ăn  </a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_banan.html"> Bàn Ăn</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_ghean.html">Ghế Ăn  </a> 
                                </li>                           
                            </ul>
                         </li>
                        </li>
                        <li class="item-menu-level-2"> 
                            <a href="sanpham_phongngu.html" class="item-menu-level-2-link">Phòng Ngủ </a> 
                            <ul class="menu-level-3">
                                <li class="item-menu-level-3">
                                    <a href="sanpham_tuquanao.html">Tủ Quần Áo  </a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_tudaugiuong.html"> Tủ Đầu Giường</a> 
                                </li>
                                <li class="item-menu-level-3">
                                    <a href="sanpham_giuongngu.html">Giường Ngủ </a> 
                                </li>
                               
                            </ul>
                         </li>
                        </li>
                    </ul>
    
                </li>
                <li class="item-menu-level-1">
                    <a href="khuyenmai.html" > KHUYẾN MÃI</a> 
    
                </li>
                <li class="item-menu-level-1">
                    <a href="stores.html" > CỬA HÀNG</a> 
                </li>
              
                <li class="item-menu-level-1">
                    <a href="Blog.html" >BLOG</a> 
                </li>
                
                <li class="item-menu-level-1">
                <a href="dangkythanhvien.html" >ĐĂNG KÝ THÀNH VIÊN</a> 
               

            </li>
            </ul>
        </nav>
    </div>



   

   
    <footer id="footer">
        <table class="table-footer">
            <tr>
                <td>
                    <h3>WECO</h3>
                    <hr class="hr-tag-footer"/>
                    <p class="noi-dung-footer"> 
                        <a href="gioithieu.html" > Giới Thiệu Về WECO</a>
                       </p>
                    <p class="noi-dung-footer"> <a href="stores.html" >Chuỗi Cửa Hàng</a> </p>
                    <p class="noi-dung-footer"> <a href="Blog.html" >Blog</a></p>
                 
                    <p class="noi-dung-footer"> <a href="dangkythanhvien.html" >Đăng Ký Thành Viên</a></p>

                </td>
                <td>
                    <h3>HỖ TRỢ KHÁCH HÀNG</h3>
                    <hr class="hr-tag-footer"/>
                    <p class="noi-dung-footer"> <a href="LienHe.html" >Liên Hệ Đến WECO</a></p>
                    <p class="noi-dung-footer"> <a href="Chinhsachdoitra.html" >Chính sách đổi trả</a> </p>
                    <p class="noi-dung-footer"> <a href="Chinhsachbaomat.html" >Chính sách bảo mật</a></p>
                    <p class="noi-dung-footer"> <a href="Chinhsachgiaonhan.html" >Chính sách giao nhận</a></p>
   
                </td>
                <td>
                    <h3>LIÊN HỆ VỚI CHÚNG TÔI</h3>
                    <hr class="hr-tag-footer"/>
                    <p class="noi-dung-footer">Đặt Hàng Trực Tuyến (8h-21h) <br/>
                        <strong>1900 25122000</strong> <br/>
                        <strong> <a href= "mailto:webshop@weco.vn"> webshop@weco.vn</a>
                           </strong>
                    </p>
                    <p class="noi-dung-footer">Chăm Sóc Khách Hàng (8h-17h) <br/>
                        <strong>1900 24122000</strong> <br/>
                        <strong> <a href= "mailto:cskh@weco.vn"> cskh@weco.vn</a>
                        </strong>                                 
                    </p>
                    <div class="icon-mxh">                     
                                <a href="#" ><i class=" item-icon-mxh fab fa-facebook-square"></i></a>                                                        
                                <a href="#" ><i class="item-icon-mxh fab fa-youtube"></i></a>                                            
                                <a href="#" ><i class="item-icon-mxh fab fa-instagram"></i></a>                                                  
                    </div>                 
                </td>
                <td>
                    <h4>Công ty TNHH WECO UEL Lập Trình Web 1</h4>
                    <p class="noi-dung-footer">
                        <strong>
                            Số tài khoản ngân hàng:
                        </strong>
                         20202020      
                        <br/>
                        Ngân Hàng BIDV - Sài Gòn                    
                    </p>
                
                    <p class="noi-dung-footer">
                        <strong>Địa chỉ:</strong>
                         Số 669 Đường Quốc lộ 1, <br/>Khu phố 3, Phường Linh Xuân,<br/> Quận Thủ Đức, TP. Hồ Chí Minh                       
                    </p>
                </td>
            </tr>
        </table>
        <hr class="hr-tag-footer-2"/>
        <p class="copyright">
            Copyright @ 2020 by Weco. All rights reservered. Powered by Weco UEL
            <br/>
            <br/>
        </p>
    </footer>
`

document.body.appendChild(template.content);



