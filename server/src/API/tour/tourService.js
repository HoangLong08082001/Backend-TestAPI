const pool = require("../../config/database");

module.exports = {
  gettour: (callBack) => {
    pool.query(`select * from tour LIMIT 8 `, [], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  gettourid: (id, callBack) => {
    pool.query(
      `select * from tour where tour.MaTour=?`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  gettouridlist: (id, callBack) => {
    pool.query(
      `select * from tour where tour.MaTour=? GROUP BY tour.MaTour`,
      [id],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  gettouridbill: (data, callBack) => {
   
    pool.query(
      `select * from tour where tour.MaTour=? and tour.NgayDi=?`,
      [data.MaTour,data.NgayDi],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  Searchtour: (data, callBack) => {
    pool.query(
      `select * from tour where tour.DiaDiemDen=? and tour.NgayDi>=? and tour.NgayVe<=? `,
      [data.DiaDiemDen, data.NgayDi, data.NgayVe],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  Gettourhere: (data, callBack) => {
    pool.query(
      `SELECT *, SUM(giamgia.mucgiamgia+giamgiathem.mucgiamgiathem) AS mucgiamgia
      FROM tour
      INNER JOIN giamgia on tour.id_giamgia = giamgia.id_giamgia INNER JOIN giamgiathem ON tour.id_giamgiathem = giamgiathem.id_giamgiathem
      WHERE tour.DiaDiemDi = ? AND tour.DiaDiemDen = ?
      `,
      [data.DiaDiemDi, data.DiaDiemDen],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  Addtourlove: (data, callBack) => {
    pool.query(
      `INSERT INTO touryeuthich (MaKH,MaTour) VALUES (?,?)`,
      [data.MaKH, data.MaTour],
      (error, results) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  gettourlove: (data,callBack) => {
    pool.query(`SELECT tour.HinhAnh,tour.TenTour,tour.MaTour from touryeuthich INNER JOIN khachhang on touryeuthich.MaKH=khachhang.MaKH INNER JOIN tour on touryeuthich.MaTour=tour.MaTour where touryeuthich.MaKH=? `, [data.MaKH], (error, results) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
};
