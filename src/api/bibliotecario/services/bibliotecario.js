'use strict';

/**
 * bibliotecario service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bibliotecario.bibliotecario');
