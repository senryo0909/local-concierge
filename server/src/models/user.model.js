module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    'users',
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
      freezeTabelName: true,
    },
  );

  return user;
};
