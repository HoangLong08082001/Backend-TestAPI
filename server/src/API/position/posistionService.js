import connection from "../../config/database";

class positionModel {
  static getAll = "SELECT * FROM vitri";
  static addPostion = "INSERT INTO Vitri(TenViTri) VALUES(?) ";
  static removeById = "DELETE FROM Vitri WHERE id_vitri	=?";
  static GetById = "SELECT * FROM vitri JOIN vitriquyen ON vitri.id_vitri=vitriquyen.id_vitri JOIN quyen ON vitriquyen.id_quyen = quyen.id_quyen WHERE vitri.id_vitri=?"
}
module.exports = positionModel;
