class ruleModal {
  static GetAll = "SELECT * FROM quyen";
  static GetById =
    "SELECT * FROM vitri JOIN vitriquyen ON vitri.id_vitri=vitriquyen.id_vitri JOIN quyen ON vitriquyen.id_quyen = quyen.id_quyen WHERE vitri.id_vitri=?";
  static RemoveByVitri = "DELETE FROM vitriquyen WHERE id_vitri = ?";
  static AddAgainRule = "INSERT INTO vitriquyen (id_vitri, id_quyen) VALUES ?";
  static AddNewRule = "INSERT INTO quyen(url_quyen, desccription) VALUES (?,?)";
}
module.exports = ruleModal;
