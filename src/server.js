const express = require("express");
// the above is same as import just an  older version

const app = express();

// app.get("/health", (req, res) => {
//   res.send("healthy");
// });

//static.exaple will be a folder
// app.use("/example", express.static("example"));
app.use("/anything", express.static("dbz"));

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
