const StudentModel = require("../models/StudentModel.js");

exports.getStudent = async (req, res) => {
  try {
    const students = await StudentModel.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveStudent = async (req, res) => {
  try {
    const students = new StudentModel(req.body);
    await students.save();
    res.status(201).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  
};

exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await StudentModel.findByIdAndUpdate(id, req.body);
    res.json(student);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }

};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentModel.findByIdAndUpdate(id, req.body);
    res.json(student)
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

exports.deleteAllStudent = async (req, res) => {
  try {
    const student = await StudentModel.deleteMany({});
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
