import fs from "fs";
import pool from "../../config/database";
const TourSerModal = require("./TourServerModel.js");
const getAll = (req, res) => {
  pool.query("SELECT * FROM tour", [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: "fails" });
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const addTour = (req, res) => {
  let img1 = req.files.imgone[0];
  let img2 = req.files.imgone[1];
  let img3 = req.files.imgone[2];
  let img4 = req.files.imgone[3];
  let img5 = req.files.imgone[4];
  let tentour = req.body.char[0];
  let giatour = req.body.char[1];
  let diadiemdi = req.body.char[2];
  let ngaydi = req.body.date[0];
  let ngayve = req.body.date[1];
  let lichtrinh1 = req.body.editor[0];
  let lichtrinh2 = req.body.editor[1];
  let lichtrinh3 = req.body.editor[2];
  let lichtrinh4 = req.body.editor[3];
  let lichtrinh5 = req.body.editor[4];
  let lichtrinh6 = req.body.editor[5];
  let lichtrinh7 = req.body.editor[6];
  let loaitour = req.body.select[0];
  let khuvuc = req.body.select[1];
  let diadiemden = req.body.select[2];
  let phuongtien = req.body.select[3];
  let giamgia = req.body.select[4];
  let giamgiathem = req.body.select[5];
  let quyMo = req.body.number[0];
  let imgname1 = req.files.imgone[0].name;
  let imgname2 = req.files.imgone[1].name;
  let imgname3 = req.files.imgone[2].name;
  let imgname4 = req.files.imgone[3].name;
  let imgname5 = req.files.imgone[4].name;
  let uploadPath = __dirname + "/uploads/" + imgname1;
  let uploadPath1 = __dirname + "/uploads/" + imgname2;
  let uploadPath2 = __dirname + "/uploads/" + imgname3;
  let uploadPath3 = __dirname + "/uploads/" + imgname4;
  let uploadPath4 = __dirname + "/uploads/" + imgname5;

  let imgdata1 = req.files.imgone[0].data;
  let imgdata2 = req.files.imgone[1].data;
  let imgdata3 = req.files.imgone[2].data;
  let imgdata4 = req.files.imgone[3].data;
  let imgdata5 = req.files.imgone[4].data;
  img1.mv(uploadPath, (err) => {
    if (err) console.log(err);
  });
  img2.mv(uploadPath1, (err) => {
    if (err) console.log(err);
  });
  img3.mv(uploadPath2, (err) => {
    if (err) console.log(err);
  });
  img4.mv(uploadPath3, (err) => {
    if (err) console.log(err);
  });
  img5.mv(uploadPath4, (err) => {
    if (err) console.log(err);
  });

  console.log(ngaydi + " " + ngayve);
  if (+giamgia === 0 && +giamgiathem === 0) {
    console.log("No dis");
    pool.query(
      "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        tentour,
        diadiemdi,
        diadiemden,
        ngaydi,
        ngayve,
        phuongtien,
        imgdata1,
        imgdata2,
        imgdata3,
        imgdata4,
        imgdata5,
        lichtrinh1,
        lichtrinh2,
        lichtrinh3,
        lichtrinh4,
        lichtrinh5,
        lichtrinh6,
        lichtrinh7,
        loaitour,
        khuvuc,
        giatour,
        quyMo,
      ],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(200).json({
            message: "fails",
          });
        }
        if (data) {
          return res.status(200).json({
            message: "success",
          });
        }
      }
    );
  } else if (+giamgia !== 0) {
    console.log(giamgia);
    pool.query(
      "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo, id_giamgia) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        tentour,
        diadiemdi,
        diadiemden,
        ngaydi,
        ngayve,
        phuongtien,
        imgdata1,
        imgdata2,
        imgdata3,
        imgdata4,
        imgdata5,
        lichtrinh1,
        lichtrinh2,
        lichtrinh3,
        lichtrinh4,
        lichtrinh5,
        lichtrinh6,
        lichtrinh7,
        loaitour,
        khuvuc,
        giatour,
        quyMo,
        giamgia,
      ],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(200).json({
            message: "fails",
          });
        }
        if (data) {
          return res.status(200).json({
            message: "success",
          });
        }
      }
    );
  } else if (+giamgiathem !== 0) {
    console.log(giamgiathem);
    pool.query(
      "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo, id_giamgiathem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        tentour,
        diadiemdi,
        diadiemden,
        ngaydi,
        ngayve,
        phuongtien,
        imgdata1,
        imgdata2,
        imgdata3,
        imgdata4,
        imgdata5,
        lichtrinh1,
        lichtrinh2,
        lichtrinh3,
        lichtrinh4,
        lichtrinh5,
        lichtrinh6,
        lichtrinh7,
        loaitour,
        khuvuc,
        giatour,
        quyMo,
        giamgiathem,
      ],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(200).json({
            message: "fails",
          });
        }
        if (data) {
          return res.status(200).json({
            message: "success",
          });
        }
      }
    );
  } else if (+giamgia !== 0 && +giamgiathem !== 0) {
    console.log(giamgia + " " + giamgiathem);
    pool.query(
      "INSERT INTO tour(TenTour, DiaDiemDi, DiaDiemDen, NgayDi, NgayVe, PhuongTien, HinhAnh, HinhAnh2, HinhAnh3, HinhAnh4, HinhAnh5, LichTrinh1, LichTrinh2, LichTrinh3, LichTrinh4, LichTrinh5, LichTrinh6, LichTrinh7, LoaiTour, vungMien, GiaTour, QuyMo, id_giamgia, id_giamgiathem) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        tentour,
        diadiemdi,
        diadiemden,
        ngaydi,
        ngayve,
        phuongtien,
        imgdata1,
        imgdata2,
        imgdata3,
        imgdata4,
        imgdata5,
        lichtrinh1,
        lichtrinh2,
        lichtrinh3,
        lichtrinh4,
        lichtrinh5,
        lichtrinh6,
        lichtrinh7,
        loaitour,
        khuvuc,
        giatour,
        quyMo,
        giamgia,
        giamgiathem,
      ],
      (err, data) => {
        if (err) {
          console.log(err);
          return res.status(200).json({
            message: "fails",
          });
        }
        if (data) {
          return res.status(200).json({
            message: "success",
          });
        }
      }
    );
  }
};
const removeById = (req, res) => {
  let id = req.body.id;
  pool.query("DELETE FROM tour WHERE MaTour = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success" });
    }
  });
};
const GETPHIEUTOUR = (req, res) => {
  
  pool.query("SELECT * FROM phieudattour where phieudattour.TrangThai = 0",[], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ data:result });
    }
  });
};
const updateById = (req, res) => {
  let tentour = req.body.char[0];
  let giatour = req.body.char[1];
  let diadiemdi = req.body.char[2];
  let id = req.body.char[4];
  let loaitour = req.body.select[0];
  let khuvuc = req.body.select[1];
  let diadiemden = req.body.select[2];
  let phuongtien = req.body.select[3];
  let quyMo = req.body.number[0];
  let lichtrinh1 = req.body.editor[0];
  let lichtrinh2 = req.body.editor[1];
  let lichtrinh3 = req.body.editor[2];
  let lichtrinh4 = req.body.editor[3];
  let lichtrinh5 = req.body.editor[4];
  let lichtrinh6 = req.body.editor[5];
  let lichtrinh7 = req.body.editor[6];
  let ngayDi = req.body.date[0];
  let ngayVe = req.body.date[1];
  console.log(ngayDi);
  console.log(ngayVe);
  pool.query(
    "UPDATE tour SET TenTour=?,DiaDiemDi=?,DiaDiemDen=?,NgayDi=?,NgayVe=?,PhuongTien=?,LichTrinh1=?,LichTrinh2=?,LichTrinh3=?,LichTrinh4=?,LichTrinh5=?,LichTrinh6=?,LichTrinh7=?,LoaiTour=?,vungMien=?,GiaTour=?,QuyMo=? WHERE MaTour=?",
    [
      tentour,
      diadiemdi,
      diadiemden,
      ngayDi,
      ngayVe,
      phuongtien,
      lichtrinh1,
      lichtrinh2,
      lichtrinh3,
      lichtrinh4,
      lichtrinh5,
      lichtrinh6,
      lichtrinh7,
      loaitour,
      khuvuc,
      giatour,
      quyMo,
      id,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "false" });
      }
      if (result) {
        return res.status(200).json({ message: "success" });
      }
    }
  );
};
module.exports = { addTour, getAll, removeById, updateById,GETPHIEUTOUR };
