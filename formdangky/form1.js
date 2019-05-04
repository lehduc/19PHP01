// function getInfor(){
//     var FullName = document.getElementById("fullname").value;
//     var adress    = document.getElementById("diachi").value ;
//     var ngaydauky = document.getElementById("ngaydauky").value ;
//     var ngaycuoiky = document.getElementById("ngaycuoiky").value ;
//     var sdt = document.getElementById("phone").value ;
//     var sodauky = document.getElementById("sodauky").value ;
//     // var sodauky = $('input').val();
//     var socuoiky = document.getElementById("socuoiky").value ;
//     // var socuoiky = $('input').val();
//     var d = new Date()
//     if( FullName == "") {
//         document.getElementById("errorname").innerHTML = " không được để trống ";    
//     }   
//     if ( adress == ""){
//         document.getElementById("erroradress").innerHTML = " không được để trống ";
//     }
//     if ( ngaydauky == ""){
//         document.getElementById("errorngaydauky").innerHTML = " hãy chọn ngày ";
//     }
//     if ( ngaycuoiky == ""){
//         document.getElementById("errorngaycuoiky").innerHTML = " hãy chọn ngày ";
//     }
//     if ( sdt == ""){
//         document.getElementById("errorsdt").innerHTML = " hãy nhập số điện thoại ";
//     }
//     if (sodauky = ""){
//         document.getElementById("errorsodauky").innerHTML = " hãy nhập số đầu kỳ ";
//     }
//     if (socuoiky = ""){
//         document.getElementById("errorsocuoiky").innerHTML = " hãy nhập số cuối kỳ ";
//     }
// }

$(document).ready(function() {
 
        //Khi bàn phím được nhấn và thả ra thì sẽ chạy phương thức này
        $("#formDemo").validate({
            rules: {
                fullname: "required",
                diachi: {
                    required: true,
                    minlength: 2
                },
                ngaydauky: "required",
                ngaycuoiky: "required",
                sodauky: {
                    required: " true",
                    minlength: 2
                },
                socuoiky: {
                    required: "true",
                    minlength: 2
                }
            },
            messages: {
                fullname: "Vui lòng nhập tên",                
                diachi: {
                    required: "Vui lòng nhập địa chỉ",
                    minlength: "Địa chỉ ngắn quá"
                },
                ngaydauky: "chọn ngày đầu kỳ",
                ngaycuoiky: "chọn ngày cuối kỳ",
                sodauky: "vui lòng số đầu kỳ",
                socuoiky: "vui long nhập số cuối kỳ"
            }
        });
    });
