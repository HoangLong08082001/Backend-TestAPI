const { addcomment,getcomment,get5star } = require("../Comment/commentService");

module.exports = {
  Addcomments: (reg, res) => {
    const data={
      binhluan:reg.body.binhluan,
      DanhGia:reg.body.DanhGia,
      MaKH:reg.body.MaKH,
      MaTour:reg.body.MaTour
    }
    
    addcomment(data,(err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      } 
      return res.status(200).json({
        data: "success",
      });
    });
  },
  Getcomments: (reg, res) => {
    const data={
      MaTour:reg.body.MaTour
    }
    
    getcomment(data,(err, results) => {
      if (err) {
       
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      } 
      return res.status(200).json({
        data: results,
      });
    });
  },
  Getcomments5star: (reg, res) => {
   
    get5star((err, results) => {
      if (err) {
       
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      } 
      return res.status(200).json({
        data: results,
      });
    });
  },
};