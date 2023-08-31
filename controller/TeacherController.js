const TeacherModel = require("../models/TeacherModel.js");

exports.getTeacher = async (req, res) => {
  try {
    const teachers = await TeacherModel.find();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveTeacher = async (req, res) => {
  try {
    const teachers = new TeacherModel(req.body);
    await teachers.save();
    res.status(201).json(teachers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
};

exports.updateTeacher = async (req, res) => {
  try {
    const { id } = req.params;
    const teacher = await TeacherModel.findByIdAndUpdate(id, req.body);
    res.json(teacher);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

};

exports.deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherModel.findByIdAndUpdate(id, req.body);
    res.json(teacher)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};


exports.deleteAllTeacher = async (req, res) => {
  try {
    const teacher = await TeacherModel.deleteMany({});
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};