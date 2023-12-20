const pool = require("../../config/database");
const ruleModal = require("./rulesModel");

const getAll = (req, res) => {
  pool.query(ruleModal.GetAll, [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const Assign = (req, res) => {
  let data = req.body.data;
  let id_vitri = req.body.data.id_vitri;
  let rule = req.body.data.Rule;
  console.log(id_vitri);
  console.log(rule);
  pool.query(ruleModal.RemoveByVitri, [id_vitri], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      pool.query(ruleModal.AddAgainRule, [rule], (err, result) => {
        if (err) {
          console.log(err);
          return res.status(200).json({ message: "fails" });
        }
        if (result) {
          return res.status(200).json({ message: "success" });
        }
      });
    }
  });
};
const AddNew = (req, res) => {
  let url = req.body.url;
  let des = req.body.des;
  pool.query(ruleModal.AddNewRule, [url, des], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "fails" });
    }
    if (result) {
      return res.status(200).json({ message: "success" });
    }
  });
};
module.exports = { getAll, Assign, AddNew };
