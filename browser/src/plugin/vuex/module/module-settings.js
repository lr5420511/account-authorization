// 系统设置领域模块
const session = sessionStorage;

export default {
    state: {
        _settings_color: session['_settings_color'],
        _settings_scenes: JSON.parse(session['_settings_scenes'] || '[]')
    },
    getters: {
        settings_color: cur => cur._settings_color,
        settings_scenes: cur => cur._settings_scenes
    },
    mutations: {
        writeSettingsColor: function(cur, settings) {
            const color = cur._settings_color = settings.settings_color;
            session['_settings_color'] = color;
        },
        writeSettingsScenes: function(cur, settings) {
            const scenes = settings.settings_scenes || [];
            cur._settings_scenes.splice(0, cur._settings_scenes.length, ...scenes);
            session['_settings_scenes'] = JSON.stringify(scenes);
        }
    }
};