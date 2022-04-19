// Bài 1
document.getElementById("btnTinhLuong").onclick = function (){
    var luongNgay = document.getElementById("luongNgay").value;
    var ngayDiLam = document.getElementById("ngayDiLam").value;

    var tongLuong = luongNgay * ngayDiLam;

    document.getElementById("soLuong").innerHTML = "Tiền lương tháng này là : " + tongLuong + " VND";

}

//Bài 2
document.getElementById("btnTinhTb").onclick = function (){
    
    var so1 = document.getElementById("so1").value*1;
    var so2 = document.getElementById("so2").value*1;
    var so3 = document.getElementById("so3").value*1;
    var so4 = document.getElementById("so4").value*1;
    var so5 = document.getElementById("so5").value*1;
    
   
    
    var tong = so1 + so2 + so3 + so4 + so5;


    var giaTriTrungBinh = tong / 5;

    document.getElementById("soTb").innerHTML = "Giá trị trung bình là : " + giaTriTrungBinh;

}

//Bài 3
document.getElementById("btnDoiTien").onclick = function (){
    var tienDo = document.getElementById("tienDo").value;
    var tienViet = document.getElementById("tienViet").value;

    var tienDoiDuoc = tienDo * tienViet;

    document.getElementById("tienDoi").innerHTML = "Đổi được " + tienDoiDuoc + " VND từ " + tienDo + " USD";

}

//Bài 4
document.getElementById("btnChuVi").onclick = function (){

    var dai = document.getElementById("chieuDai").value*1;
    var rong = document.getElementById("chieuRong").value*1;

    var chuVi = (dai + rong) * 2;

    

    document.getElementById("CVDT").innerHTML = "Chu vi hình chữ nhật là : " + chuVi;

}

document.getElementById("btnDienTich").onclick = function (){

    var dai = document.getElementById("chieuDai").value*1;
    var rong = document.getElementById("chieuRong").value*1;

    var dienTich = dai * rong;

    document.getElementById("CVDT").innerHTML = "Diện tích hình chữ nhật là : " + dienTich;

}

//Bài 5
document.getElementById("btnKySo").onclick = function (){

    var soNhap = document.getElementById("soBatKy").value;
    
    if(soNhap<100){

    var soChuc = Math.floor(soNhap % 100 / 10);

    var soDonVi = soNhap % 10;


    var soRa = soChuc + soDonVi;

    document.getElementById("tongKySo").innerHTML = "Tổng 2 ký số của " + soNhap + " là : " + soRa;

} else {
    alert("Xin nhập số có 2 chữ số");
}
}
