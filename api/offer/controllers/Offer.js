'use strict';

/**
 * Offer.js controller
 *
 * @description: A set of functions called "actions" for managing `Offer`.
 */

module.exports = {

  /**
   * Retrieve offer records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.offer.search(ctx.query);
    } else {
      return strapi.services.offer.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a offer record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.offer.fetch(ctx.params);
  },

  /**
   * Count offer records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.offer.count(ctx.query);
  },

  /**
   * Create a/an offer record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.offer.add(ctx.request.body);
  },

  /**
   * Update a/an offer record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.offer.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an offer record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.offer.remove(ctx.params);
  }
};
