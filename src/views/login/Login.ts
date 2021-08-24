import Vue from 'vue';
import { Form as ElForm } from 'element-ui';
import { Component } from 'vue-property-decorator';
import HomeController from '@/siteScript/HomeController';
// tslint:disable-next-line
// const xss = require('xss');

@Component({
  name: 'login'
})
export default class Login extends Vue {
  private userMsg: object = {};
  private choose: string[] = ['inputActive', ''];
  private numberValidateForm = {
    username: '',
    password: ''
  };
  // private myXss: any = new xss.FilterXSS({
  //   stripIgnoreTagBody: ['script', 'noscript']
  // });
  private mounted() {
    if (this.$route.query.area && (this.$route.query as any).code) {
      this.getLogin('/fourA-login/login', {
        id: (this.$route.query as any).code
      });
    }
  }
  private getLogin(url: string, params: object) {
    HomeController.PostUrl(url, params).then((data: any) => {
      if (data.code === 0) {
        console.log(data);

        // let res = data[0];
        // this.$message({
        //   showClose: true,
        //   type: 'success',
        //   message: '登录成功！'
        // });
        // sessionStorage.setItem('users', JSON.stringify(res));
        // sessionStorage.setItem('name', res.orgName);
        // sessionStorage.setItem('code', res.roleCode);
        // sessionStorage.setItem('policeNumber', this.numberValidateForm.userId);
        // setTimeout(() => {
        //   this.$router.push('/home');
        // }, 500);
      } else if (data.code === -1) {
        this.$message({
          showClose: true,
          type: 'warning',
          message: data.msg
        });
      }
    });
  }
  private submitForm(formName: string) {
    // tslint:disable-next-line
    (this.$refs[formName] as ElForm).validate(async (valid: any) => {
      if (valid) {
        await this.getLogin('/support/login', {
          username: this.numberValidateForm.username,
          password: this.numberValidateForm.password
        });
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }
}
