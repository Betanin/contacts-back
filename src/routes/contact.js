const { handler } = require('../helpers/controllers');
const { contact } = require('../controllers');

module.exports = (app) => {

    app.route('/v1/contact')
        .get(handler(contact.findAll, (req, res, next) => [req.user]))
        .post(handler(contact.create, (req, res, next) => [req.user, req.body]));

    app.route('/v1/contact/:id')
        .get(handler(contact.find, (req, res, next) => [req.user, req.params.id]))
        .delete(handler(contact.remove, (req, res, next) => [req.user, req.params.id]))
        .put(handler(contact.update, (req, res, next) => [req.user, req.params.id, req.body]));

};