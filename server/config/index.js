'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const mysql = require('mysql2');

function getConfig(key) {
    const config = {
        port: process.env.PORT || 3200,
        mysql_config: {
            dialect: process.env.MYSQL_DIALECT || 'mysql',
            host: process.env.MYSQL_HOST || '1mysql',
            port: process.env.MYSQL_PORT || 3306,
            username: process.env.MYSQL_USERNAME || 'root',
            password: process.env.MYSQL_PASSWORD || '',
            database: process.env.MYSQL_DATABASE || 'chat-gpt',
            timezone: process.env.MYSQL_TIMEZONE || '+08:00',
            dialectOptions: {
                dateStrings: process.env.MYSQL_DATE_STRINGS || true,
                typeCast: process.env.MYSQL_TYPE_CAST || true
            }
        },
        redis_config: {
            type: process.env.REDIS_TYPE || 'redis',
            host: process.env.REDIS_HOST || '192.168.100.8',
            port: process.env.REDIS_PORT || 16379,
            password: process.env.REDIS_PASSWORD || ''
        },
        email: process.env.EMAIL || 'zihjiang@163.com',
        email_config: {
            host: process.env.EMAIL_HOST || 'smtp.163.com',
            port: process.env.EMAIL_PORT || 25,
            ignoreTLS: process.env.EMAIL_IGNORE_TLS || true,
            secure: process.env.EMAIL_SECURE || false,
            auth: {
                user: process.env.EMAIL_AUTH_USER || 'zihjiang@163.com',
                pass: process.env.EMAIL_AUTH_PASS || ''
            }
        }
    };
    if (key) {
        return config[key];
    }
    return config;
}

exports.default = {
    getConfig
};
//# sourceMappingURL=index.js.map
