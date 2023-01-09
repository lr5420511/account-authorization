'use strict';

const koaStatic = require('koa-static');

module.exports = options => koaStatic(options.STATIC_PUBLIC_DIRECTORY, {
    index: options.FALLBACK_FILE
});