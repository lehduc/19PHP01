function nhapemail(){
    var nhapemail = document.getElementById("email").value.length;
        if(nhapemail == 0){
            document.getElementById("span0").innerHTML = "Email không được để trông!!!";
        }
        else{
            document.getElementById("span0").innerHTML = "";
        }
    }
    //Nhập tên
    function nhapten(){
        var ten = document.getElementById("username").value.length;
            if (ten == 0){
                document.getElementById("span1").innerHTML = "Tên không được để trống!!!";
            }
            else{
                document.getElementById("span1").innerHTML = "";
            }
       }
    //Nhập số điện thoại
    function nhapso(){
        var sodienthoai = document.getElementById("sodienthoai").value;
            if (sodienthoai.length == 0){
                document.getElementById("span2").innerHTML = "SĐT không được để trống!!!";
            }
            else{
                document.getElementById("span2").innerHTML = "";
           }
        }
    //Nhập mã số thuế
    function nhapsothue(){
        var sothue = document.getElementById("sothue").value.length;
            if (sothue == 0){
                document.getElementById("span3").innerHTML = "Mã số thuế không được để trống";
            }
            else{
                document.getElementById("span3").innerHTML = "";
            }
        }
    //Nhập tp/tinh
    function nhaptinh(){
        var tinh = document.getElementById("tp/tinh").value.length;
            if (tinh == 0){
                document.getElementById("span4").innerHTML = "Tinh/tp không được để trống!!!";
            }
            else{
                document.getElementById("span4").innerHTML = "";
            }
        }
    //Nhập huyện
    function nhaphuyen(){
        var huyen = document.getElementById("huyen").value.length;
            if (huyen == 0){
                document.getElementById("span5").innerHTML = "Huyện không được để trống!!!";
            }
            else{
                document.getElementById("span5").innerHTML = "";
            }
        } 
    //Nhập xã
    function nhapxa(){
        var xa = document.getElementById("xa").value.length;
            if (xa == 0){
                document.getElementById("span6").innerHTML = "Xã không được để trống!!!";
            }
            else{
                document.getElementById("span6").innerHTML = "";
            }
        }       