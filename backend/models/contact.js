const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        email: {
            type: String,
        },
        body: {
            type: {}
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);