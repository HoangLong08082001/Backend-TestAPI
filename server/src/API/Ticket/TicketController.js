const pool = require("../../config/database");
const GetTicket = (req, res) => {
  pool.query(
    "SELECT * FROM phieudattour inner join khachhang on phieudattour.MaKH=khachhang.MaKH inner JOIN tour ON phieudattour.MaTour=tour.MaTour",
    [],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        return res.status(200).json({ message: "success", data: result });
      }
    }
  );
};
const AddTicket = (req, res) => {
  // idNV,
  //   idKH,
  //   idTour,
  //   tongtien,
  //   date,
  //soLuong,
  //soLuong1,
  //soLuong2,
  let manv = req.body.idNV;
  let makh = req.body.idKH;
  let matour = req.body.idTour;
  let tongtien = req.body.sum;
  let ngaytao = req.body.date;
  let soluong1 = req.body.soLuong;
  let soluong2 = req.body.soLuong1;
  let soluong3 = req.body.soLuong2;
  let hinhthucthanhtoan = req.body.hinhThucThanhToan;
  console.log(
    manv +
      " " +
      makh +
      " " +
      matour +
      " " +
      tongtien +
      " " +
      ngaytao +
      " " +
      soluong1 +
      " " +
      soluong2 +
      " " +
      soluong3
  );
  pool.query(
    "INSERT INTO phieudattour(MaNV, MaTour,MaKH,NguoiLon,TreEm,EmBe,TrangThai,NgayTao) VALUES(?,?,?,?,?,?,?,?)",
    [manv, matour, makh, soluong1, soluong2, soluong3, 1, ngaytao],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        pool.query(
          "INSERT INTO hoadon (Tongtien,HinhThucThanhToan,TrangThaiThanhToan,MaPhieu) VALUES(?,?,?,(SELECT MaPhieu FROM phieudattour WHERE MaKH=?))",
          [tongtien, hinhthucthanhtoan, 1, makh],
          (err, result) => {
            if (err) {
              console.log(err);
            }
            if (result) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      }
    }
  );
};
const UpdateState = (req, res) => {
  let maphieu = req.body.maphieu;
  console.log(maphieu);
  pool.query(
    "UPDATE phieudattour SET TrangThai=? WHERE MaPhieu=?",
    [1, maphieu],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        return res.status(200).json({ message: "success" });
      }
    }
  );
};
module.exports = { AddTicket, GetTicket, UpdateState };
