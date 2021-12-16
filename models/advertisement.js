'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advertisement.belongsTo(models.Type);

      Advertisement.belongsTo(models.User);

      Advertisement.hasMany(models.AdvertisementTag);
      Advertisement.belongsToMany(models.Tag,{
        through: models.AdvertisementTag
      });

      Advertisement.hasMany(models.AdvertisementAdvantage);
      Advertisement.belongsToMany(models.Advantage,{
        through: models.AdvertisementAdvantage
      });
    }
  };
  Advertisement.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sector: DataTypes.STRING,
    room: DataTypes.INTEGER,
    description: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};