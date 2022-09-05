const express = require("express");
const dotenv = require("dotenv");
const results=require("./results")
const router =require("./routes/books")
dotenv.config();
const app = express();

app.use(logger);

//middleware
app.use(express.json())

//route

app.get("/", (req, res) => {
  res.send("<h1>Welcome to our library stockpiles</h1>");
});

// get all results
app.get("/results", (req, res) => {
    res.json(books)
})

// post results
app.post("/results/add", (req, res) => {
  const student = {
    name: req.body.name,
    class: req.body.class,
    grade: req.body.grade,
  };
  results.push(student);
  res.json(student)


})



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is runing on ${PORT}`));