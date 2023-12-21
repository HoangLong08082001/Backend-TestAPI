class billManaModel {
    static getAll = "SELECT * FROM hoadon";
    static byid = "SELECT * FROM `hoadon` JOIN phieudattour on hoadon.MaPhieu =phieudattour.MaPhieu join tour on phieudattour.MaTour = tour.MaTour join khachhang on phieudattour.MaKH = khachhang.MaKH WHERE hoadon.MaHoaDon=?"
}
module.exports = billManaModel;