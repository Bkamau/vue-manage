<template>
  <div>
    <el-form :model="loginForm" :rules="rules2" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="Username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="Password"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" checked class="remember">Remember password</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="submitLogin" :loading="logining">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {authRequest} from '../../api/api'
  export default {
    data() {
      return {
        logining: false,
        loginForm: {
          username: '',
          password: '',
          remember:false
        },
        rules2: {
          username: [{
            required: true,
            message: 'Username is required',
            trigger: 'blur'
          }, ],
          password: [{
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
        this.$refs.loginForm.resetFields();
      },
      submitLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            const data = {
                login: this.loginForm.username,
                password: this.loginForm.password,
                'remember-me': this.loginForm.remember
              }

              authRequest(data).then((resp) => {
                 this.$message('ok');
              }, (resp) => {
                  this.$message.error('Oops, this is a error message.');
              })
           // this.$store.dispatch('authenticate', this.loginForm.username)
           // this.$router.push('/');
          } else {
            return false
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login-container {
    padding: 15px;
  }
  
  .remember {
    margin: 0px 0px 35px 0px;
    color: #F9FAFC;
  }
</style>
