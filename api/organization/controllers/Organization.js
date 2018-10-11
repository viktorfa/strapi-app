'use strict';

/**
 * Organization.js controller
 *
 * @description: A set of functions called "actions" for managing `Organization`.
 */

module.exports = {

  /**
   * Retrieve organization records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.organization.search(ctx.query);
    } else {
      return strapi.services.organization.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a organization record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.organization.fetch(ctx.params);
  },

  /**
   * Count organization records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.organization.count(ctx.query);
  },

  /**
   * Create a/an organization record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.organization.add(ctx.request.body);
  },

  /**
   * Update a/an organization record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.organization.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an organization record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.organization.remove(ctx.params);
  }
};
