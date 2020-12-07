import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { RouteConfig } from 'vue-router';
// import { asyncRoutes } from '@/router/modules/asyncRoutes';
// import { constantRoutes } from '@/router';

export interface IUserState {
  token?: string;
  name?: string;
  id: string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule implements IUserState {
  public token = '';
  public name = '';
  public id = '';
  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token;
  }
  @Mutation
  private SET_NAME(name: string) {
    this.name = name;
  }
  // tslint:disable-next-line
  @Mutation
  private SET_ID(id: string) {
    this.id = id;
  }
  // tslint:disable-next-line
  @Action
  public async GetUserInfo() {
    this.SET_NAME('admin');
    this.SET_TOKEN('');
  }
  // tslint:disable-next-line
  @Action
  public async GetId(id: string) {
    this.SET_ID(id);
  }
}

export const UserModule = getModule(User);
