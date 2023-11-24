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

const addCustommer = (req, res) => {
  let tenkh = req.body.TenKH;
  let cmnd = req.body.CMND;
  let diachi = req.body.Diachi;
  let sdt = req.body.Sdt;
  let username = req.body.email;
  let pass = req.body.password;
  bcrypt.hash(pass, salt, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      pool.query(
        custommerModel.register,
        [tenkh, cmnd, diachi, sdt, username, hash],
        (err, result) => {
          if (err) {
            console.log(err);
            return res.status(200).json("fails");
          }
          if (result) {
            return res.status(200).json("success");
          }
        }
      );
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
};
