import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Menu from "./components/Menu.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Delivery from "./components/Delivery.vue";
import History from "./components/History.vue";
import OrderingGuide from "./components/OrderingGuide.vue";
import Admin from "./components/Admin.vue";
import App from "./App.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "homeLink", component: Home },
  // { path: "/menu/:items", component: Menu }
  { path: "/menu", name: "menuLink", component: Menu },
  {
    path: "/admin",
    name: "adminLink",
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert("This area is for authorised user only, please login to continue.");
      next();
    }
  },
  {
    path: "/about",
    name: "aboutLink",
    component: About,
    children: [
      { path: "/contact", name: "contactLink", component: Contact },
      { path: "/history", name: "historyLink", component: History },
      { path: "/delivery", name: "deliveryLink", component: Delivery },
      {
        path: "/ordering-guide",
        name: "orderingGuideLink",
        component: OrderingGuide
      }
      // /contact www.pizzaplanet.com.contact
      // contact www.pizzaplanet.com/about/contact
    ]
  },
  { path: "*", redirect: "/" } //if path is not matched, you go back to top page
];

const router = new VueRouter({
  routes,
  mode: "history" //takes advantage of html file , history api. which allows to change url wihtouh refresh. remove # tag
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

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
