<template>
  <div>
    <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <el-form-item prop="account">
        <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="Password"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">Remember password</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit2" :loading="logining">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        logining: false,
        ruleForm2: {
          account: '',
          checkPass: ''
        },
        rules2: {
          account: [{
            required: true,
            message: 'Username is required',
            trigger: 'blur'
          }, ],
          checkPass: [{
            required: true,
            message: 'Password is required',
            trigger: 'blur'
          }, ]
        },
        checked: true
      };
    },
    methods: {
      handleReset2() {
        this.$refs.ruleForm2.resetFields();
      },
      handleSubmit2(ev) {
        var _this = this;
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            this.logining = true;
            const loginParams = {
              username: this.ruleForm2.account,
              password: this.ruleForm2.checkPass
            };
            loginRequest(loginParams).then(
              (response) => {
                this.logining = false;
                this.$store.commit('setLogin', response.data.token)
              }, (response) => {
                this.$notify({
                  title: 'Error',
                  message: 'Did not work, try again',
                  type: 'error'
                });
                this.logining = false;
                this.handleReset2();
              });
          } else {
            return false
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-container {
    padding: 15px;
  }
  
  .remember {
    margin: 0px 0px 35px 0px;
    color: #F9FAFC;
  }
</style>
