module.exports = (sequelize, Sequelize) => {
    const customersModel = sequelize.define(
      'EAW_CUSTOMERS',
      {
        customerID: {
          type: Sequelize.INTEGER(16),
          field: 'customerID',
          primaryKey: true,
          autoIncrement: true
        },
        firstName: {
          type: Sequelize.STRING(100),
          field: 'firstName'
        },
        lastName: {
          type: Sequelize.STRING(100),
          field: 'lastName'
        },
        address1: {
          type: Sequelize.STRING(500),
          field: 'address1'
        },
        address2: {
          type: Sequelize.STRING(500),
          field: 'address2'
        },
        city: {
          type: Sequelize.STRING(200),
          field: 'city'
        },
        state: {
          type: Sequelize.STRING(200),
          field: 'state'
        },
        postalCode: {
          type: Sequelize.STRING(8),
          field: 'postalCode'
        },
        country: {
          type: Sequelize.STRING(200),
          field: 'country'
        },
        phone: {
          type: Sequelize.STRING(11),
          field: 'phone'
        },
        email: {
          type: Sequelize.STRING(200),
          field: 'email'
        },
        creditCard: {
          type: Sequelize.STRING(100),
          field: 'creditCard'
        },
        creditCardTypeID: {
          type: Sequelize.STRING(100),
          field: 'creditCardTypeID'
        },
        cardExpYr: {
          type: Sequelize.STRING(100),
          field: 'cardExpYr'
        },
        billingAddress: {
          type: Sequelize.STRING(500),
          field: 'billingAddress'
        },
        billingCity: {
          type: Sequelize.STRING(100),
          field: 'billingCity'
        },
        billingRegion: {
          type: Sequelize.STRING(100),
          field: 'billingRegion'
        },
        billingPostalCode: {
          type: Sequelize.STRING(100),
          field: 'billingPostalCode'
        },
        billingCountry: {
          type: Sequelize.STRING(100),
          field: 'billingCountry'
        },
        shipAddress: {
          type: Sequelize.STRING(500),
          field: 'shipAddress'
        },
        shipCity: {
          type: Sequelize.STRING(100),
          field: 'shipCity'
        },
        shipRegion: {
          type: Sequelize.STRING(100),
          field: 'shipRegion'
        },
        shipPostalCode: {
          type: Sequelize.STRING(8),
          field: 'shipPostalCode'
        },
        shipCountry: {
          type: Sequelize.STRING(100),
          field: 'shipCountry'
        },
        dateEntered: {
          type: Sequelize.DATE,
          field: 'dateEntered'
        },
        updateDate: {
          type: Sequelize.DATE,
          field: 'updateDate'
        },
        updateBy: {
          type: Sequelize.STRING(100),
          field: 'updateBy'
        }
      },
      {
        timestamps: false,
        freezeTableName: true
      }
    );
    return customersModel;
  };