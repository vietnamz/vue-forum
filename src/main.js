// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import store from '@/store'
import AppDate from '@/components/AppDate'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCIH88B46EmohDqgmE_nUyofNoc2P-UC_I',
  authDomain: 'vue-school-forum-3c1de.firebaseapp.com',
  databaseURL: 'https://vue-school-forum-3c1de.firebaseio.com',
  projectId: 'vue-school-forum-3c1de',
  storageBucket: '',
  messagingSenderId: '148040775700',
  appId: '1:148040775700:web:deeefe8ee9de1cc1f08f01'
}
// Initialize Firebase
console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
