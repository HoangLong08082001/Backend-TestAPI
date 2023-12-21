const pool = require("../../config/database");
const statisticalModel = require("./StaticModel");

const getDoanhThu = (req, res) => {
  pool.query(statisticalModel.doanhThu, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ data: result });
    }
  });
};
const getKhachHang = (req, res) => {};
const getSoluongTour = (req, res) => {
  pool.query(statisticalModel.SoLuongTour, [], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.status(200).json({ data: result });
    }
  });
};
const getGiamGia = (req, res) => {
    pool.query(statisticalModel.giamGia, [], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          return res.status(200).json({ data: result });
        }
      });
};
module.exports = { getDoanhThu, getKhachHang, getSoluongTour, getGiamGia };
