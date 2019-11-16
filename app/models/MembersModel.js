module.exports = (sequelize, Sequelize) => {
    const membersModel = sequelize.define(
      'EAW_MEMBERS',
      {
        userID: {
          type: Sequelize.INTEGER(16),
          field: 'userID',
          primaryKey: true,
          autoIncrement: true
        },
        shopID: {
            type: Sequelize.INTEGER(16),
            field: 'shopID'
        },
        username: {
            type: Sequelize.STRING(50),
            field: 'username'           
        },
        password: {
            type: Sequelize.STRING(50),
            field: 'password'         
        },
        salt: {
            type: Sequelize.TEXT,
            field: 'salt'  
        },
        userType: {
            type: Sequelize.STRING(30),
            field: 'userType'
        },
        STATUS: {
            type: Sequelize.INTEGER(2),
            field: 'STATUS'
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
    return membersModel;
  };