<template>
  <div class="login">
    <div class="card-content">
      <el-tabs>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i> LOGIN</span> 
          <login/>
        </el-tab-pane>
        <el-tab-pane label="REGISTER">
          <register/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Login from './login'
  import Register from './register'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
   
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      hhh() {}
    },
    components: {
      'login': Login,
      'register': Register,
    }
  };
</script>

<style scoped>
  .login {
    /* Set rules to fill background */
    min-height: 100%;
    min-width: 1024px;
    /* Set up proportionate scaling */
    width: 100%;
    height: auto;
    /* Set up positioning */
    position: fixed;
    top: 0;
    left: 0;
    background: #324057;
  
  }

  .card-content {
      width: 350px;
      padding: 40px 40px;
      position: relative;
      margin: 0;
      color: #F9FAFC;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      transform: translate(-50%, -50%)
    }
</style>
