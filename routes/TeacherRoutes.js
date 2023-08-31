const { Router } = require("express");

const {
  getTeacher,
  saveTeacher,
  updateTeacher,
  deleteTeacher,
  deleteAllTeacher
} = require("../controller/TeacherController.js");

const teacherRouter = Router();

teacherRouter.get("/get", getTeacher);
teacherRouter.post("/save", saveTeacher);
teacherRouter.put("/update/:id", updateTeacher);
teacherRouter.delete("/delete/:id", deleteTeacher);
teacherRouter.delete("/deleteAll", deleteAllTeacher);

module.exports = teacherRouter;