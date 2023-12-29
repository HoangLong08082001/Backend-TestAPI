class statisticalModel {
  static SoLuongTour = "SELECT  COUNT(tour.MaTour) AS so_luong_tour FROM tour ";
  static doanhThu = "SELECT SUM(hoadon.Tongtien) AS tongtien FROM hoadon ";
  static giamGia =
    "SELECT YEAR(giamgia.thoigianbatdau) as nam, MONTH(giamgia.thoigianbatdau) AS thang, COUNT(giamgia.id_giamgia) AS so_luong_dot_giam_gia FROM giamgia GROUP BY thang ORDER BY nam ASC";
  static soluongkhachdat =
    "SELECT YEAR(phieudattour.NgayTao) as nam, MONTH(phieudattour.NgayTao) as thang, COUNT(hoadon.MaHoaDon) as soluonghoadon FROM hoadon JOIN phieudattour ON hoadon.MaPhieu = phieudattour.MaPhieu JOIN khachhang ON phieudattour.MaKH = khachhang.MaKH;";
}
module.exports = statisticalModel;
