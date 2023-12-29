class conditionSta {
  static getDoanhThuByThang =
    "SELECT *, MONTH(phieudattour.NgayTao) as thang, YEAR(phieudattour.NgayTao) as nam, SUM(hoadon.Tongtien) AS tongtien FROM hoadon join phieudattour on hoadon.MaPhieu = phieudattour.MaPhieu GROUP BY thang";
  static getDoanThuByQuarter =
    "SELECT *, QUARTER(phieudattour.NgayTao) as quy, YEAR(phieudattour.NgayTao) as nam,SUM(hoadon.Tongtien) AS tongtien FROM hoadon join phieudattour on hoadon.MaPhieu = phieudattour.MaPhieu GROUP BY quy";
  static getSoLuongMonth =
    "SELECT YEAR(tour.NgayDi) AS nam, MONTH(tour.NgayDi) AS thang, COUNT(tour.MaTour) AS so_luong_tour FROM tour GROUP BY thang";
  static getSoLuongQuarter =
    "SELECT QUARTER(tour.NgayDi) AS quy, YEAR(tour.NgayDi) as nam, COUNT(tour.MaTour) AS so_luong_tour FROM tour GROUP BY quy ORDER BY nam ASC";
  static soluongChartQuarter =
    "SELECT QUARTER(tour.NgayDi)as quy, COUNT(tour.MaTour) as soluong FROM tour GROUP BY quy";
  static soluongkhachMonth =
    "SELECT YEAR(phieudattour.NgayTao) as nam, MONTH(phieudattour.NgayTao) as thang, COUNT(hoadon.MaHoaDon) as soluonghoadon FROM hoadon JOIN phieudattour ON hoadon.MaPhieu = phieudattour.MaPhieu JOIN khachhang ON phieudattour.MaKH = khachhang.MaKH GROUP BY thang;";
  static soluongkhachQuarter =
    "SELECT YEAR(phieudattour.NgayTao) as nam, QUARTER(phieudattour.NgayTao) as quy, COUNT(hoadon.MaHoaDon) as soluonghoadon FROM hoadon JOIN phieudattour ON hoadon.MaPhieu = phieudattour.MaPhieu JOIN khachhang ON phieudattour.MaKH = khachhang.MaKH GROUP BY quy;";
}
module.exports = conditionSta;
