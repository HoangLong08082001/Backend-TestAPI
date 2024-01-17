import pool from "../../config/database";
import custommerModel from "./custommerService";
import bcrypt, { hash } from "bcrypt";
const salt = 10;
const getAll = (req, res) => {
  pool.query(custommerModel.getAll, [], (err, result) => {
    if (err) throw err;
    return res.status(200).json({
      data: "ok",
      list: result,
    });
  });
};
const getDK = (req, res) => {
  const MaKH = req.body.MaKH;
  pool.query(custommerModel.getDK, [MaKH], (err, result) => {
    if (err) throw err;
    return res.status(200).json({
      data: "success",
      list: result,
    });
  });
};
const FindUser = (req, res) => {
  const username = req.body.username;
  pool.query(custommerModel.FindKhachHang, [username], (err, result) => {
    if (err) throw err;
    else if (result.length > 0) {
      return res.status(200).json({
        data: "failure",
        MaKH: result[0],
      });
    } else {
      return res.status(200).json({
        data: "Success",
      });
    }
  });
};
const UpdateUser = (req, res) => {
  const TenKH = req.body.TenKH;
  const DiaChi = req.body.DiaChi;
  const CMND = req.body.CMND;
  const Sdt = req.body.Sdt;
  const MaKH = req.body.MaKH;
  pool.query(
    custommerModel.updatettuser,
    [TenKH, DiaChi, CMND, Sdt, MaKH],
    (err, result) => {
      if (err) throw err;
      else {
        return res.status(200).json({
          data: "Success",
        });
      }
    }
  );
};
const UpdatebookUser = (req, res) => {
  const TenKH = req.body.TenKH;
  const DiaChi = req.body.DiaChi;
  const Sdt = req.body.Sdt;
  const MaKH = req.body.MaKH;
  const value = req.body;
  pool.query(
    `select * from khachhang where khachhang.MaKH=? `,
    [MaKH],
    (err, result) => {
      if (err) throw err;
      else {
        console.log(value);
        const data = result[0];
        if (data.TenKH === null || data.DiaChi === null || data.Sdt === null) {
          pool.query(
            `UPDATE khachhang SET TenKH = ?,DiaChi =?,Sdt=?  where khachhang.MaKH = ? `,
            [TenKH, DiaChi, Sdt, MaKH],
            (err, result) => {
              if (err) throw err;
              else {
                return res.status(200).json({
                  data: "Success",
                });
              }
            }
          );
        } else {
          return res.status(200).json({
            data: "Success",
          });
        }
      }
    }
  );
};
const addCustommer = (req, res) => {
  let username = req.body.email;
  let pass = req.body.password;
  pool.query(custommerModel.FindKhachHang, [username], (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      return res.status(200).json({ message: "exists" });
    } else {
      bcrypt.hash(pass, salt, (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          pool.query(
            custommerModel.register,
            [username, hash],
            (err, result) => {
              if (err) {
                console.log(err);
                return res.status(200).json({ message: "fails" });
              }
              if (result) {
                return res.status(200).json({ message: "success" });
              }
            }
          );
        }
      });
    }
  });
};
const addCustommergoogle = (req, res) => {
  let username = req.body.username;

  pool.query(custommerModel.registergoogle, [username], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({
        message: "faile",
      });
    }
    if (result) {
      pool.query(custommerModel.FindKhachHang, [username], (err, result) => {
        if (err) throw err;
        else if (result.length > 0) {
          return res.status(200).json({
            message: "success",
            data: result[0],
          });
        }
      });
    }
  });
};
const countCustommer = (req, res) => {
  pool.query(custommerModel.count, [], (err, rows) => {
    if (err) {
      console.log(err);
      return res.status(200).json("fails");
    }
    if (rows) {
      return res.status(200).json(rows);
    }
  });
};
const RemoveById = (req, res) => {
  let id = req.body.id;
  pool.query(custommerModel.RemoveById, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "fails" });
    }
    if (result) {
      return res.status(200).json({ message: "success" });
    }
  });
};
const AddNew = (req, res) => {
  //   TenKH
  // CMND
  // DiaChi
  // Birth
  // Sdt
  let TenKH = req.body.TenKH;
  let CMND = req.body.CMND;
  let DiaChi = req.body.DiaChi;
  let NgaySinh = req.body.NgaySinh;
  let Sdt = req.body.Sdt;
  pool.query(
    "INSERT INTO khachhang(TenKH, CMND,DiaChi,NgaySinh,Sdt) VALUES(?,?,?,?,?)",
    [TenKH, CMND, DiaChi, NgaySinh, Sdt],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "fails" });
      }
      if (result) {
        return res.status(200).json({ message: "success" });
      }
    }
  );
};
module.exports = {
  getAll,
  addCustommer,
  RemoveById,
  countCustommer,
  getDK,
  AddNew,
  FindUser,
  addCustommergoogle,
  UpdateUser,
  UpdatebookUser,
};
