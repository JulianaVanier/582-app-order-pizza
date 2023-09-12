const express = require("express");
const app = express();
const port = 3000;

// var cors = require("cors");
// app.use(cors());

const bodyParser = require("body-parser");

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://julianavanier:n5Wp1RhEFe7yNWFw@cluster0.vrbwnc0.mongodb.net/?retryWrites=true&w=majority";

// parse application/json
app.use(bodyParser.json());

var cors = require("cors");
app.use(cors());

// CHECK --------------------------------------------------------
// https://expressjs.com/en/starter/static-files.html
app.use("/static", express.static("/public"));

// https://expressjs.com/en/starter/faq.html
app.use((req, res) => {
  res.status(404).sendFile(__dirname + "/public/404.html");
});

// --------------------------------------------------------------------------------------

app.post("/placeorder", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("orderpizza");
      const order = database.collection("order");
      const result = await order.insertOne(req.body);
      res.send(result);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
});

app.get("/pizza", (req, res) => {
  const client = new MongoClient(uri);
  // res.write("AQUI");
  async function run() {
    try {
      // const database = client.db('mongodemo');
      const database = client.db("orderpizza");
      // const student = database.collection('student');
      const pizza = database.collection("pizza");

      // Query for a movie that has the title 'Back to the Future'
      // const query = { name: 'Peter' };
      //   const result = await student.insertOne(req.params);
      // const result = await student.insertOne(req.body, {$set:{"age":100}});
      // const result = await student.insertOne({name: "Test",age:"1000"});
      // const result = await student.findOne({name:"Peter"});
      const result = await pizza.find({}).toArray();
      //  const result = await pizza.findOne({title:"Pepperoni Pizza"});

      console.log("RESULT", result);
      res.json(result);
    } catch (err) {
      // res.write(err);
      console.log("ERRO AQUI", err);
      // print ("Admin user already created");
      // db.auth("admin","paddowrd");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  // res.send(req.params)
});

app.get("/previeworder/:id", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    console.log("titulooooooooooooo", typeof req.params.id);
    try {
      const database = client.db("orderpizza");
      const order = database.collection("order");
      // const result = await order.find({}).toArray();
      const result = await order.findOne({
        orderNumber: parseInt(req.params["id"]),
      });

      console.log("RESULT", result);
      res.json(result);
    } catch (err) {
      console.log("ERRO AQUI", err);
    } finally {
      await client.close();
    }
  }
  run().catch(console.dir);
  // res.send(req.params)
});

app.get("/customizepizza", (req, res) => {
  const client = new MongoClient(uri);
  async function run() {
    try {
      const database = client.db("orderpizza");
      const ingredient = database.collection("ingredient");
      const result = await ingredient.find({}).toArray();
      console.log("RESULT", result);
      res.json(result);
    } catch (err) {
      // res.write(err);
      console.log("ERRO AQUI", err);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);
  // res.send(req.params)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
