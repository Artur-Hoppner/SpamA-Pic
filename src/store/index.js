import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoStreem: ''
  },

  mutations: {
  },

  actions: {
    async requestNotificationPermission () {

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
  },

  modules: {
  }
})
