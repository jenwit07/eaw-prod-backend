const env = {
    database: 'eaw_app',
    username: 'root',
    password: 'eaw12345',
    host: 'eaw_db',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  
  module.exports = env;