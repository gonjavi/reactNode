import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config';
import moongose from 'mongoose';
import bodyparser from 'body-parser';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
moongose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).catch(error => console.log(error.reason));

const app = express();
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
/* app.get("/api/products/:id", (req, res) => {   
  const productId = req.params.id;
  const product = data.products.find(x => x.id === productId);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ msg: "Product Not Found." });
  }
});

app.get("/api/products", (req, res) => {   
  res.send(data.products);
}); */

app.listen(5000, () => { console.log("server started at http:://localhost:5000") });