import moment from 'moment'

module.exports = (sequelize, Sequelize) => {
    var orderModel = sequelize.define(
      'EAW_ORDERS',
      {
        orderID: {
          type: Sequelize.INTEGER(16),
          field: 'orderID',
          primaryKey: true,
          autoIncrement: true
        },
        customerID: {
            type: Sequelize.INTEGER(16),
            field: 'customerID'
        },
        paymentID: {
            type: Sequelize.INTEGER(16),
            field: 'paymentID'
        },
        shipperID: {
            type: Sequelize.INTEGER(16),
            field: 'shipperID'
        },
        orderDate: {
            type: Sequelize.DATE,
            field: 'orderDate',
            get() {
                return moment(this.getDataValue('orderDate')).format('DD/MM/YYYY h:mm:ss');
            }
        },
        shipDate: {
            type: Sequelize.DATE,
            field: 'shipDate'
        },
        salesTax: {
            type: Sequelize.INTEGER(16),
            field: 'salesTax'
        },
        transactStatus: {
            type: Sequelize.STRING(2),
            field: 'transactStatus'
        },
        errLog: {
            type: Sequelize.TEXT('long'),
            field: 'errLog'
        },
        errMsg: {
            type: Sequelize.TEXT('long'),
            field: 'errMsg'
        },
        deleteFlag: {
            type: Sequelize.STRING(2),
            field: 'deleteFlag'
        },
        paidFlag: {
            type: Sequelize.STRING(2),
            field: 'paidFlag'
        },
        paymentDate: {
            type: Sequelize.DATE,
            field: 'paymentDate'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );

    // orderModel.associate = function(models) {
    //     orderModel.hasMany(models.orderDetailsModel);
    // };

    return orderModel;
  };