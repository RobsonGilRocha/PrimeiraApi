const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Brand = sequelize.define('brands', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  country: {
    type: DataTypes.STRING,    
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,    
    allowNull: false,
  }
},
 {
//   underscored: true,
//   timestamps: false
}
);

module.exports = Brand