const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const featureRoute = require("./routes/feature.route");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "pug");

app.get("/", (req, res) => res.render("index"));

app.use("/features", featureRoute);

app.listen(port, () => {
  console.log(`Đã kết nối tới port: ${port}`);
});
