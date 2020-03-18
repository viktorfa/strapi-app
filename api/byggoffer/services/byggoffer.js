"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */
const { defaultOfferFields } = require("../../constants");
const collectionName = "byggoffer";

module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find: (params, populate) => {
    // Convert `params` object to filters compatible with Mongo.
    const filters = strapi.utils.models.convertParams(collectionName, params);

    return strapi.models[collectionName]
      .find()
      .where(filters.where)
      .select(defaultOfferFields.join(" "))
      .sort(filters.sort)
      .skip(filters.start)
      .limit(filters.limit)
      .populate(populate);
  },
  findOne(params, populate) {
    const mongoIdPattern = /^[a-f\d]{24}$/i;
    if (!mongoIdPattern.test(params.id)) {
      // Not mongo id pattern, using mpn uri
      params = { uri: params.id };
    }
    return strapi.query(collectionName).findOne(params, populate);
  }
};
