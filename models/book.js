const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = {
    'book_id' : String,
	'title' : String,
	'ISBN' : String,
	'genre' : String,
	'words' : Number
};

exports.book = mongoose.model('book', bookSchema);