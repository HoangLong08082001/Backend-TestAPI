import pool from "../../config/database";
import positionModel from "./posistionService";
const getAll = (req, res) => {
  pool.query(positionModel.getAll, [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const addPostion = (req, res) => {
  let tenvitri = req.body.name;
  pool.query(positionModel.addPostion, [tenvitri], (err, result) => {
    if (err) {
      return res.status(200).json({ message: "fails" });
    }
    if (result) {
      return res.status(200).json({ message: "success" });
    }
  });
};
const RemoveById = (req, res) => {
  let id = req.params.id;
  pool.query(positionModel.RemoveById, [id], (err, result) => {
    if (err) throw err;
    return res.send({ data: "DELETE SUCCESS" });
  });
};
const getById = (req, res) => {
  let id = req.params.id;
  console.log(id);
  pool.query(positionModel.GetById, [id], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      console.log(result);
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
module.exports = { getAll, RemoveById, addPostion, getById };
