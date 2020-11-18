import Vue from 'vue';
import Vuex from 'vuex';
import { IUserState } from './modules/user';
import { IPermissionState } from './modules/permission';

Vue.use(Vuex);

export interface IRootState {
  user: IUserState;
  // permission可添加权限路由
  permission: IPermissionState;
}

export default new Vuex.Store<IRootState>({});
