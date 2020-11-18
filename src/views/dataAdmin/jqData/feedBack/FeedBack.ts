import { Component, Vue } from 'vue-property-decorator';
@Component({
  name: 'feedback'
})
export default class extends Vue {
  private data: object[] = [];
}
