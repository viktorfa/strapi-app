'use strict';

/**
 * Productlike.js controller
 *
 * @description: A set of functions called "actions" for managing `Productlike`.
 */

module.exports = {

  /**
   * Retrieve productlike records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.productlike.search(ctx.query);
    } else {
      return strapi.services.productlike.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a productlike record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.productlike.fetch(ctx.params);
  },

  /**
   * Count productlike records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.productlike.count(ctx.query);
  },

  /**
   * Create a/an productlike record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.productlike.add(ctx.request.body);
  },

  /**
   * Update a/an productlike record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.productlike.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an productlike record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.productlike.remove(ctx.params);
  }
};
