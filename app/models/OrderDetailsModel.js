import moment from 'moment'

module.exports = (sequelize, Sequelize) => {
    var orderDetailsModel = sequelize.define(
      'EAW_ORDER_DETAILS',
      {
        orderDetailID: {
          type: Sequelize.INTEGER(16),
          field: 'orderDetailID',
          primaryKey: true,
          autoIncrement: true
        },
        orderID: {
            type: Sequelize.INTEGER(16),
            field: 'orderID'
        },
        productID: {
            type: Sequelize.INTEGER(16),
            field: 'productID'
        },
        shopID: {
            type: Sequelize.INTEGER(16),
            field: 'shopID'
        },
        price: {
            type: Sequelize.DECIMAL(9,2),
            field: 'price'
        },
        quantity: {
            type: Sequelize.INTEGER(16),
            field: 'quantity'
        },
        discountFlag: {
            type: Sequelize.STRING(2),
            field: 'discountFlag'
        },
        discountPrice: {
            type: Sequelize.DECIMAL(9,2),
            field: 'discountPrice'
        },
        totalPaid: {
            type: Sequelize.DECIMAL(9,2),
            field: 'totalPaid'
        },
        size: {
            type: Sequelize.STRING(200),
            field: 'size'
        },
        color: {
            type: Sequelize.STRING(400),
            field: 'color'
        },
        shipFlag: {
            type: Sequelize.STRING(2),
            field: 'shipFlag'
        },
        shipDate: {
            type: Sequelize.DATE,
            field: 'shipDate'
        },
        billDate: {
            type: Sequelize.DATE,
            field: 'billDate'
        },
        createDate: {
            type: Sequelize.DATE,
            field: 'createDate',
            get() {
                return moment(this.getDataValue('createDate')).format('DD/MM/YYYY h:mm:ss');
            }
        },
        createBy: {
            type: Sequelize.STRING(200),
            field: 'createBy'
        },
        updateDate: {
            type: Sequelize.DATE,
            field: 'updateDate',
            get() {
                return moment(this.getDataValue('updateDate')).format('DD/MM/YYYY h:mm:ss');
            }
        },
        updateBy: {
            type: Sequelize.STRING(200),
            field: 'updateBy'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );

    // orderDetailsModel.associate = function(models) {

    //     console.log("AAAAAAAAAAAAAASDASD" + models)

    //     orderDetailsModel.belongsTo(models.orderModel,{foreignKey: 'FK_orderID_order_details'})
    //     orderDetailsModel.belongsTo(models.productModel,{foreignKey: 'FK_productID_order_details'})
    // }


    return orderDetailsModel;
  };