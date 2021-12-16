'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdvertisementAdvantage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdvertisementAdvantage.belongsTo(models.Advertisement);
      AdvertisementAdvantage.belongsTo(models.Advantage);
    }
  };
  AdvertisementAdvantage.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AdvertisementAdvantage',
  });
  return AdvertisementAdvantage;
};