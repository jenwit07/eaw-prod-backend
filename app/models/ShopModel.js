module.exports = (sequelize, Sequelize) => {
    const shopModel = sequelize.define(
      'EAW_SHOP',
      {
        shopID: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER(16),
          field: 'shopID',
          primaryKey: true
        },
        contactFName: {
            type: Sequelize.STRING(200),
            field: 'contactFName'
        },
        contactLName: {
            type: Sequelize.STRING(200),
            field: 'contactLName'
        },
        Address: {
            type: Sequelize.STRING(700),
            field: 'Address'
        },
        City: {
            type: Sequelize.STRING(200),
            field: 'City'
        },
        State: {
            type: Sequelize.STRING(200),
            field: 'State'
        },
        PostalCode: {
            type: Sequelize.INTEGER(15),
            field: 'PostalCode'
        },
        Email: {
            type: Sequelize.STRING(200),
            field: 'Email'
        },
        Url: {
            type: Sequelize.TEXT('long'),
            field: 'Url'
        },
        PaymentMethod: {
            type: Sequelize.STRING(200),
            field: 'PaymentMethod'
        },
        companyName: {
            type: Sequelize.STRING(200),
            field: 'companyName'
        },
        TypeGoods: {
            type: Sequelize.STRING(500),
            field: 'TypeGoods'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return shopModel;
  };