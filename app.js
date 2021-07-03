const express = require("express");
const app = express();

const adminRouter = require("./routes/admin");
const newsRouter = require("./routes/news");

const PORT = 3000;

global.__basedir = __dirname;

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization, x-auth-token"
  );

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, PATCH, DELETE, GET, POST");
    return res.status(200).json({});
  }
  next();
});
//checking all incaming request
app.use("/api/public", express.static("./public"));

app.use(adminRouter);
app.use(newsRouter);

app.get("/", (req, res) => {
  res.send({
    ded,
  });
  return;
});

// Handling request
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      msg: error.message,
    },
  });
});

app.listen(PORT, () => {
  console.log(`App listenig on ports ${PORT}`);
});
