'use strict';

const PostcssP2R = require('postcss-pxtorem');

module.exports = {
    plugins: [
        new PostcssP2R({
            propList: ['*'],
            rootValue: 30
        })
    ]
};