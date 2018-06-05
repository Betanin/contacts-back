const { contact } = require('../services');

async function findAll(user){

    return await contact.find({ userId: user._id }).exec();

};

async function find(user, id){

    return await contact.findOne({ '_id': id, userId: user._id }).exec();

};

async function remove(user, id){

    return await contact.remove({
        '_id': id,
        userId: user._id
    });

};

async function create(user, body){

    return await contact.create(Object.assign({}, body, { userId: user._id }));

};

async function update(user, id, body){
    
    return await contact.update({
        '_id': id,
        userId: user._id
    }, body);

};

module.exports = {
    findAll,
    find,
    remove,
    create,
    update,
};