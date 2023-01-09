'use strict';

const { resolve } = require('path');

module.exports = appInfo => {
  
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1673075402136_6469';

    // add your middleware config here
    config.middleware = ['mwStatic'];

    config.mwStatic = {
        STATIC_PUBLIC_DIRECTORY: resolve(__dirname, '../app/public'),
        FALLBACK_FILE: 'index.html'
    };

    config.sequelize = {
        dialect: 'mysql',
        database: 'account_authorization',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'lr5420511',
        timezone: '+08:00'
    };

    config.security = {
        csrf: {
            enable: false
        }
    };

    // add your user config here
    const userConfig = {};

    return { ...config, ...userConfig };
};
