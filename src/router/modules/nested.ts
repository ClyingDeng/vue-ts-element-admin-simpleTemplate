import { RouteConfig } from 'vue-router';
import Layout from '@/components/layout/index.vue';
export const nestedRoutes: RouteConfig = {
  path: '/data',
  component: Layout,
  redirect: '/data/onemenu',
  name: 'data',
  meta: {
    icon: 'component',
    title: '多级管理'
  },
  children: [
    {
      path: 'onemenu',
      name: 'onemenu',
      component: () => import('@/views/dataAdmin/oneMenu/OneMenu.vue'),
      meta: {
        title: '子菜单1'
      }
    },
    {
      path: 'twomenu',
      name: 'twomenu',
      component: () => import('@/views/dataAdmin/twoMenu/TwoMenu.vue'),
      meta: {
        title: '子菜单2'
      },
      children: [
        {
          path: 'twomenu1',
          name: 'twomenu1',
          component: () => import('@/views/dataAdmin/twoMenu/twoMenu1/TwoMenu1.vue'),
          meta: {
            title: '子子菜单2-1'
          }
        },
        {
          path: 'twomenu2',
          name: 'twomenu2',
          component: () => import('@/views/dataAdmin/twoMenu/twoMenu2/TwoMenu2.vue'),
          meta: {
            title: '子子菜单2-2',
          }
        },
        {
          path: 'twomenu3',
          name: 'twomenu3',
          component: () => import('@/views/dataAdmin/twoMenu/twoMenu3/TwoMenu3.vue'),
          meta: {
            title: '子子菜单2-3',
          }
        }
      ]
    },
    {
      path: 'threemenu',
      name: 'threemenu',
      component: () => import('@/views/dataAdmin/threeMenu/ThreeMenu.vue'),
      meta: {
        title: '子菜单3'
      }
    },
    {
      path: 'fourmenu',
      name: 'fourmenu',
      component: () => import('@/views/dataAdmin/fourMenu/FourMenu.vue'),
      meta: {
        title: '子菜单4'
      }
    }
  ]
};
export default nestedRoutes;
