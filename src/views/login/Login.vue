<template>
  <div @click="jump">login</div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Login extends Vue {
  private jump() {
    this.$router.replace({
      name: 'power',
      params: { code: '310151410000' },
    });
  }
}
</script>