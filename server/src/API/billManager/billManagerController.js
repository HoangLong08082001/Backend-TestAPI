const pool = require("../../config/database");
const billManaModel = require("./billManagerModel");

const GetAll = (req, res) => {
  pool.query(billManaModel.getAll, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const ById = (req, res) => {
  let id = req.params.id;
  console.log(id);
  pool.query(billManaModel.byid, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ data: result });
    }
  });
};
module.exports = { GetAll, ById };
