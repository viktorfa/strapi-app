'use strict';

/**
 * Selectedoffers.js controller
 *
 * @description: A set of functions called "actions" for managing `Selectedoffers`.
 */

module.exports = {

  /**
   * Retrieve selectedoffers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.selectedoffers.search(ctx.query);
    } else {
      return strapi.services.selectedoffers.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a selectedoffers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.selectedoffers.fetch(ctx.params);
  },

  /**
   * Count selectedoffers records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.selectedoffers.count(ctx.query);
  },

  /**
   * Create a/an selectedoffers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.selectedoffers.add(ctx.request.body);
  },

  /**
   * Update a/an selectedoffers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.selectedoffers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an selectedoffers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.selectedoffers.remove(ctx.params);
  }
};
