// const pool = require("../../config/database");

// module.exports = {
//   gettour: (callBack) => {
//     pool.query(`select * from tour`, [], (error, results) => {
//       if (error) {
//         return callBack(error);
//       }
//       return callBack(null, results);
//     });
//   },
//   gettourid: (id, callBack) => {
//     pool.query(
//       `select * from tour where tour.MaTour=?`,
//       [id],
//       (error, results) => {
//         if (error) {
//           return callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },
//   Searchtour: (data, callBack) => {
//     pool.query(
//       `select * from tour where tour.DiaDiemDen=? and tour.NgayDi=? and tour.NgayVe=?`,
//       [data.DiaDiemDen, data.NgayDi, data.NgayVe],
//       (error, results) => {
//         if (error) {
//           return callBack(error);
//         }
//         return callBack(null, results);
//       }
//     );
//   },
// };
import pool from "../../config/database";

class tourModal {
  static getAll = (callBack) => {
    pool.query("SELECT * FROM tour", [], (err, result) => {
      if (err) {
        return callBack(err);
      }
      if (result) {
        return callBack(null, result);
      }
    });
  };

  static getById = (id, callBack) => {
    pool.query("SELECT * FROM tour WHERE MaTour=?", [id], (err, result) => {
      if (err) {
        return callBack(err);
      }
      if (result) {
        return callBack(null, result);
      }
    });
  };

  static SearchTour = (data, callBack) => {
    pool.query(
      "SELECT * FROM tour WHERE DiaDiemDen=? and NgayDi=? and NgayVe=?",
      [
        [data.DiaDiemDen, data.NgayDi, data.NgayVe],
        (err, result) => {
          if (err) {
            return callBack(err);
          }
          if (result) {
            return callBack(null, result);
          }
        },
      ]
    );
  };
}

module.exports = tourModal;
