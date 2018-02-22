const routes = require('../config/routes.js');
const Mongoose = require('mongoose').Mongoose;
const mongoose = new Mongoose();
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);
const user = require('../models/user.js');
const book = require('../models/book.js');
const uuid = require('uuid/v4');

mockgoose.prepareStorage().then(() => {
    mongoose.connect('mongodb://localhost/TestingDB', function(err) {
        if(err) {
            throw err;
        }
    });
});

module.exports = (app) => {
    app.get(routes.API_USERS, (req, res) => {
        const search = req.params.id ? { user_id: req.params.id } : {};
        query = user.find(search)
            .then(items => {
                res.status(200).json({ success: true, items })
            })
            .catch(error => {
                res.status(500).json({ success: false, error })
            });
    });
    
    app.post(routes.API_USERS, (req, res) => {
        const user_id = req.params.id ? req.params.id : uuid();
        const { first_name, last_name, books_owned, books_read } = req.params;
        const options = {
            new: true,
            upsert: true
        };
        
        const entry = new user({ user_id, first_name, last_name, books_owned, books_read });
        
        const search = { user_id };
        query = user.find(search, entry, options)
            .then(items => {
                res.status(200).json({ success: true, items })
            })
            .catch(error => {
                res.status(500).json({ success: false, error })
            });
    });
    
    app.get(routes.API_BOOKS, (req, res) => {
        const search = req.params.id ? { book_id: req.params.id } : {};
        query = book.find(search)
            .then(items => {
                res.status(200).json({ success: true, items })
            })
            .catch(error => {
                res.status(500).json({ success: false, error })
            });
    });
    
    app.post(routes.API_BOOKS, (req, res) => {
        const book_id = req.params.id ? req.params.id : uuid();
        const { first_name, last_name, books_owned, books_read } = req.params;
        const options = {
            new: true,
            upsert: true
        };
        
        const entry = new user({ user_id, first_name, last_name, books_owned, books_read });
        
        const search = { user_id };
        query = user.find(search, entry, options)
            .then(items => {
                res.status(200).json({ success: true, items })
            })
            .catch(error => {
                res.status(500).json({ success: false, error })
            });
    });
};