'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Niveis extends Model {

    static associate(models) {
      Niveis.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      })
    }
  };
  Niveis.init({
    desc_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Niveis',
    paranoid: true
  });
  return Niveis;
};