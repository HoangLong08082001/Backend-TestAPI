const pool = require("../../config/database");
const voucherModel = require("./voucherModel");

const addVoucher = (req, res) => {
  let name = req.body.name;
  let start = req.body.start;
  let end = req.body.end;
  let percent = req.body.percent;
  pool.query(voucherModel.add, [name, end, start, percent], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success" });
    }
  });
};

const getVoucher = (req, res) => {
  pool.query(voucherModel.get, [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const addMoreVoucher = (req, res) => {
  let id_giamgia = req.body.discount;
  let name = req.body.name;
  let start = req.body.start;
  let end = req.body.end;
  let percent = req.body.percent;
  console.log(
    id_giamgia + " " + name + " " + start + " " + end + " " + percent
  );
  if(+id_giamgia !== 0)
  {
    pool.query(
      voucherModel.addMore,
      [name, start, end, percent, id_giamgia],
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
  }else if (+id_giamgia === 0)
  {
    pool.query(
      voucherModel.addMoreNoGiamGia,
      [name, start, end, percent],
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
};
const getMoreVoucher = (req,res)=>{
  pool.query(voucherModel.getMore, [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
}
const getMoreVoucherAgain = (req,res)=>{
  pool.query(voucherModel.getMoreAgain, [], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(200).json({ message: "false" });
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
}
module.exports = { addVoucher, getVoucher, addMoreVoucher,getMoreVoucher ,getMoreVoucherAgain};
