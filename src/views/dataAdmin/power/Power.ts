import { Component, Vue } from 'vue-property-decorator';
import CountTo from 'vue-count-to';
import { Form } from 'element-ui';
import { AddDutyType, DutyType } from '@/@types/decaler';
import DataController from '@/utils/Controller';
import { UserModule } from '@/store/modules/user';
@Component({
  name: 'power',
  components: {
    CountTo
  }
})
export default class extends Vue {
  private anfang = {
    zb: 100,
    wb: 100,
    yb: 100
  };
  private isafEdit: boolean = false;
  private dutyData: Array<DutyType<string>> = [
    {
      uuid: 'de9ed967c8f2',
      area: '上海市静安区',
      name: '张欣1',
      mobile: '13787293302'
    },
    {
      uuid: 'de90c8f3',
      area: '上海市静安区',
      name: '张欣2',
      mobile: '13787293302'
    },
    {
      uuid: 'de9ed967-2d17-462a-b44d-31491ac0c8f4',
      area: '上海市宝山区',
      name: '张欣3',
      mobile: '13787293302'
    },
    {
      uuid: 'de9sc0c8e3',
      name: '李四',
      area: '上海市宝山区',
      mobile: '13787293302'
    }
  ];
  private addInfo: AddDutyType<any> = {
    name: '',
    area: '',
    mobile: ''
  };
  private addPowerVisible: boolean = false;
  private editInfo: DutyType<string> = {
    uuid: '',
    name: '',
    mobile: ''
  };
  private isDeleteDialog: boolean = false;
  private idEditDialog: boolean = false;
  private deleteUuid: string = '';
  private total: number = 4;
  private curPage: number = 1;
  private mounted() {
    if (this.$route.params.area) {
      UserModule.GetId(this.$route.params.area);
      console.log('UserModule', UserModule.id);
      // this.$router.push('/data/power');
    }
    this.$nextTick(() => {
      // if (UserModule.id) {
      //   console.log(UserModule.id);
      //   this.getAnFang('/mgr/power/find', { area: UserModule.id });
      //   this.getDuty('/mgr/attendance/find', { area: UserModule.id, pages: 1, size: 10 });
      // }
    });
  }
  private efEdit() {
    this.isafEdit = true;
    console.log(this.isafEdit);
  }
  private onSubmit() {
    (this.$refs.anfang as Form).validate((valid) => {
      if (valid) {
        this.isafEdit = false;
        console.log(this.anfang);
        // this.updateAnFang('/mgr/power/update', { area: UserModule.id, jc: this.anfang.jc, fj: this.anfang.fj, jl: this.anfang.jl });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  // 值班力量2
  private dutyAdd() {
    this.addPowerVisible = true;
  }
  private addBeforeClose() {
    (this.$refs.addInfo as Form).resetFields();
    this.addPowerVisible = false;
  } private confirmAdd() {
    (this.$refs.addInfo as Form).validate((valid) => {
      if (valid) {
        // this.addInfo.area = sessionStorage.getItem('pid');
        console.log('确认', this.addInfo);
        // 调用添加接口
        // this.postAddPower('/add', this.addInfo);
        // (this.$refs.addInfo as Form).resetFields();
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  // 值班力量2编辑
  private FormEdit(row: DutyType<string>) {
    this.editInfo = row;
    console.log(row);
    this.idEditDialog = true;
  }
  private editConfirm() {
    (this.$refs.editInfo as Form).validate((valid) => {
      if (valid) {
        console.log(this.editInfo);
        this.idEditDialog = false;
        // (this.$refs.editInfo as Form).resetFields();
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
  private editBeforeClose() {
    (this.$refs.editInfo as Form).resetFields();
    this.idEditDialog = false;
  }
  private deleteBeforeClose() {
    this.isDeleteDialog = false;
  }
  private FormDelete(row: DutyType<string>) {
    // console.log(row);
    this.deleteUuid = row.uuid;
    this.isDeleteDialog = true;
  }
  private confirmDelete() {
    this.isDeleteDialog = false;
    console.log(this.deleteUuid);
    // this.postDelUuid('/mgr/attendance/delete', { id: this.deleteUuid });
  }
  // 分页
  private pageChange(val: number) {
    console.log(val);
    this.curPage = val;
  }
  // 接口
  private getAnFang(url: string, params: object) {
    // DataController.getUrl(url, params).then((data: any) => {
    //   this.anfang.jc = data.data.jc;
    //   this.anfang.fj = data.data.fj;
    //   this.anfang.jl = data.data.jl;
    // });
  }
  private updateAnFang(url: string, params: object) {
    DataController.PostUrl(url, params).then((data: any) => {
      if (data.message === 'OK') {
        this.isafEdit = false;
        // this.getAnFang('/mgr/power/find', { area: UserModule.id });
        this.$message({
          showClose: true,
          message: '修改成功',
          type: 'success'
        });
      }
    });
  }
  private getDuty(url: string, params: object) {
    DataController.getUrl(url, params).then((data: any) => {
      console.log(data);
      this.total = data.data.page.totalCount;
      this.dutyData = data.data.list;
    });
  }
  private postDelUuid(url: string, params: object) {
    DataController.getUrl(url, params).then((data: any) => {
      console.log(data);
    });
  }
  // private updateAnFang(url: string, params: object) {
  //   DataController.PostUrl(url, params).then((data: any) => {
  //     console.log(data);
  //     if (data.message === 'OK') {
  //       this.isafEdit = false;
  //       this.getAnFang('/mgr/power/find', { area: UserModule.id });
  //       this.$message({
  //         showClose: true,
  //         message: '修改成功',
  //         type: 'success'
  //       });
  //     }
  //   });
  // }

}
