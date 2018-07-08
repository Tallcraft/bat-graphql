export default (sequelize, DataTypes) => {

  const tableOptions = {
    tableName: 'BAT_players',
    timestamps: false,
  };

  const attributes = {
    uuid: {
      type: DataTypes.STRING,
      autoIncrement: false,
      primaryKey: true,
      field: 'UUID',
    },
    name: {
      type: DataTypes.STRING,
      field: 'BAT_player',
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastIP: {
      type: DataTypes.STRING,
      field: 'lastip',
      allowNull: false,
      validate: {
        isIP: true,
      },
    },
    firstLogin: {
      type: DataTypes.DATE,
      field: 'firstlogin',
      validate: {
        isDate: true,
      },
    },
    lastLogin: {
      type: DataTypes.DATE,
      field: 'lastLogin',
      validate: {
        isDate: true,
      },
    },
  };

  const player = sequelize.define('player', attributes, tableOptions);

  player.associate = (models) => {
    models.player.hasMany(models.ban, {foreignKey: 'UUID', sourceKey: 'UUID'});
  };

  return player;
};
