'use strict';

/**
 * Producttoken.js controller
 *
 * @description: A set of functions called "actions" for managing `Producttoken`.
 */

module.exports = {

  /**
   * Retrieve producttoken records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.producttoken.search(ctx.query);
    } else {
      return strapi.services.producttoken.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a producttoken record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.producttoken.fetch(ctx.params);
  },

  /**
   * Count producttoken records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.producttoken.count(ctx.query);
  },

  /**
   * Create a/an producttoken record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.producttoken.add(ctx.request.body);
  },

  /**
   * Update a/an producttoken record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.producttoken.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an producttoken record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.producttoken.remove(ctx.params);
  }
};
