const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const sellerRoutes = require("./routes/sellerRoutes")

const { sellerRegister, login } = require("./controllers/Auth");

const app = express();
 
dotenv.config();

app.use(cors());
app.use(express.json());

app.post("/seller/register", sellerRegister);
app.post("/seller/login", login)
app.use("/",sellerRoutes );

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Server Started"));
  })
  .catch((err) => {
    console.log(err, "error :Data base not connected");
  });
