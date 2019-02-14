'use strict';

/**
 * Customoffers.js controller
 *
 * @description: A set of functions called "actions" for managing `Customoffers`.
 */

module.exports = {

  /**
   * Retrieve customoffers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.customoffers.search(ctx.query);
    } else {
      return strapi.services.customoffers.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a customoffers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.customoffers.fetch(ctx.params);
  },

  /**
   * Count customoffers records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.customoffers.count(ctx.query);
  },

  /**
   * Create a/an customoffers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.customoffers.add(ctx.request.body);
  },

  /**
   * Update a/an customoffers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.customoffers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an customoffers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.customoffers.remove(ctx.params);
  }
};
