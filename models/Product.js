export default (sequelize, DataTypes) => {

const Product = sequelize.define(
  'Product',
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
  },
  { tableName: 'products',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
}
);

Product.associate = models => {
  Product.hasMany(models.TradeOffer, {
    foreignKey: 'offered_product_id',
    as: 'offers_made'
  });
  
  Product.hasMany(models.TradeOffer, {
    foreignKey: 'requested_product_id',
    as: 'offers_received'
  });
  
  Product.belongsTo(models.Category, {
    foreignKey: 'category_id',
    as: 'category'
  });
}
return Product;
}
