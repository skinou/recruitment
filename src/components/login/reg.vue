<template>
  <div class="box">
    <h1 class="tab">注  册</h1>
    <!--<form class="reg_form">-->
      <!--<span>电话号码</span><input type="text" name="username" class="input-reg"><br>-->
      <!--<span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</span><input type="text" name="password" class="input-reg"><br>-->
      <!--<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名</span><input type="text" name="name" class="input-reg"><br>-->
      <!--<span>身 份 证</span><input type="text" name="id" class="input-reg"><br>-->
      <!--<button type="submit" class="btn_submit">提交</button>-->
    <!--</form>-->
    <el-form :model="form" :rules="rules" ref="form" label-width="80px" class="regForm">
      <el-form-item label="账号" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="身份证" prop="id">
        <el-input v-model="form.id"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="submitForm('form')">提交</el-button>
        <el-button @click="resetForm('form')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="back">
      <router-link to="/">< 登陆</router-link>
    </div>
  </div>
</template>

<script>
    export default {
      name: "reg",
      data () {
        return{
          form:{
            user: '',
            password: '',
            name: '',
            id: ''
          },
          rules: {
            user: [
              { required: true, message: '请输入账号', trigger: 'blur' },
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            name: [
              { required: true, message: '请输入姓名', trigger: 'blur' }
            ],
            id: [
              { required: true, message: '请输入身份证', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              this.$message({
                message: '注册成功',
                type: 'success'
              });
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
        }
      }
    }
</script>

<style scoped>
  .box{
    height: 450px;
    width: 500px;
    margin: 50px auto;
    position: relative;
    top: 20%;
    transform: translateY(-60%);
    background-color: whitesmoke;
  }
  .tab{
    font-weight:bold;
    width: 80%;
    margin: 20px auto;
    padding: 0 0 20px 0;
    color: #31b0d5;
    text-align: center;
    letter-spacing: 2px;
    display: inline-block;
  }
  .regForm{
    width: 350px;
    margin: 0 0 0 50px;
  }
  .back{
    height: 30px;
    text-align: left;
  }
  .back>a{
    margin: 0 0 0 10px;
    color: dodgerblue;
    text-decoration: none;
  }
</style>
