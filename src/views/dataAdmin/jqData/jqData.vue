<template>
  <router-view></router-view>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'jqData',
})
export default class extends Vue {
  private data: object[] = [];
}
</script>