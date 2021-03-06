import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db';
class Music extends Model {

}

Music.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    image: {
      type: Sequelize.STRING(64)
    },
    content: {
      type: Sequelize.STRING(300),
      allowNull: true
    },
    pubDate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    fav_nums: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    title: {
      type: Sequelize.STRING(50)
    },
    type: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  }, {
    tableName: 'music',
    modelName: 'music',
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    sequelize
  }
);

export { Music as MusicModel };