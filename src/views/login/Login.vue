<template>
  <div class="login">
    <div class="container">
      <div class="center">
        <div class="main">
          <div class="loginInput">
            <el-form
              :model="numberValidateForm"
              ref="numberValidateForm"
              label-width="20%"
              class="demo-ruleForm"
            >
              <el-form-item
                label="账号"
                prop="username"
                :rules="[{ required: true, message: '账号不能为空' }]"
              >
                <el-input
                  v-model="numberValidateForm.username"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item
                label="密码"
                prop="password"
                :rules="[{ required: true, message: '密码不能为空' }]"
              >
                <el-input
                  type="password"
                  v-model="numberValidateForm.password"
                  @keyup.enter.native="submitForm('numberValidateForm')"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm('numberValidateForm')"
                  class="loginButton"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<style lang="scss" src="./Login.scss" scoped></style>
<script src="./Login.ts"></script>
<style lang="scss">
.login .el-form-item__content {
  @extend %displayCenter;
  margin-left: 22% !important;
  margin-top: 1vh;
}
.login .el-form-item__label {
  color: #f1f1f1;
  font-size: 1vw;
  line-height: 5vh;
}
.login .el-input__inner {
  background-color: transparent;
  border: 0.2vh solid #2d76ff;
  color: #eee;
  font-size: 1vw;
  height: 5vh;
}
.login .el-input {
  height: 5vh;
}
.login .el-form-item {
  margin-bottom: 3vh;
}
.login .el-form-item__error {
  font-size: 0.7vw;
}
</style>
