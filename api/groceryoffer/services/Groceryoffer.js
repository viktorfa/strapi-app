"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */
const { defaultOfferFields } = require("../../constants");

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find: (params, populate) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams("groceryoffer", params);

    return Groceryoffer.find()
      .where(filters.where)
      .select(defaultOfferFields.join(" "))
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  }
};
