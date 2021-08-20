'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Groups', [
        {
        type: 'Science Fiction',
        image: 'https://cdn.britannica.com/09/92009-050-122EC720/Enterprise-from-Star-Trek-III-The-Search.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Programming',
        image: 'https://images-na.ssl-images-amazon.com/images/I/519YsN69yEL._SX379_BO1,204,203,200_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Non-fiction',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41DgeZxPqbS._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Investing',
        image: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Self help',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=862&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Groups', null, {});
  }
};
