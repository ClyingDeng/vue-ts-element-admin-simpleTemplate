import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import { RouteConfig } from 'vue-router';
import { constantRoutes } from '@/router';
import store from '@/store';

export interface IPermissionState {
    routes: RouteConfig[];
}

@Module({ dynamic: true, store, name: 'permission' })
class Permission extends VuexModule implements IPermissionState {
    public routes: RouteConfig[] = constantRoutes;

    @Mutation
    public SET_ROUTES(routes: RouteConfig[]) {
        this.routes = constantRoutes.concat(routes);
    }
    // tslint:disable-next-line
    @Action
    public GenerateRoutes() {
        this.SET_ROUTES([]);
    }
}

export const PermissionModule = getModule(Permission);
