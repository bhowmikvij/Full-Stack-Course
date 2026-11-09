const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/mongoPractice`)

const userSchema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        unique: true
    },
    email: String
});

mongoose.model("user", userSchema);

module.exports = mongoose.model("user", userSchema);