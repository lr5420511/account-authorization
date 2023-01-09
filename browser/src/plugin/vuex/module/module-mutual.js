// 系统交互领域模块
export default {
    state: {
        _mutual_locked: false
    },
    getters: {
        mutual_locked: cur => cur._mutual_locked
    },
    mutations: {
        writeMutualLocked: function(cur, mutual) {
            cur._mutual_locked = mutual.mutual_locked;
        }
    }
};