<template>
    <div>
      <div class="item_img">
        <!--<img  class="img-circle" :src=img />-->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-preview="handleAvatarSuccess"
          >
          <!--&gt;      :before-upload="beforeAvatarUpload"-->
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="item_name">{{form.name}}</div>
      <div class="item_info">
        <ul>
          <li>
            <i class="el-icon-document"></i>
            {{form.sex}} {{form.age}} {{form.degree}}  {{form.city}}
          </li>
          <li>
            <i class="el-icon-edit-outline"></i>
            {{form.major}}   {{form.school}}
          </li>
          <li>
            <i class="el-icon-phone-outline"></i>
            {{form.phone}}
            &nbsp;&nbsp; {{form.email}}
          </li>
        </ul>
        <div>
          <el-button type="primary" plain @click="dialogVisible = true">修改</el-button>

          <el-dialog
            title="个人信息"
            :visible.sync="dialogVisible"
            width="600px"
            >

          <div class="form_content">
            <el-form ref="form" :model="form" :rules="rules" label-width="80px">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio-group v-model="form.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="年龄" prop="age">
                <el-col :span="10">
                  <el-input v-model="form.age"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="毕业学校" prop="school">
                <el-input v-model="form.school"></el-input>
              </el-form-item>
              <el-form-item label="专业" prop="major">
                <el-input v-model="form.major"></el-input>
              </el-form-item>
              <el-form-item label="联系电话" prop="phone">
                <el-input v-model="form.phone"></el-input>
              </el-form-item>
              <el-form-item label="电子邮箱" prop="email">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
              <!--<el-form-item>-->
                <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
                <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
              <!--</el-form-item>-->
            </el-form>
          </div>

            <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm('form')">取 消</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>

          </el-dialog>

        </div>
      </div>
    </div>
</template>

<script>
  import img from "@/assets/img2.jpg"
    export default {
        name: 'user-info',
      data(){
          return{
            imageUrl: img,
            dialogVisible: false,
            form:{
              name:'张三',
              sex:'男',
              age: 22 ,
              city:'广州',
              major:'计算机',
              school:'广州大学',
              phone:'18826054780',
              email:"617851736@qq.com"
            },
            rules:{
              name: [
                { required: true, message: '请输入姓名', trigger: 'blur' }
              ],
              sex: [
                { required: true, message: '请选择性别', trigger: 'blur' }
              ],
              age: [
                { required: true, message: '请输入年龄', trigger: 'blur' },
                { type: 'number', message: '年龄必须为数字值', trigger: 'blur'}
              ],
              city: [
                { required: true, message: '请输入所在城市', trigger: 'blur' }
              ],
              major: [
                { required: true, message: '请输入专业', trigger: 'blur' }
              ],
              school: [
                { required: true, message: '请输入学校', trigger: 'blur' }
              ],
              phone: [
                { required: true, message: '请输入联系电话', trigger: 'blur' }
              ],
              email: [
                { required: true, message: '请输入电子邮箱', trigger: 'blur' }
              ]
            }
          }
      },
      methods:{
        handleAvatarSuccess(file) {
          this.imageUrl = file.url;
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              this.dialogVisible = false
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.name='张三'
          this.form.sex='男'
          this.form.age=22
          this.form.city='广州'
          this.form.major='计算机'
          this.form.school='广州大学'
          this.form.phone='18826054780'
          this.form.email="617851736@qq.com"
          this.dialogVisible = false
        }
      }
        // beforeAvatarUpload(file) {
        //   const isJPG = file.type === 'image/jpeg';
        //   const isLt2M = file.size / 1024 / 1024 < 2;
        //
        //   if (!isJPG) {
        //     this.$message.error('上传头像图片只能是 JPG 格式!');
        //   }
        //   if (!isLt2M) {
        //     this.$message.error('上传头像图片大小不能超过 2MB!');
        //   }
        //   return isJPG && isLt2M;
        // }
    }
</script>

<style scoped>
  .item_img{
    width: 600px;
    margin: 20px auto;
    background-color: white;
  }
  .img-circle{
    width: 100px;
    height: 110px;
  }
  .item_name{
    font-size: large;
    margin-top: 10px;
  }
  .item_info{
    margin: 10px;
  }
  .item_info>ul{
    list-style: none;
  }
  .item_info>ul>li{
    /*list-style: none;*/
    margin: 10px 0 10px 0;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .form_content{
    width: 300px;
    margin: 0 auto;
    text-align: left;
  }
</style>
