import employeeModel from "./employeeService";
import pool from "../../config/database";
import bcrypt, { hash } from "bcrypt";
const salt = 10;
const getAll = (req, res) => {
  pool.query(employeeModel.getAll, (err, result) => {
    if (err) throw err;
    if (result) {
      return res.status(200).json({ data: result });
    }
  });
};

const addEmployee = (req, res) => {
  let tennv = req.body.TenNV;
  let cmnd = req.body.cmnd;
  let ngaysinh = req.body.Ngaysinh;
  let sdt = req.body.Sdt;
  let email = req.body.Email;
  let pass = req.body.Password;
  let id_vitri = req.body.Position;
  pool.query(employeeModel.CheckExists, [email], (err, result) => {
    if (err) {
      console.log(err);
    } else if (result.length > 0) {
      return res.status(200).json({ message: "exists" });
    } else {
      bcrypt.hash(pass, salt, (err, hash) => {
        if (err) {
          console.log(err);
        }
        pool.query(
          employeeModel.addEmployee,
          [tennv, cmnd, ngaysinh, sdt, 1, email, hash, id_vitri],
          (err, data) => {
            if (err) {
              return res.json("error");
            }
            if (data) {
              return res.status(200).json({ message: "success" });
            }
          }
        );
      });
    }
  });
};

const removeByID = (req, res) => {
  let id = req.body.id;
  pool.query(employeeModel.deleteById, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "fails" });
    }
    if (result) {
      return res.status(200).json({ message: "success" });
    }
  });
};
const getById = (req, res) => {
  let id = req.query.id;
  pool.query(employeeModel.byId, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "fails" });
    }
    if (result) {
      return res.status(200).json({ data: result });
    }
  });
};
const UpdateEmployee = (req, res) => {
  let id = req.body.id;
  let tennv = req.body.TenNV;
  let cmnd = req.body.cmnd;
  let sdt = req.body.Sdt;
  let id_vitri = req.body.Position;
  pool.query(
    employeeModel.updateById,
    [tennv, cmnd, sdt, id_vitri, id],
    (err, result) => {
      if (err) {
        return res.status(200).json({
          message: "fails",
        });
      }
      if (result) {
        return res.status(200).json({
          message: "success",
        });
      }
    }
  );
};
const countEmployee = (req, res) => {
  pool.query(employeeModel.count, [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json("fails");
    }
    if (result) {
      return res.status(200).json(result);
    }
  });
};
const getUserAccount = (req, res) => {
  return res.status(200).json({
    message: "success",
    data: {
      access_token: req.token,
      role: req.user.data,
      email: req.user.email,
    },
  });
};
const getName = (req, res) => {
  pool.query(employeeModel.getNameEmployee, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ data: result });
    }
  });
};
const employOut = (req, res) => {
  let id = req.body.id;
  console.log(id);
  pool.query(
    `UPDATE nhanvien SET TrangThai=${0} WHERE MaNV=${id}`,
    (err, data) => {
      if (err) {
        console.log(err);
        return res.status(200).json({ message: "fails" });
      }
      if (data) {
        return res.status(200).json({ message: "success" });
      }
    }
  );
};
module.exports = {
  getAll,
  removeByID,
  addEmployee,
  getById,
  UpdateEmployee,
  countEmployee,
  getUserAccount,
  getName,
  employOut,
};
