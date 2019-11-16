module.exports = (sequelize, Sequelize) => {
    const paymentModel = sequelize.define(
      'EAW_PAYMENT',
      {
        paymentID: {
          type: Sequelize.INTEGER(16),
          field: 'paymentID',
          primaryKey: true,
          autoIncrement: true
        },
        paymentType: {
            type: Sequelize.STRING(100),
            field: 'paymentType'
        },
        allowedFlag: {
            type: Sequelize.STRING(2),
            field: 'allowedFlag'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return paymentModel;
  };