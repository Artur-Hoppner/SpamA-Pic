import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.prototype.Caman = window.Caman;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// register sw.js on mount
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('sw.js')
      .then(() => console.log('Registered service worker'))
        .catch((error) => console.log('Error register service worker', error))
  }
}

registerServiceWorker()


// Ask premission for notifications:
const requestNotificationPermission = async () => {
  console.log("requestNotificationPermission")
    const permission = await window.Notification.requestPermission();
    if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
    }   
}
requestNotificationPermission()