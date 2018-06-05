const { Contact } = require('../models');
const { crudOperations } = require('../helpers/services');

module.exports = crudOperations(Contact);