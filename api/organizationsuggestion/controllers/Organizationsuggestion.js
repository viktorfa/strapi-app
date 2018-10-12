'use strict';

/**
 * Organizationsuggestion.js controller
 *
 * @description: A set of functions called "actions" for managing `Organizationsuggestion`.
 */

module.exports = {

  /**
   * Retrieve organizationsuggestion records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.organizationsuggestion.search(ctx.query);
    } else {
      return strapi.services.organizationsuggestion.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a organizationsuggestion record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.organizationsuggestion.fetch(ctx.params);
  },

  /**
   * Count organizationsuggestion records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.organizationsuggestion.count(ctx.query);
  },

  /**
   * Create a/an organizationsuggestion record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.organizationsuggestion.add(ctx.request.body);
  },

  /**
   * Update a/an organizationsuggestion record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.organizationsuggestion.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an organizationsuggestion record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.organizationsuggestion.remove(ctx.params);
  }
};
