const { gettour, gettourid, Searchtour } = require("../tour/tourService");

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
};

// import tourModal from "./tourService";
// const getAllTour = (req, res) => {
//   tourModal.getAll((err, result) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({
//         success: err,
//         message: "Database connection error",
//       });
//     }
//     console.log(result);
//     return res.status(200).json({
//       data: result,
//     });
//   });
// };
// const getTourById = (req, res) => {
//   tourModal.getById((err, result) => {
//     if (err) {
//       console.log(err);
//       return res.status(500).json({
//         success: err,
//         message: "Database connection error",
//       });
//     }
//     return res.status(200).json({
//       data: result,
//     });
//   });
// };
// const searchTour = (req, res) => {
//   const data = req.body;
//   tourModal.SearchTour(data, (err, result) => {
//     if (err) {
//       return res.status(500).json({
//         success: err,
//         message: "Database connection error",
//       });
//     }
//     return res.status(200).json({
//       data: result,
//     });
//   });
// };
