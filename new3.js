const express = require("express");
const app = express();
app.use(express.json());
// app.post("/add", function (req, res) {
//   const one = parseInt(req.query.one);
//   const two = parseInt(req.query.two);

//   //   res.send(parseInt(one) + parseInt(two));

//   //   res.json({ res: one + two });
//   res.send(toString(one + two));
// });

app.post("/add", function (req, res) {
    const one = parseInt(req.query.one);
    const two = parseInt(req.query.two);
  
    res.send(String(one + two));
  });
app.listen(3000);
