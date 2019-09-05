'use strict';

const _ = require('lodash');

/**
 * Lifecycle callbacks for the `Mpnoffer` model.
 */

module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  // afterSave: async (model, result) => {},

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  beforeUpdate: async (model) => {
    const documentBefore = await model.model.findOne(model._conditions);
    const objectBefore = JSON.parse(JSON.stringify(documentBefore));
    const update = model._update;

    const updates = _.omitBy(update, (value, key) =>
      _.isEqual(value, objectBefore[key]),
    );
    const type = 'manual';
    const uri = objectBefore.uri;
    for (let [field, value] of Object.entries(updates)) {
      strapi.services.mpnoffermeta.create({
        field,
        value,
        type,
        uri,
      });
    }
  },

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
