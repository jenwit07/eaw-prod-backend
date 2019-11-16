module.exports = (sequelize, Sequelize) => {
    const categoryModel = sequelize.define(
      'EAW_CATEGORY',
      {
        categoryID: {
          type: Sequelize.INTEGER,
          field: 'categoryID',
          primaryKey: true,
          autoIncrement: true
        },
        categoryName: {
          type: Sequelize.STRING(200),
          field: 'categoryName'
        },
        description: {
          type: Sequelize.TEXT,
          field: 'description'
        },
        picture: {
          type: Sequelize.TEXT('long'),
          field: 'picture'
        },
        activeFlag: {
          type: Sequelize.STRING(2),
          field: 'activeFlag'
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
          type: Sequelize.STRING(200),
          field: 'createBy'
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
    return categoryModel;
  };