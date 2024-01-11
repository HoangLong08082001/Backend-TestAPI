import BillModel from "./Billservice";
import pool from "../../config/database";
const billadd = (req, res) => {
  let data = req.body;
    pool.query(BillModel.addphieu, [data.MaTour,data.MaKH,data.NguoiLon,data.TreEm,data.EmBe,0,data.NgayTao], (err, result) => {
      if (err) {
        console.log(err);
        return res.status(200).json({ message: "fails" });
      }
      if (result) {
        const lastPhieuId = result.insertId;
        ///id của phiếu mysql trả về
        pool.query(BillModel.addhoadon,[data.TongTien,data.HinhThucThanhToan,data.TrangThaiThanhToan,lastPhieuId],(err, result)=>{
          if (err) {
            console.log(err);
            return res.status(200).json({ message: "fails" });
          }
          if(result){
            return res.status(200).json({ data: "success",MaPhieu:lastPhieuId });
          }
        })
        
      }
    });
};
const Getphieu = (req, res) => {
  let data = req.body;
  console.log(data);
  pool.query(
    BillModel.getphieu,
    [data.MaTour, data.MaKH, data.MaPhieu],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(200).json({ message: "fails" });
      }
      if (result) {
        return res.status(200).json({ data: result });
      }
    }
  );
};

module.exports = {
  billadd,
  Getphieu,
};
