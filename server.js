const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// routes
// app.use(require("./routes/api.js"));
const html = require('./routes/html.js');
const api = require('./routes/api.js');

app.use('/', html);
app.use('/api/workouts', api);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
