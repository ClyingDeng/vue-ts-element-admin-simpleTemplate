<template>
  <div>
    <sidebar-logo :collapse="false" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="false"
        background-color="#304156"
        text-color="#dee4eb"
        active-text-color="#409EFF"
        :unique-opened="false"
        :collapse-transition="true"
        mode="vertical"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
          :is-collapse="false"
        ></SidebarItem>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SidebarItem from './SidebarItem.vue';
import SidebarLogo from './SidebarLogo.vue';
import { PermissionModule } from '@/store/modules/permission';
import { UserModule } from '@/store/modules/user';
import { constantRoutes } from '@/router';

@Component({
  name: 'SideBar',
  components: {
    SidebarItem,
    SidebarLogo,
  },
})
export default class extends Vue {
  private routes = constantRoutes;
  // get routes() {
  //   console.log(PermissionModule.state, UserModule);
  //   return PermissionModule.routes;
  // }
  get activeMenu() {
    const route = this.$route;
    const { meta, path } = route;
    if (meta.activeMenu) {
      return meta.activeMenu;
    }
    return path;
  }
}
</script>

<style lang="scss">
.sidebar-container {
  // reset element-ui css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out,
      0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}
</style>

<style lang="scss" scoped>
.el-scrollbar {
  height: 100%;
}

.has-logo {
  .el-scrollbar {
    height: calc(100% - 50px);
  }
}

.el-menu {
  border: none;
  height: 100%;
  width: 100% !important;
}
</style>
