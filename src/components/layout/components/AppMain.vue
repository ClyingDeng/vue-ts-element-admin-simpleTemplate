<template>
  <section class="app-main">
    <nav-bar />
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import NavBar from './navbar/NavBar.vue';

@Component({
  components: { NavBar },
  name: 'AppMain',
})
export default class extends Vue {
  private userName = 'admin';
  @Prop() private isCollapse!: boolean;
  get key() {
    return this.$route.path;
  }
  private fold() {
    this.$emit('fold');
  }
  private signOut() {
    // this.$router.push({ path: '/login' })
    console.log('注销！');
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f0f2f5;
}
</style>
