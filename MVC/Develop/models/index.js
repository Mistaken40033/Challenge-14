const sequelize = require('../config/config.js');
const { Sequelize, DataTypes } = require('sequelize');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Define models here
db.User = require('./User')(sequelize, DataTypes);
db.Post = require('./Post')(sequelize, DataTypes);

// Define associations here
db.User.hasMany(db.Post, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});
db.Post.belongsTo(db.User, {
  foreignKey: 'userId'
});

module.exports = db;
