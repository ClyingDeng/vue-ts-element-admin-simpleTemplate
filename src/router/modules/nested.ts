import { RouteConfig } from 'vue-router';
import Layout from '@/components/layout/index.vue';
export const nestedRoutes: RouteConfig = {
  path: '/data',
  component: Layout,
  redirect: '/data/power',
  name: 'data',
  meta: {
    icon: 'el-icon-menu',
    title: '数据管理'
  },
  children: [
    // {
    //   path: '/data/power/:area',
    //   component: () => import('@/views/dataAdmin/power/Power.vue'),
    //   meta: { hidden: true }
    // },
    {
      path: 'power',
      name: 'power',
      component: () => import('@/views/dataAdmin/power/Power.vue'),
      meta: {
        title: '力量数据'
      }
    },
    {
      path: 'sjData',
      name: 'sjData',
      component: () => import('@/views/dataAdmin/sjData/SjData.vue'),
      meta: {
        title: '事件数据'
      },
      children: [
        {
          path: 'sjmsg',
          name: 'sjmsg',
          component: () => import('@/views/dataAdmin/sjData/sjMsg/SjMsg.vue'),
          meta: {
            title: '事件信息'
          }
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: () => import('@/views/dataAdmin/sjData/feedBack/FeedBack.vue'),
          meta: {
            title: '事件反馈'
          }
        }
      ]
    },
    {
      path: 'weather',
      name: 'weather',
      component: () => import('@/views/dataAdmin/area/Area.vue'),
      meta: {
        title: '地方天气'
      }
    }
  ]
};
export default nestedRoutes;
