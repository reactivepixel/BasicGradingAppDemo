const { Students } = require('../models');

// get all the student with a status of public
exports.getAll = async (req, res) => {
  const students = await Students.findAll();
  res.json(students);
};

// find one student by id
exports.getOneById = async (req, res) => {
  const { id } = req.params;
  const student = await Students.findByPk(id, {});
  if (!student) {
    // return a 404 (not found) code
    res.sendStatus(404);
    return;
  }
  res.json(student);
};

// add a new student
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Students.create(req.body);
    res.json(newStudent);
  } catch (e) {
    const errors = e.errors.map(err => err.message);
    res.status(400).json({ errors });
  }
};

// update an existing student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const [, [updatedStudent]] = await Students.update(req.body, {
      where: { id },
      // return row
      returning: true,
    });
    res.json(updatedStudent);
  } catch (e) {
    const errors = e.errors.map(err => err.message);
    res.status(400).json({ errors });
  }
};

// delete a student
exports.removeStudent = async (req, res) => {
  const { id } = req.params;
  await Students.destroy({ where: { id } });
  // send a good status code
  res.sendStatus(200);
};
