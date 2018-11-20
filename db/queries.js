var knex = require('./knex.js');

function Contact() {
  return knex('salesforce.contact');
}

// *** queries *** //

function getAll() {
    return Contact().select();
  }
  
  function getSingle(contactId) {
    return Contact().where('id', parseInt(contactId)).first();
  }
  
  function add(order) {
    return Contact().insert(order, 'id');
  }
  
  function update(orderId, updates) {
    return Contact().where('id', parseInt(orderId)).update(updates);
  }
  
  function deleteItem(orderId) {
    return Contact().where('id', parseInt(orderId)).del();
  }
  
  
  module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    add: add,
    update: update,
    deleteItem: deleteItem
  };