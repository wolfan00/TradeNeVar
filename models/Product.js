import sequelize from './sequelize.js';
import { DataTypes } from 'sequelize';

const Product = sequelize.define(
  'products',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    condition:{
      type: DataTypes.ENUM('New', 'Used'),
      defaultValue: 'New',
    },
    image:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    location_x_y: {
      type : DataTypes.JSON(),
      allowNull: false,
    }
    ,
    location: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  { timestamps: false }
);

export default Product;
