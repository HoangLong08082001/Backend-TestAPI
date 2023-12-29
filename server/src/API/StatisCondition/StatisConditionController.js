const pool = require("../../config/database");
const conditionSta = require("./StatisConditionModel");

const getDoanhThuMonth = (req, res) => {
  pool.query(conditionSta.getDoanhThuByThang, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const getDoanhThuQuarter = (req, res) => {
  pool.query(conditionSta.getDoanThuByQuarter, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const getSoLuongMonth = (req, res) => {
  pool.query(conditionSta.getSoLuongMonth, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const getSoLuongQuarter = (req, res) => {
  pool.query(conditionSta.getSoLuongQuarter, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const getSoLuongChart = (req, res) => {
  pool.query(conditionSta.soluongChartQuarter, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const getKhachMonth = (req, res) => {
  pool.query(conditionSta.soluongkhachMonth, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
const getKhachQuarter = (req, res) => {
  pool.query(conditionSta.soluongkhachQuarter, [], (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      return res.status(200).json({ message: "success", data: result });
    }
  });
};
module.exports = {
  getDoanhThuMonth,
  getDoanhThuQuarter,
  getSoLuongMonth,
  getSoLuongQuarter,
  getSoLuongChart,
  getKhachMonth,
  getKhachQuarter,
};
