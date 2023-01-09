// 给定时间格式标准化
export const timeStandardify = function(time, template = '[y]-[m]-[d] [h]:[mi]:[s]') {
    time = new Date(time);
    const kvs = {
        sy: time.getYear,
        y: time.getFullYear,
        m: function() { return this.getMonth() + 1; },
        d: time.getDate,
        h: time.getHours,
        mi: time.getMinutes,
        s: time.getSeconds,
        ms: time.getMilliseconds
    };
    return template.replace(new RegExp(`\\[(${Object.keys(kvs).join('|')})\\]`, 'g'), (_, key) => {
        const method = kvs[key],
            value = method.call(time);
        return `${'0'.repeat(Math.max(0, 2 - String(value).length))}${value}`;
    });
};