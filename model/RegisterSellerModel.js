const { default: mongoose } = require("mongoose");

const registerSellerSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },

});

const registerSeller = mongoose.model("registerSeller", registerSellerSchema);
module.exports = registerSeller;
