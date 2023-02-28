import { createApp } from 'vue';
import App from './app.vue';
import '@easy-ui/theme-chalk/src/index.scss';
import EasyUi from '@easy-ui/components';

const app = createApp(App);
app.use(EasyUi);

// app.use(EasyButton)
// app.use(EasyButtonGroup)
app.mount('#app');
