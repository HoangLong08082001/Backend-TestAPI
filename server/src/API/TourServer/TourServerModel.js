import pool from "../../config/database";


class TourServerModal {
  static addTour = (data, callBack) => {
    pool.query(
      "INSERT INTO tour( `TenTour`, `DiaDiemDi`, `DiaDiemDen`, `NgayDi`, `NgayVe`, `PhuongTien`, `HinhAnh`, `HinhAnh2`, `HinhAnh3`, `HinhAnh4`, `HinhAnh5`, `LoaiTour`, `LichTrinh`, `GiaTour`, `GiamGia`, `QuyMo`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        data.TenTour,
        data.DiaDiemDi,
        data.DiaDiemDen,
        data.NgayDi,
        data.NgayVe,
        data.PhuongTien,
        data.HinhAnh,
        data.HinhAnh2,
        data.HinhAnh3,
        data.HinhAnh4,
        data.HinhAnh5,
        data.LoaiTour,
        data.LichTrinh,
        data.GiaTour,
        data.GiamGia,
        data.QuyMo,
      ],
      (err, result) => {
        if (err) {
          return callBack(err);
        }
        if (result) {
          return callBack(null, result);
        }
      }
    );
  };
}
module.exports = TourServerModal;
