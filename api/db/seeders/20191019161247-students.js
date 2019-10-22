const faker = require('faker');

const genFakeStudent = (numberOfStudents) => {
  const students = [];
  for(let i = 0; i < numberOfStudents; i++){
    students.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      grade: faker.random.number({min:0, max:100}),
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
  return students;
}


module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Students', genFakeStudent(100), {}),


  down: queryInterface => queryInterface.bulkDelete('Students', null, {}),
};
