const router = require('express').Router();

const studentCtrl = require('../controllers/students');

// GET /students
router.get('/', studentCtrl.getAll);

// GET /students/:id
router.get('/:id', studentCtrl.getOneById);

// POST /students
router.post('/', studentCtrl.createStudent);

// PUT /students/:id
router.put('/:id', studentCtrl.updateStudent);

// DELETE /students/:id
router.delete('/:id', studentCtrl.removeStudent);

module.exports = router;
