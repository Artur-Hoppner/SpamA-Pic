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


// Register sw.js on mount
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker
      .register('sw.js')
      .then(() => console.log('Registered service worker'))
        .catch((error) => console.log('Error register service worker', error))
  }
}
registerServiceWorker()


// Ask for notifications premission:
const requestNotificationPermission = async () => {

  if (Notification.permission === "granted") {
    console.log("This browser is already registrated");
    await window.Notification.requestPermission();
  } else {
    console.log("requestNotificationPermission")
    const permission = await window.Notification.requestPermission();
      if(permission !== 'granted'){
        throw new Error('Permission not granted for Notification');
      }   
    }
}
requestNotificationPermission()