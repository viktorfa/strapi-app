'use strict';

/**
 * Groceryoffer.js controller
 *
 * @description: A set of functions called "actions" for managing `Groceryoffer`.
 */

module.exports = {

  /**
   * Retrieve groceryoffer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.groceryoffer.search(ctx.query);
    } else {
      return strapi.services.groceryoffer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a groceryoffer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.groceryoffer.fetch(ctx.params);
  },

  /**
   * Count groceryoffer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.groceryoffer.count(ctx.query);
  },

  /**
   * Create a/an groceryoffer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.groceryoffer.add(ctx.request.body);
  },

  /**
   * Update a/an groceryoffer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.groceryoffer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an groceryoffer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.groceryoffer.remove(ctx.params);
  }
};
