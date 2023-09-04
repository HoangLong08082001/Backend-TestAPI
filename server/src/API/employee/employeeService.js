import connection from "../../config/database";

class employeeModel {
  static getAll = "SELECT * FROM NhanVien";
  static removeByID = "DELETE FROM NhanVien WHERE MaNV=?";
  static addEmployee =
    "INSERT INTO NhanVien(TenNV, CMND, NgaySinh, Sdt, Email,Password, id_vitri) VALUES(?,?,?,?,?,?,?)";
}

module.exports = employeeModel;
