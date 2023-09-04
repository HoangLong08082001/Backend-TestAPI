const {gettourall,gettourfollowid,searchtourdata}=require('./tourController')

const router = require('express').Router();
router.get('/alltour',gettourall)
router.get('/alltour/:id',gettourfollowid)
router.post('/search/',searchtourdata)

module.exports=router; 