import connection from "../../config/database";

class employeeModel {
  static getAll =
    "SELECT * FROM nhanvien left join vitri on nhanvien.id_vitri = vitri.id_vitri";
  static deleteById = "DELETE FROM nhanvien WHERE MaNV=?";
  static addEmployee =
    "INSERT INTO nhanvien(TenNV, CMND, Ngaysinh, Sdt, Email, password, id_vitri) VALUES (?,?,?,?,?,?,?)";
  static byId =
    "SELECT * FROM nhanvien left join vitri on nhanvien.id_vitri = vitri.id_vitri WHERE MaNV=?";
  static updateById =
    "UPDATE nhanvien SET TenNV=?, CMND=?, Sdt=?, id_vitri=? WHERE MaNV=?";
  static count = "SELECT COUNT(*) AS count FROM nhanvien";
}

module.exports = employeeModel;
