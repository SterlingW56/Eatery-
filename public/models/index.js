const db = require('../db');

const UsersModel = require('./users');
const FoodgroupsModel = require('./foodgroups');
const RecipesModel = require('./recipes');

// Associations below here

UsersModel.hasMany(FoodgroupsModel);
UsersModel.hasMany(RecipesModel);

RecipesModel.belongsTo(UsersModel);
FoodgroupsModel.hasMany(RecipesModel);

RecipesModel.belongsTo(FoodgroupsModel);

module.exports = {
    UsersModel,
    FoodgroupsModel,
    RecipesModel
};