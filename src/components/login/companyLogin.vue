<template>
  <div class="box">
    <h1 class="tab">企业登陆</h1>
    <div class="input-login">
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="user">
          <el-input v-model="form.user" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  class="login"  @click="btnSubmit('form')">登陆</el-button>
          <router-link to="/reg"><el-button type="primary"  class="login"  >注册</el-button></router-link>
        </el-form-item>
      </el-form>
    </div>
    <div class="reg">
      <router-link to="/login">用户登陆 > </router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "company-login",
      data() {
        return{
          form:{
            user: '',
            password: ''
          },
          rules: {
            user: [
              {required: true, message: '请输入账号', trigger: 'blur'}
            ],
            password: [
              {required: true, message: '请输入密码', trigger: 'blur'}
            ],
          }
        }
      },
      methods: {
        btnSubmit:function (form) {
          // console.log("1231231")
          this.$refs[form].validate((valid) => {
            if (valid) {
              window.location.href='/home.html#/companyInfoPage'
            } else {
              this.$message.error('账号/密码 不能为空');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 350px;
    width: 350px;
    position: relative;
    top: 20%;
    transform: translateY(-50%);
    margin: 0 auto;
    background-color: whitesmoke;
    text-align: center;
  }

  .tab{
    font-weight:bold;
    width: 80%;
    margin: 30px auto;
    padding-top: 20px;
    color: #31b0d5;
    text-align: center;
    letter-spacing: 2px;
  }

  .input-login{
    width: 280px;
    margin: 0 auto;
  }

  .login{
    width: 80px;
    margin-top: 10px;
  }

  .reg{
    text-align: right;
    margin: 0 20px;
  }

  .reg>a{
    color: dodgerblue;
    text-decoration: none;
  }

</style>
