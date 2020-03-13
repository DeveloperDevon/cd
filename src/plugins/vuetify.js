import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#21468b',
                secondary: '#ff5722',
                accent: '#FFFFFF',
                error: '#f44336',
                warning: '#ffeb3b',
                info: '#ff9800',
                success: '#4caf50'
                }
            },
        }
});
