const pool = require("../../config/database");

module.exports = {
  addcomment: (data,callBack) => {
     pool.query(`SELECT * from  phieudattour where phieudattour.MaKH= ? and phieudattour.MaTour=? `, [data.MaKH,data.MaTour], (error, results) => {
      if (error) {
        return callBack(error);
      }
      else if(results.length > 0){
        pool.query(`INSERT INTO binhluan (binhluan,DanhGia,MaKH,MaTour) VALUES (?,?,?,?)`, [data.binhluan,data.DanhGia,data.MaKH,data.MaTour], (error, results) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        });
      }
      else
      {
        return callBack(null, results='fail');
      }
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
  get5star: (callBack) => {
    pool.query(`SELECT binhluan.DanhGia,tour.MaTour,tour.TenTour ,tour.HinhAnh from binhluan INNER JOIN tour on binhluan.MaTour=tour.MaTour WHERE binhluan.DanhGia=5 or binhluan.DanhGia=4 LIMIT 3`, [], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  
};
