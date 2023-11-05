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

module.exports = { getAll, addCustommer, RemoveById, countCustommer };
