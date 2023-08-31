const { Router } = require("express");

const {
  getStudent,
  saveStudent,
  updateStudent,
  deleteStudent,
  deleteAllStudent,
} = require("../controller/StudentController.js");

const studentRouter = Router();

studentRouter.get("/get", getStudent);
studentRouter.post("/save", saveStudent);
studentRouter.put("/update/:id", updateStudent);
studentRouter.delete("/delete/:id", deleteStudent);
studentRouter.delete("/deleteAll", deleteAllStudent);

module.exports = studentRouter;