const {
  gettour,
  gettour2,
  gettourid,
  Searchtour,
  Addtourlove,
  gettourlove,
  Gettourhere,
  gettouridbill,
  gettouridlist,
  gettourbooksuccess,
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
  gettourall2: (reg, res) => {
    gettour2((err, results) => {
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
    const data = reg.body;
    console.log(data);
    Gettourhere(data, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      console.log(results);
      return res.status(200).json({
        data: results,
      });
    });
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
  Gettourbooksuccess: (reg, res) => {
    const data = { MaKH: reg.body.MaKH };

    gettourbooksuccess(data, (err, results) => {
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
      "SELECT *, giamgia.thoigianbatdau AS batdau, giamgia.thoigiantoi AS toi FROM tour JOIN giamgia ON giamgia.id_giamgia = tour.id_giamgia WHERE giamgia.thoigianbatdau >= CURDATE() AND CURDATE() <= giamgia.thoigiantoi",
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
  getMoreController: (req, res) => {
    pool.query("SELECT * FROM giamgiathem", [], (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result) {
        return res.status(200).json({ message: "success", data: result });
      }
    });
  },
  getSoLuongHoaDon: (req, res) => {
    pool.query(
      "SELECT COUNT(hoadon.MaHoaDon) as soluonghoadon FROM hoadon",
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
  },
  getKhachDangKy: (req, res) => {
    pool.query(
      `SELECT COUNT(khachhang.MaKH) as soluongkhach FROM khachhang WHERE khachhang.password != "" `,
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
  },
  getSoLuongTour: (req, res) => {
    pool.query(
      `SELECT COUNT(tour.MaTour) as soluongtour FROM tour`,
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
  },
  getPhieuChuaDuyet: (req, res) => {
    pool.query(
      `SELECT COUNT(phieudattour.MaPhieu) as soluongphieu FROM phieudattour WHERE phieudattour.TrangThai = 0`,
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
  },
};
