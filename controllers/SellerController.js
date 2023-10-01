const registerSeller = require("../model/RegisterSellerModel")




const getSellers = async(req,res)=>{

try{
const sellers = await registerSeller.find()
return res.status(200).json(sellers);
}catch(err){
    return res.status(500).json({ error: err.message });
}

}

module.exports = {
    getSellers
}