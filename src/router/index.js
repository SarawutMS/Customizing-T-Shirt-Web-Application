/*import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ //'../views/AboutView.vue')
//}
//]

//const router = createRouter({
// history: createWebHistory(process.env.BASE_URL),
// routes
//})

//export default router-->
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Custom from "../views/Custom.vue";

import Edit from "../views/Edit.vue";
import Create from "@/views/Create.vue";
import Gallery from "@/views/Gallery.vue";
import Profile from "@/views/Profile.vue";
import Store from "@/views/Store.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: '/custom',
    name: 'Custom',
    component: Custom,
    meta: {
      title: "Custom",
    },
  },

  {
    path: '/edit',
    name: 'Edit',
    component: Edit,
    meta: {
      title: "Edit",
    },


  },
  {
    path: '/profile/:id?',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "Profile",
    }
  },


  {
    path: '/store/:id',
    name: 'Store',
    component: Store,
    meta: {
      title: "Store",
    }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery,
    meta: {
      title: "Gallery",
    },

  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
    meta: {
      title: "Create",
    },

  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
});
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});

export default router;

