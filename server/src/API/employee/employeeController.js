import employeeModel from "./employeeService";
import connection from "../../config/database";
const getAll = (req, res) => {
  connection.query(employeeModel.getAll, (err, result) => {
    if (err) throw err;
    res.send({ data: result });
  });
};

const addEmployee = (req, res) => {
  let tennv = req.body.TenNV;
  let cmnd = req.body.CMND;
  let ngaysinh = req.body.Ngaysinh;
  let sdt = req.body.Sdt;
  let email = req.body.Email;
  let pass = req.body.Password;
  let id_vitri = req.body.id_vitri;
  if (!tennv || !cmnd || !ngaysinh || !sdt || !email || !pass || !id_vitri) {
    return res.send({ data: "Please fill all" });
  }
  connection.query(
    employeeModel.addEmployee,
    [tennv, cmnd, ngaysinh, sdt, email, pass, id_vitri],
    (err, result) => {
      if (err) throw err;
      res.send({ data: "ADD SUCCESS" });
    }
  );
};

const removeByID = (req, res) => {
  let id = req.params.id;
  connection.query(employeeModel.removeByID, [id], (err, result) => {
    if (err) throw err;
    res.send({ data: "DELETE SUCCESS" });
  });
};

module.exports = { getAll, removeByID, addEmployee };
