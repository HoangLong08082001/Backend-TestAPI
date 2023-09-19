import pool from "../../config/database";
import positionModel from "./posistionService";
const getAll = (req, res) => {
  pool.query(positionModel.getAll, [], (err, result) => {
    if (err) throw err;
    return res.send({ data: result });
  });
};
const addPostion = (req, res) => {
  let tenvitri = req.body.TenViTri;
  let mota = req.body.description;
  if (!tenvitri) {
    return res.send({ data: "Please fill this field" });
  }
  pool.query(positionModel.addPostion, [tenvitri, mota], (err, result) => {
    return res.send({ data: "Add success" });
  });
};
const RemoveById = (req, res) => {
  let id = req.params.id;
  pool.query(positionModel.RemoveById, [id], (err, result) => {
    if (err) throw err;
    return res.send({ data: "DELETE SUCCESS" });
  });
};
module.exports = { getAll, RemoveById, addPostion };
