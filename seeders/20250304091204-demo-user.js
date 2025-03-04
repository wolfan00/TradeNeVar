'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        first_name: 'Fatih',
        last_name: 'Kaya',
        age: 30,
        gender: 'Male',
        email: 'fatihkaya@gmail.com',
        password: '123456',
        phone: '05321234567',
        address: 'Istanbul',
      },
    ], {});

    await queryInterface.bulkInsert('orders', [
      {
        id: 1,
        user_id: 1,
        total_price: 100.00,
        status: 'Pending',
      },
    ], {});
    await queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'Electronics',
      },
    ], {});
    await queryInterface.bulkInsert('products', [
      {
        id:1,
        name: 'Laptop',
        description: 'A laptop computer.',
        price: 500.00,
        stock: 10,
        category_id: 1,
      },
    ], {});
    await queryInterface.bulkInsert('order_items', [
      {
        id: 1,
        product_id: 1,
        order_id: 1,
        quantity: 2,
        price: 50.00,
      },
    ], {});
    

    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('orders', null, {});
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('order_items', null, {});
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('products', null, {});
  }
};