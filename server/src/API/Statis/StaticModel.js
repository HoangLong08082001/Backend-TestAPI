class statisticalModel {
  static SoLuongTour =
    "SELECT YEAR(tour.NgayDi) as nam, MONTH(tour.NgayDi) AS thang, COUNT(tour.MaTour) AS so_luong_tour FROM tour GROUP BY thang ORDER BY nam ASC";
  static doanhThu =
    "SELECT YEAR(phieudattour.NgayTao) as nam, MONTH(phieudattour.NgayTao) AS thang, SUM(hoadon.Tongtien) AS tongtien FROM hoadon JOIN phieudattour on hoadon.MaPhieu = phieudattour.MaPhieu GROUP BY thang ORDER BY nam ASC";
    static giamGia = "SELECT YEAR(giamgia.thoigianbatdau) as nam, MONTH(giamgia.thoigianbatdau) AS thang, COUNT(giamgia.id_giamgia) AS so_luong_dot_giam_gia FROM giamgia GROUP BY thang ORDER BY nam ASC"
}
module.exports = statisticalModel;
