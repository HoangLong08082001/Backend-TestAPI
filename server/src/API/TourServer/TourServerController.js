import TourServerModal from "../TourServer/TourServerModel";


const addTour = (req, res) => {
  //   TourServerModal.addTour(data, (err, result) => {
  //     if (err) {
  //       return res.status(200).json({
  //         message: "fails",
  //       });
  //     }
  //     if (result) {
  //       return res.status(200).json({
  //         message: "success",
  //       });
  //     }
  //   });
  console.log(req.body);
};

module.exports = { addTour };
