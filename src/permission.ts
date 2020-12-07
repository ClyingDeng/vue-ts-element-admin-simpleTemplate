import router from './router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Route } from 'vue-router';
import { UserModule } from './store/modules/user';

NProgress.configure({ showSpinner: false });
// 标签显示名称
const getPageTitle = (pageTitle: string) => {
  if (pageTitle) {
    return `${pageTitle} - 管理系统`;
  }
  return `管理系统`;
};
// 单纯路由守卫，无权限认证  可自行添加
router.beforeEach(async (to: Route, _: Route, next: any) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  // if (to.path === '/data/power/310151410000') {
  //   next();
  // } else {
  //   if (UserModule.id) {
  //     next();
  //   } else {
  //     next({ path: '/data/power/310151410000' });
  //     NProgress.done();
  //   }
  // }
  // if (to.path === '/login') {
  //   next({ path: '/' });
  //   NProgress.done();
  // } else {
  next();
  // }
});
router.afterEach((to: Route) => {
  NProgress.done();
});
