import connection from "../../config/database";
import custommerModel from "./custommerService";
const getAll = (req, res) => {
  connection.query(custommerModel.getAll, [], (err, result) => {
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
  let diachi = req.body.DiaChi;
  let ngaysinh = req.body.Ngaysinh;
  let sdt = req.body.Sdt;
  let username = req.body.Username;
  let password = req.body.Password;
  if (!tenkh || !sdt) {
    return res.send("Please fill ");
  }
  connection.query(
    custommerModel.addCustommer,
    [tenkh, cmnd, diachi, ngaysinh, sdt, username, password],
    (err, result) => {
      if (err) throw err;
      return res.send({ data: "Add success" });
    }
  );
};

const RemoveById = (req, res) => {
  let id = req.params.id;
  connection.query(custommerModel.RemoveById, [id], (err, result) => {
    if (err) throw err;
    return res.send({ data: "Remove success" });
  });
};

module.exports = { getAll, addCustommer, RemoveById };
