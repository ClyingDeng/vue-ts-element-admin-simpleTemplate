import { RouteConfig } from 'vue-router';
import Layout from '@/components/layout/index.vue';
export const nestedRoutes: RouteConfig = {
  path: '/data',
  component: Layout,
  redirect: '/data/power',
  name: 'data',
  meta: {
    icon: 'component',
    title: '数据管理'
  },
  children: [
    {
      path: 'power',
      name: 'power',
      component: () => import('@/views/dataAdmin/power/Power.vue'),
      meta: {
        title: '力量数据'
      }
    },
    {
      path: 'jqData',
      name: 'jqData',
      component: () => import('@/views/dataAdmin/jqData/jqData.vue'),
      meta: {
        title: '警情数据'
      },
      children: [
        {
          path: 'jqmsg',
          name: 'jqmsg',
          component: () => import('@/views/dataAdmin/jqData/jqMsg/JqMsg.vue'),
          meta: {
            title: '警情信息'
          }
        },
        {
          path: 'data110',
          name: 'data110',
          component: () => import('@/views/dataAdmin/jqData/data110/Data110.vue'),
          meta: {
            title: '110数据',
          }
        }
      ]
    },
    {
      path: 'threedata',
      name: 'threedata',
      component: () => import('@/views/dataAdmin/threeData/ThreeData.vue'),
      meta: {
        title: '三实数据'
      }
    },
    {
      path: 'area',
      name: 'area',
      component: () => import('@/views/dataAdmin/area/Area.vue'),
      meta: {
        title: '辖区数据'
      }
    }
  ]
};
export default nestedRoutes;
