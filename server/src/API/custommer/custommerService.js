class custommerModel {
  static getAll = "SELECT * FROM khachhang";
  static getDK = "SELECT * FROM khachhang where khachhang.MaKH=?";
  static register =
    "INSERT INTO khachhang(username, password) VALUES(?,?)";
    static registergoogle =
    "INSERT INTO khachhang(username) VALUES(?)";
  static RemoveById = "DELETE FROM khachhang WHERE MaKH = ?";
  static count = "SELECT COUNT(*) as count FROM KhachHang";
  static FindKhachHang = "SELECT * FROM Khachhang where khachhang.username = ?";
}
module.exports = custommerModel;
