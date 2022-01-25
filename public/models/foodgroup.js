const { DataTypes } = require('sequelize');
     const db = require('../db');
     
     const Foodgroups = db.define('foodgroups', {
      name: {
       type: DataTypes.STRING,
       allowNull: false
      },
      Recipes: {
      type: DataTypes.STRING,
      allowNull: false
     },
     notes: {
      type: DataTypes.STRING,
      allowNull: false
     },
     userId: {
          type: DataTypes.INTEGER
         },
    });
    
    module.exports = Foodgroups;