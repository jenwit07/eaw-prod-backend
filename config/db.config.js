import Sequelize from 'sequelize'
import env from './env'
import AccessModel from '../app/models/AccessModel'
import CategoryModel from '../app/models/CategoryModel'
import CustomersModel from '../app/models/CustomersModel'
import MembersModel from '../app/models/MembersModel'
import OrderDetailsModel from '../app/models/OrderDetailsModel'
import OrderModel from '../app/models/OrderModel'
import PaymentModel from '../app/models/PaymentModel'
import ProductModel from '../app/models/ProductModel'
import ShippersModel from '../app/models/ShippersModel'
import ShopModel from '../app/models/ShopModel'

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
  omitNull: true,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

/* Setter Model */
db.accessModel = AccessModel(sequelize, Sequelize);
db.categoryModel = CategoryModel(sequelize, Sequelize);
db.customerModel = CustomersModel(sequelize, Sequelize);
db.membersModel = MembersModel(sequelize, Sequelize);
db.orderDetailsModel = OrderDetailsModel(sequelize, Sequelize);
db.orderModel = OrderModel(sequelize, Sequelize);
db.paymentModel = PaymentModel(sequelize, Sequelize);
db.productModel = ProductModel(sequelize, Sequelize);
db.shippersModel = ShippersModel(sequelize, Sequelize);
db.shopModel = ShopModel(sequelize, Sequelize);

/* Associate Model */
db.orderModel.hasOne(db.orderDetailsModel, { foreignKey: 'orderID'})
db.orderDetailsModel.belongsTo(db.orderModel, { foreignKey: 'orderID'})
// db.orderDetailsModel.belongsTo(db.productModel)
// db.productModel.hasMany(db.orderDetailsModel)
// db.shopModel.hasMany(db.productModel)
// db.customerModel.hasMany(db.orderModel)

module.exports = db;