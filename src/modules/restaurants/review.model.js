import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database/database.js';

const Review = sequelize.define(
  'review',
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    Comment: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    restaurantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'restaurant_id'
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
}
);

export default Review;