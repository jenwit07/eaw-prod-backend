module.exports = (sequelize, Sequelize) => {
    var productModel = sequelize.define(
      'EAW_PRODUCT',
      {
        productID: {
          type: Sequelize.INTEGER(16),
          field: 'productID',
          primaryKey: true,
          autoIncrement: true
        },
        shopID: {
            type: Sequelize.INTEGER(16),
            field: 'shopID'
        },
        categoryID: {
            type: Sequelize.INTEGER(16),
            field: 'categoryID'
        },
        safetyStock: {
            type: Sequelize.INTEGER(16),
            field: 'safety_stock'
        },
        unitPrice: {
            type: Sequelize.DECIMAL(9,2),
            field: 'unitPrice'
        },
        availableSize: {
            type: Sequelize.STRING(300),
            field: 'availableSize'
        },
        availableColors: {
            type: Sequelize.STRING(300),
            field: 'availableColors'
        },
        size: {
            type: Sequelize.STRING(50),
            field: 'size'
        },
        color: {
            type: Sequelize.STRING(50),
            field: 'color'
        },
        discountUnitPrice: {
            type: Sequelize.DECIMAL(9,2),
            field: 'discountUnitPrice'
        },
        productAvailableFlag: {
            type: Sequelize.STRING(2),
            field: 'productAvailableFlag'
        },
        discountAvailableFlag: {
            type: Sequelize.STRING(2),
            field: 'discountAvailableFlag'
        },
        picture: {
            type: Sequelize.TEXT('LONG'),
            field: 'picture'
        },
        ranking: {
            type: Sequelize.INTEGER(11),
            field: 'ranking'
        },
        note: {
            type: Sequelize.TEXT('long'),
            field: 'note'
        },
        createDate: {
            type: Sequelize.DATE,
            field: 'createDate'
        },
        updateDate: {
            type: Sequelize.DATE,
            field: 'updateDate'
        },
        createBy: {
            type: Sequelize.STRING(300),
            field: 'createBy'
        },
        updateBy: {
            type: Sequelize.STRING(300),
            field: 'updateBy'
        },
        productName: {
            type: Sequelize.STRING(45),
            field: 'product_name'
        },
        inventoryStock: {
            type: Sequelize.INTEGER(11),
            field: 'inventory_stock'
        },
        safetyStick: {
            type: Sequelize.INTEGER(11),
            field: 'safety_stock'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );

    // productModel.associate = function(models) {
    //     // Shop hasMany Coffees
    //     productModel.hasMany(models.EAW_ORDER_DETAILS);
    // };

    return productModel;
  };