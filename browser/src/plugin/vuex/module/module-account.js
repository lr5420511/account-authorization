// 用户账号领域模块
const session = sessionStorage;

export default {
    state: {
        _account_id: Number(session['_account_id']),
        _account_username: session['_account_username'],
        _account_realname: session['_account_realname'],
        _account_avatar: session['_account_avatar'],
        _account_introduction: session['_account_introduction'],
        _account_navigators: JSON.parse(session['_account_navigators'] || '[]'),
        _account_jwt: session['_account_jwt']
    },
    getters: {
        account_id: cur => cur._account_id,
        account_username: cur => cur._account_username,
        account_realname: cur => cur._account_realname,
        account_avatar: cur => cur._account_avatar,
        account_introduction: cur => cur._account_introduction,
        account_navigators: cur => cur._account_navigators,
        account_jwt: cur => cur._account_jwt,
        account_welcome: cur => {
            let res;
            cur._account_navigators.some(navigator =>
                !(navigator.children && navigator.children.length) && (res = navigator)    
            );
            return res && res.path;
        }
    },
    mutations: {
        writeAccountJwt: function(cur, account) {
            const id = cur._account_id = account.account_id,
                jwt = cur._account_jwt = account.account_jwt;
            session['_account_id'] = id;
            session['_account_jwt'] = jwt;
        },
        writeAccountProfiles: function(cur, account) {
            const username = cur._account_username = account.account_username,
                realname = cur._account_realname = account.account_realname,
                avatar = cur._account_avatar = account.account_avatar,
                introduction = cur._account_introduction = account.account_introduction;
            session['_account_username'] = username;
            session['_account_realname'] = realname;
            session['_account_avatar'] = avatar;
            session['_account_introduction'] = introduction;
        },
        writeAccountNavigators: function(cur, account) {
            const navigators = account.account_navigators || [];
            cur._account_navigators.splice(0, cur._account_navigators.length, ...navigators);
            session['_account_navigators'] = JSON.stringify(navigators);
        }
    }
};