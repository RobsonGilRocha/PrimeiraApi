const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config')

const Carros = sequelize.define('vehicles', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  model: {
    type: DataTypes.STRING,    
    allowNull: false,
  },
  color: {
    type: DataTypes.STRING,    
    allowNull: false,
  }, pate: {
    type: DataTypes.STRING,    
    allowNull: false,
  }, value: {
    type: DataTypes.DOUBLE,    
    allowNull: false,
  },
  // brand_id: {
  //   type: DataTypes.STRING,    
  //   allowNull: false,
  // }
},
//  {
//   underscored: true,
//   timestamps: false
// }
);

module.exports = Carros