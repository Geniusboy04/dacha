import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

require("./assets/css/templatemo-plot-listing.css")
require("./assets/css/owl.css")
require("./assets/css/animated.css")
require("./assets/css/fontawesome.css")
// require("./assets/js/imagesloaded")
// require("./assets/js/isotope")
// require("./assets/js/tabs")



// require("./assets/js/animation")
// require("./assets/js/custom")
// require("./assets/js/owl-carousel")




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
