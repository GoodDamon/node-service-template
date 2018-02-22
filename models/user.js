const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = {
    'user_id' : String,
	'first_name' : String,
	'last_name' : String,
	'books_owned' : Number,
	'books_read' : Number
};

exports.user = mongoose.model('user', userSchema);