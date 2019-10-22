module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    id: {
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      type: DataTypes.UUID,
      validate: {
        isUUID: { args: 4, msg: 'ID is not a valid UUID, please try again.' },
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: { args: [1, 500], msg: 'Validation Fail: Name' },
      },
    },
    grade: {
      type: DataTypes.INTEGER,
      validate: {
        isNumeric: { args: true, msg: 'Validation Fail: Grade.' },
      },
    },    
  }, {});

  Students.associate = (models) => {
  };

  return Students;
};
