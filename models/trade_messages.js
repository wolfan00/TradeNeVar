import sequelize from './sequelize.js';
import { DataTypes } from 'sequelize';

const TradeMessage = sequelize.define('trade_messages', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trade_offer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    sent_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, { timestamps: false });
  
  export default TradeMessage;