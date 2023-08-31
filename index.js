const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const studentRoutes = require("./routes/StudentRoutes.js");
const teacherRoutes = require("./routes/TeacherRoutes.js");

const app = express();
const PORT = process.env.PORT | 3001;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/student", studentRoutes);
app.use("/teacher", teacherRoutes);

app.listen(PORT, ()=> console.log(`Listening at http://localhost:${PORT}`));