'use strict';

const crypto = require('crypto');

const outs = exports;

// 使用SHA256算法计算给定文本的摘要
outs.hash = function(text, options) {
    let { count, char } = Object.assign({ count: 8, char: '' }, options);
    [count, char] = [
        Math.max(1, Math.floor(count)),
        'string' === typeof char ? char : ''
    ];
    const summary = crypto.createHash('sha256').update(text).digest('hex');
    return char ? summary.replace(new RegExp(`(?:.|\\n){1,${count}}`, 'g'), (cur, ci, host) =>
        `${cur}${ci + cur.length >= host.length ? '' : char}`
    ) : summary;
};