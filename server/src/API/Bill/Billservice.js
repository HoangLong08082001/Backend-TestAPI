import connection from "../../config/database";

class BillModel {
 
  static addphieu =
    "INSERT INTO phieudattour(MaTour,MaKH,NguoiLon, TreEm, EmBe,TrangThai, NgayTao) VALUES (?,?,?,?,?,?,?)";
  static addhoadon =
    "INSERT INTO hoadon(TongTien,HinhThucThanhToan,TrangThaiThanhToan,MaPhieu) VALUES (?,?,?,(SELECT phieudattour.MaPhieu FROM phieudattour WHERE MaKH=? and MaTour=?))";  
  static getphieu=
  "SELECT * from phieudattour INNER JOIN hoadon on phieudattour.MaPhieu=hoadon.MaPhieu INNER JOIN tour on tour.MaTour=phieudattour.MaTour INNER JOIN khachhang on khachhang.MaKH = phieudattour.MaKH WHERE phieudattour.MaTour=? and phieudattour.MaKH=?"
}

module.exports = BillModel;