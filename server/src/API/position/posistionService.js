import connection from "../../config/database";

class positionModel {
  static getAll = "SELECT * FROM Vitri";
  static addPostion = "INSERT INTO Vitri(TenViTri, description) VALUES(?,?) ";
  static removeById = "DELETE FROM Vitri WHERE id_vitri	=?";
}
module.exports = positionModel;
