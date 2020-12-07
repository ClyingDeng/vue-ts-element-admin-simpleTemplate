<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'sjData',
})
export default class extends Vue {
  private data: string = '事件信息';
}
</script>