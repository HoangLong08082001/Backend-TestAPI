const {
  gettour,
  gettourid,
  Searchtour,
  Addtourlove,
  gettourlove,
  Gettourhere,
  gettouridbill,
  gettouridlist,
} = require("../tour/tourService");
const pool = require("../../config/database");
module.exports = {
  gettourall: (reg, res) => {
    gettour((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }

      return res.status(200).json({
        data: results,
      });
    });
  },
  gettourfollowid: (reg, res) => {
    const id = reg.params.id;
    gettourid(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
  gettourfollowidlist: (reg, res) => {
    const id = reg.params.id;
    gettouridlist(id, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
  Gettourbill: (reg, res) => {
    const data = reg.body;
    console.log(data);
    gettouridbill(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
  searchtourdata: (reg, res) => {
    const data = reg.body;

    Searchtour(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
  gettourhere: (reg, res) => {
    let di = "TP.HCM";
    let den = reg.params.noiden;
    // Gettourhere((di, den), (err, results) => {
    //   if (err) {
    //     console.log(err);
    //     return res.status(500).json({
    //       success: err,
    //       message: "Database connection error",
    //     });
    //   }
    //   console.log(results);
    //   return res.status(200).json({
    //     data: results,
    //   });
    // });
    pool.query(
      `SELECT *, giamgia.mucgiamgia+giamgiathem.mucgiamgiathem AS mucgiamgia
    FROM tour
    INNER JOIN giamgia on tour.id_giamgia = giamgia.id_giamgia INNER JOIN giamgiathem ON giamgia.id_giamgia = giamgiathem.id_giamgia
    WHERE tour.DiaDiemDi = ? AND tour.DiaDiemDen = ?
    GROUP BY tour.MaTour
    `,
      [di, den],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          return res.status(200).json({ data: result });
        }
      }
    );
  },
  addlovetour: (reg, res) => {
    const data = reg.body;

    if (data != null) {
      pool.query(
        `select * from touryeuthich where touryeuthich.MaKH=? and touryeuthich.MaTour=? `,
        [data.MaKH, data.MaTour],
        (error, results) => {
          if (error) {
            return res.status(500).json({
              success: err,
              message: "Database connection error",
            });
          } else if (results.length === 0) {
            Addtourlove(data, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: err,
                  message: "Database connection error",
                });
              }
              return res.status(200).json({
                data: "success",
              });
            });
          } else {
            return res.status(200).json({
              data: "exist",
            });
          }
        }
      );
    }
  },
  Gettourlove: (reg, res) => {
    const data = {
      MaKH: reg.body.MaKH,
    };
    gettourlove(data, (err, results) => {
      if (err) {
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      return res.status(200).json({
        data: results,
      });
    });
  },
  GetByVoucher: (req, res) => {
    pool.query(
      "SELECT * FROM tour JOIN giamgia ON giamgia.id_giamgia = tour.id_giamgia WHERE giamgia.thoigianbatdau >= CURDATE() AND CURDATE() <= giamgia.thoigiantoi",
      [],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          return res.status(200).json({ data: result });
        }
      }
    );
  },
  getTourWithDay: (req, res) => {
    pool.query(
      "SELECT giamgia.thoigianbatdau AS batdau, giamgia.thoigiantoi AS toi FROM tour JOIN giamgia ON giamgia.id_giamgia = tour.id_giamgia WHERE giamgia.thoigianbatdau >= CURDATE() AND CURDATE() <= giamgia.thoigiantoi",
      [],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          return res.status(200).json({ data: result });
        }
      }
    );
  },
  getTourWithGiamGia: (req, res) => {
    pool.query(
      "SELECT * FROM tour LEFT JOIN giamgia on tour.id_giamgia = giamgia.id_giamgia LEFT JOIN giamgiathem on tour.id_giamgiathem = giamgiathem.id_giamgiathem",
      [],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        if (result) {
          return res.status(200).json({ data: result });
        }
      }
    );
  },
};
