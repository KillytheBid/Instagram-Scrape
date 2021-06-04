const path = require('path');
const { root } = require('../utils/directory.js');

require('dotenv').config({
    path: path.join(root, '.env'),
});

const config = {
    port: process.env.PORT,
    instagram_api_key: process.env.INSTAGRAM_API_KEY,
};

module.exports = config;
