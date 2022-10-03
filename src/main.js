import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons*/
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons';


Vue.config.productionTip = false
library.add(faStar, faStarRegular)
Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
