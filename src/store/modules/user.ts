import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { RouteConfig } from 'vue-router';
// import { asyncRoutes } from '@/router/modules/asyncRoutes';
// import { constantRoutes } from '@/router';

export interface IUserState {
  token?: string;
  name: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = '';
  public name = '';
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }
  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }
  // tslint:disable-next-line
  @Action
  public async GetUserInfo() {
    this.SET_NAME('admin');
    this.SET_TOKEN('');
  }
}

export const UserModule = getModule(User);
