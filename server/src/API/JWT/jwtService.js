class jwtModal {
  static getPosionRole =
    "SELECT * FROM vitriquyen LEFT JOIN vitri ON vitriquyen.id_vitri=vitri.id_vitri LEFT JOIN quyen ON quyen.id_quyen = vitriquyen.id_quyen RIGHT JOIN nhanvien ON vitri.id_vitri = nhanvien.id_vitri WHERE vitri.id_vitri = nhanvien.id_vitri AND nhanvien.Email=?";
}
module.exports = jwtModal;
