const {gettour,gettourid,Searchtour}=require('../tour/tourService');

module.exports = {
    gettourall:(reg,res)=>{
        gettour((err,results)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    success:err,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                data:results
            });
        });
    },
    gettourfollowid:(reg,res)=>{
        const id=reg.params.id;
        gettourid(id,(err,results)=>{
           
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    success:err,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                data:results
            });
        });
    },
    searchtourdata:(reg,res)=>{
        const data=(reg.body);
        console.log(data)
        Searchtour(data,(err,results)=>{
            
            if(err)
            {
                
                console.log(err);
                return res.status(500).json({
                    success:err,
                    message:"Database connection error",
                });
            }
            return res.status(200).json({
                data:results
            });
        });
    },
    
}