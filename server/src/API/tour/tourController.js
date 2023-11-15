const { gettour, gettourid, Searchtour ,Addtourlove,gettourlove } = require("../tour/tourService");
const pool = require("../../config/database");
module.exports = {
  gettourall: (reg, res) => {
    gettour((err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: err,
          message: "Database connection error",
        });
      }
      console.log(results);
      return res.status(200).json({
        data: results,
      });
    });
  },
  gettourfollowid: (reg, res) => {
    const id = reg.params.id;
    gettourid(id, (err, results) => {
      if (err) {
        console.log(err);
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
  searchtourdata: (reg, res) => {
    const data = reg.body;
    console.log(data);
    Searchtour(data, (err, results) => {
      if (err) {
        console.log(err);
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
  addlovetour: (reg, res) => {
    const data = reg.body;
    console.log(data)
    if(data!=null)
    {
      pool.query(
        `select * from touryeuthich where touryeuthich.MaKH=? and touryeuthich.MaTour=? `,
        [data.MaKH, data.MaTour],
        (error, results) => {
          
          if (error) {
            return res.status(500).json({
                     success: err,
                    message: "Database connection error",
                  });
          }
          else if(results.length === 0)
          {
            
            Addtourlove(data, (err, results) => {
              if (err) {
                console.log(err);
                return res.status(500).json({
                  success: err,
                  message: "Database connection error",
                });
              }
              return res.status(200).json({
                data:"success",
              });
            });
          }
          else{
            return res.status(200).json({
              data:"exist",
            });
          }
          
        }
      );
    }
   
  },
  Gettourlove: (reg, res) => {
    const data={
      MaKH:reg.body.MaKH
    }
    gettourlove(data,(err, results) => {
      if (err) {
        console.log(err);
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

