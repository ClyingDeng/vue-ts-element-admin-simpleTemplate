import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Layout from '@/components/layout/index.vue';
import nestedRoutes from './modules/nested';

Vue.use(VueRouter);

export const constantRoutes: RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/data',
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue'),
    meta: { title: '登录', hidden: true }
  },
  nestedRoutes,
];


const createRouter = () => new VueRouter({
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  base: process.env.BASE_URL,
  routes: constantRoutes
});

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher; // reset router
}

export default router;
