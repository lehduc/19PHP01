$(document).change(function(){
    var ngaydau = new Date($('#ngaydauky').val());
    var ngaycuoi = new Date($('#ngaycuoiky').val());
    var today = new Date();
    var sodau = $('#sodauky').value;
    var socuoi = $('#socuoiky').value; 
    if (ngaydau > today) {
      alert("Ngày đầu kì không được quá ngày hôm nay");
     $('#firstday').val("");
    }

    if (ngaydau > ngaycuoi){
        alert("Ngày cuối kì phải lớn hơn ngày đầu kì");
    }
    if ( sodau > socuoi){
        alert("Số cuối kỳ phải lớn hơn số đầu kỳ");
	}
});

function tinhtien(){
	var x = document.getElementById("sodauky").val();
	var y = document.getElementById("socuoiky").val();
	var s = 0 ;
	while (x < y){
		if((y - x) <= 100){
			s = (y - x) * 1500;	
		}
		else if((y - x) > 100 && (y - x <= 300)){
			s = 1500 * 100 + (y - x - 100) * 2000;	
		}
		else if((y - x) > 300){
			s = 1500 * 100 + 2000 * 200 + (y - x - 300) * 3000;
		}
	}
	document.getElementById("submit").innerHTML = s;
}

