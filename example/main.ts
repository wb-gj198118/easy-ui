import { createApp } from 'vue';
import App from './app.vue';
import '@easy-ui/theme-chalk/src/index.scss';
import BrainUi from '@easy-ui/components';

const app = createApp(App);
app.use(BrainUi);

// app.use(BrainButton)
// app.use(BrainButtonGroup)
app.mount('#app');
