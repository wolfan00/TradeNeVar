import sequelize from './sequelize.js';
import { DataTypes } from 'sequelize';

const TradeOffer = sequelize.define(
  'trade_offers',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    offered_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    requested_product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected'),
      defaultValue: 'Pending',
    },
    message: {
      type: DataTypes.STRING(500), // İlk mesaj isteğe bağlı
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    offerer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);

export default TradeOffer;
