import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import { store } from './store/store.js'
import Accounting from 'accounting-js'
import App from "./App.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history", //takes advantage of html file , history api. which allows to change url wihtouh refresh. remove # tag
  scrollBehavior(to, from, savePosition) {
    // return {
    //   // selector: '.btn',
    //   // selector: '.btn'
    // };
    if (to.hash) {
      return { selector: to.hash };
    }
  }
});

// router.afterEach((to, from) => {
//   //global navigation guards
//   alert("after each");
//   // next(); //tells to next router (page)
//   // next(false); //does not work

//   // if (to.path === "/menu") {
//   //   //decleared to link to menu page
//   //   next();
//   // } else {
//   //   next(false);
//   // }
// });

Vue.config.productionTip = false;
Vue.filter('currency', function(val){
  return Accounting.formatMoney(val)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
