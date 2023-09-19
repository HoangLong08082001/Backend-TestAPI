class custommerModel {
  static getAll = "SELECT * FROM KhachHang";
  static register =
    "INSERT INTO KhachHang(TenKH, CMND, DiaChi, Sdt, username, password) VALUES(?,?,?,?,?,?)";
  static RemoveById = "DELETE FROM KhachHang WHERE MaKH = ?";
  static count = "SELECT COUNT(*) as count FROM KhachHang";
}
module.exports = custommerModel;
