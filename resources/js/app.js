require('./bootstrap');
import App from './components/App';

new Vue({
    render: h => h(App)
}).$mount('#app');
