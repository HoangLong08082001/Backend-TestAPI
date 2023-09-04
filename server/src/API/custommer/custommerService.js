class custommerModel {
  static getAll = "SELECT * FROM KhachHang";
  static addCustommer =
    "INSERT INTO KhachHang(TenKH, CMND, DiaChi, Ngaysinh, Sdt, Username, Password) VALUES(?,?,?,?,?,?,?)";
  static RemoveById = "DELETE FROM KhachHang WHERE MaKH = ?";
}
module.exports = custommerModel;
