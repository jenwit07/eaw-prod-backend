module.exports = (sequelize, Sequelize) => {
    const accessModel = sequelize.define(
      'EAW_ACCESS',
      {
        accessID: {
          type: Sequelize.INTEGER,
          field: 'accessID',
          primaryKey: true,
          autoIncrement: true
        },
        userID: {
          type: Sequelize.INTEGER,
          field: 'userID'
        },
        token: {
          type: Sequelize.TEXT,
          field: 'token'
        },
        refreshToken: {
          type: Sequelize.TEXT,
          field: 'refreshToken'
        },
        createDate: {
          type: Sequelize.DATE,
          field: 'createDate'
        },
        updateDate: {
          type: Sequelize.DATE,
          field: 'updateDate'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return accessModel;
  };