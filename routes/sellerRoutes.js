const express = require("express")
const { getSellers } = require("../controllers/SellerController")
const router = express.Router()

router.get("/sellers",getSellers)

module.exports = router