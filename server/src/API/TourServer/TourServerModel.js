class TourSerModal {
  static GetAllTour = "SELECT * FROM tour";
  static InsertTourAll =
    "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo,id_giamgia,id_giamgiathem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  static DeleteById = "DELETE FROM tour WHERE MaTour = ?";
  static UpdateTourById =
    "UPDATE tour SET TenTour=?,DiaDiemDi=?,DiaDiemDen=?,NgayDi=?,NgayVe=?,PhuongTien=?,LichTrinh1=?,LichTrinh2=?,LichTrinh3=?,LichTrinh4=?,LichTrinh5=?,LichTrinh6=?,LichTrinh7=?,LoaiTour=?,vungMien=?,GiaTour=?,GiamGia=?,QuyMo=? WHERE MaTour=?";
  static InsertTourGiamGia =
    "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo,id_giamgia) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  static InsertTourGiamGiaThem =
    "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo,id_giamgiathem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
  static InsertTour =
    "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

}
module.export = TourSerModal;
