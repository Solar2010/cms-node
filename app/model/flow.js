import { Sequelize, Model } from 'sequelize';
import sequelize from '../lib/db';
class Flow extends Model {

}

Flow.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    index: {
      type: Sequelize.INTEGER
    },
    art_id: {
      type: Sequelize.INTEGER
    },
    type: {
      type: Sequelize.INTEGER
    },
    status: {
      type: Sequelize.INTEGER
    }
  }, {
    tableName: 'flow',
    modelName: 'flow',
    paranoid: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    sequelize
  }
);

export { Flow as FlowModel };