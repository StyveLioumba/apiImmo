'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advantage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advantage.hasMany(models.AdvertisementAdvantage);
      Advantage.belongsToMany(models.Advertisement,{
        through: models.AdvertisementAdvantage
      })
    }
  };
  Advantage.init({
  }, {
    sequelize,
    modelName: 'Advantage',
  });
  return Advantage;
};