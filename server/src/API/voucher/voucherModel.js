class voucherModel {
  static add =
    "INSERT INTO giamgia(ten_dotgiamgia, thoigiantoi, thoigianbatdau, mucgiamgia) VALUES(?,?,?,?)";
  static addMore =
    "INSERT INTO giamgiathem(ten_dotgiamgiathem, thoigianbatdauthem, thoigianketthucthem, mucgiamgiathem, id_giamgia) VALUES(?,?,?,?,?)";
  static addMoreNoGiamGia =
    "INSERT INTO giamgiathem(ten_dotgiamgiathem, thoigianbatdauthem, thoigianketthucthem, mucgiamgiathem) VALUES(?,?,?,?)";
  static get = "SELECT * FROM giamgia ";
  static getMore =
    "SELECT * FROM giamgiathem join giamgia ON giamgiathem.id_giamgia = giamgia.id_giamgia";
  static getMoreAgain = "SELECT * FROM giamgiathem ";
  static lastest = "SELECT MAX(giamgia.thoigiantoi) as lastest FROM `giamgia`";
  
}
module.exports = voucherModel;
