<template>
  <el-form :model="registration" :rules="rules" ref="registration" label-position="left" label-width="0px" class="demo-ruleForm container">
    <el-form-item prop="username">
      <el-input type="text" placeholder="Username" auto-complete="off" v-model.number="registration.username"></el-input>
    </el-form-item>
    <el-form-item prop="email">
      <el-input type="email" placeholder="Email" auto-complete="off" v-model.number="registration.email"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" placeholder="Password" v-model="registration.password" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item prop="confirmation">
      <el-input type="password" placeholder="Confirm Password" v-model="registration.confirmation" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="submitForm('registration')" :loading="registering">Submit</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Username is required'));
        } else {
          callback();
        }
      };
      var validateEmail = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Email is required'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Password is required'));
        } else {
          if (this.registration.confirmation !== '') {
            this.$refs.registration.validateField('confirmation');
          }
          callback();
        }
      };
      var validateConfirmation = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Confirm password'));
        } else if (value !== this.registration.password) {
          callback(new Error('Paswords don\'t match!'));
        } else {
          callback();
        }
      };
      return {
        registering: false,
        registration: {
          username: '',
          password: '',
          confirmation: '',
          email: ''
        },
        rules: {
          username: [{
            validator: validateUsername,
            trigger: 'blur'
          }],
          password: [{
            validator: validatePassword,
            trigger: 'blur'
          }],
          confirmation: [{
            validator: validateConfirmation,
            trigger: 'blur'
          }],
          email: [{
            validator: validateEmail,
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$notify({
              title: 'Registered',
              message: 'Consider yourself registered',
              type: 'success'
            });
            this.resetForm('registration')
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>

<style scoped>
  .container {
    color: #F9FAFC;
    padding: 15px;
  }
</style>
