import Vue from 'vue';
import Vuex from 'vuex';

import ModuleAccount from './module/module-account';
import ModuleMutual from './module/module-mutual';
import ModuleSettings from './module/module-settings';
// Import more modules to here!

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        'mod_account': ModuleAccount,
        'mod_mutual': ModuleMutual,
        'mod_settings': ModuleSettings
    }
});