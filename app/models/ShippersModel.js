module.exports = (sequelize, Sequelize) => {
    const shippersModel = sequelize.define(
      'EAW_SHIPPERS',
      {
        shipperID: {
          type: Sequelize.INTEGER(16),
          field: 'shipperID',
          primaryKey: true,
          autoIncrement: true
        },
        companyName: {
            type: Sequelize.STRING(500),
            field: 'companyName'
        },
        phone: {
            type: Sequelize.STRING(11),
            field: 'phone'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return shippersModel;
  };