class custommerModel {
  static getAll = "SELECT * FROM khachhang";
  static register =
    "INSERT INTO khachhang(TenKH, CMND, DiaChi, Sdt, username, password) VALUES(?,?,?,?,?,?)";
  static RemoveById = "DELETE FROM khachhang WHERE MaKH = ?";
  static count = "SELECT COUNT(*) as count FROM KhachHang";
}
module.exports = custommerModel;
