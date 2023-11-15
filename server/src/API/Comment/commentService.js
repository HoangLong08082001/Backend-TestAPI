const pool = require("../../config/database");

module.exports = {
  addcomment: (data,callBack) => {
    pool.query(`INSERT INTO binhluan (binhluan,DanhGia,MaKH,MaTour) VALUES (?,?,?,?)`, [data.binhluan,data.DanhGia,data.MaKH,data.MaTour], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getcomment: (data,callBack) => {
    pool.query(`SELECT binhluan.binhluan,khachhang.TenKH,binhluan.DanhGia from binhluan INNER JOIN khachhang on binhluan.MaKH=khachhang.MaKH WHERE binhluan.MaTour=?`, [data.MaTour], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
