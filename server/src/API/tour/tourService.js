const pool=require('../../Config/database')

module.exports = {
    gettour:(callBack)=>{
        pool.query(
         `select * from tour`,
         [],
         (error,results)=>
         {
             if(error){
                 return callBack(error);
             }
             return callBack(null,results);
         }
        );
    },
    gettourid:(id,callBack)=>{
        pool.query(
         `select * from tour where tour.MaTour=?`,
         [id],
         (error,results)=>
         {
             if(error){
                 return callBack(error);
             }
             return callBack(null,results);
         }
        );
    },
    Searchtour:(data,callBack)=>{
        pool.query(
            `select * from tour where tour.DiaDiemDen=? and tour.NgayDi=? and tour.NgayVe=?`,
         [data.DiaDiemDen,data.NgayDi,data.NgayVe],
         (error,results)=>
         {
             if(error){
                 return callBack(error);
             }
             return callBack(null,results);
         }
        );
    }
}