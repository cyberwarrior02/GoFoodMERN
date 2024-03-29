const express = require('express');
const cors = require("cors");


const app = express()
const port = 5000
const mongoDB=require('./db');
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
"Access-Control-Allow-Headers",
"Orgin, X-Requested-With,Content-Type,Accept"

  );
  next();

})

const corsOptions = {
  origin: "http://localhost:3000",
};

const appl = express();
appl.use(cors(corsOptions));

app.use(express.json());
app.use("/api",require("./Routes/CreateUser"));
app.use("/api",require("./Routes/DisplayData"));
app.use("/api",require("./Routes/OrderData"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})