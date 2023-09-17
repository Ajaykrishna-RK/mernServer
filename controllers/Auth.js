const registerSeller = require("../model/RegisterSellerModel");
const bcrypt = require("bcrypt")
const jwt = require ("jsonwebtoken")

const sellerRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

const salt = await bcrypt.genSalt()
const hashPassword = await bcrypt.hash(password,salt)

    const newSeller = new registerSeller({
      name,
      email,
      password:hashPassword,
    });

    const saveSeller = await newSeller.save();
    return res.status(200).json(saveSeller);

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};


const login = async (req,res)=>{
  try{
const {email,password} = req.body

const user = await registerSeller.findOne({email:email})
if(!user) return res.status(400).json({ message: "User Does Not Exist" });

const passwrodMatch  =  await bcrypt.compare(password,user.password)
if(!passwrodMatch) return res.status(400).json({ message: "invalid crendentials" });

const token = jwt.sign({id:user._id},process.env.JWT_SECRET)

res.status(200).json({token,user})

  }catch(err){
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {
  sellerRegister,
  login
};
