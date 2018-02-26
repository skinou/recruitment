<template>
<div>

  <ul class="edu_ul">
    <li v-for="(item , index) in eduData">
      <div class="edu_content">
        <span class="school">{{item.school}}</span>
        <span class="degree">{{item.degree}} · {{item.major}}</span>
        <span class="time">{{item.start}}  - {{item.end}}</span>
      </div>
      <div class="edu_content_btn">
        <el-button type="danger" plain size="small" @click="deleteRow(index,eduData)">删除</el-button>
      </div>
    </li>
  </ul>

  <div>
    <el-button type="primary" plain @click="dialogVisible = true">添加</el-button>

    <el-dialog
      title="教育经历"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="毕业学校" prop="school">
            <el-input v-model="form.school"></el-input>
          </el-form-item>
          <el-form-item label="专业" prop="major">
            <el-input v-model="form.major"></el-input>
          </el-form-item>
          <el-form-item label="学位" prop="degree">
            <el-select v-model="form.degree" placeholder="请选择活学位" >
              <el-option label="大专" value="大专"></el-option>
              <el-option label="本科" value="本科"></el-option>
              <el-option label="硕士" value="硕士"></el-option>
              <el-option label="博士" value="博士"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="开始日期" prop="start">
            <el-col :span="13">
              <el-date-picker type="date" placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd"
                              v-model="form.start" style="width: 100%;"
              ></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="结束日期" prop="end">
            <el-col :span="13">
              <el-date-picker type="date" placeholder="选择日期"
                              format="yyyy 年 MM 月 dd 日"
                              value-format="yyyy-MM-dd"
                              v-model="form.end" style="width: 100%;"
              ></el-date-picker>
            </el-col>
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
</template>

<script>
    export default {
      name: "user-education",
      data(){
          return{
            eduData:[
              {
                school:'广州大学',
                degree:'本科',
                major:'计算机',
                start:'2014.09.01',
                end:'2018.06.25'
              }
            ],
            form:{
              school:'',
              degree:'',
              major:'',
              start:'',
              end:''
            },
            rules:{
              major: [
                { required: true, message: '请输入专业', trigger: 'blur' }
              ],
              school: [
                { required: true, message: '请输入学校', trigger: 'blur' }
              ],
              degree: [
                { required: true, message: '请选择学位', trigger: 'blur' }
              ],
              start: [
                { required: true, message: '请选择时间', trigger: 'blur' }
              ],
              end: [
                { required: true, message: '请选择时间', trigger: 'blur' }
              ]
            },
            dialogVisible: false
          }
      },
      methods:{
        deleteRow(index, rows) {
          rows.splice(index, 1);
        },
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              this.dialogVisible = false
              var obj={
                school:this.form.school,
                degree:this.form.degree,
                major:this.form.major,
                start:this.form.start,
                end:this.form.end,
              }
              this.eduData.push(obj)
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        },
        resetForm(formName) {
          this.$refs[formName].resetFields();
          this.form.school=''
          this.form.degree=''
          this.form.major=''
          this.form.start=''
          this.form.end=''
          this.dialogVisible = false
        }
      }
    }
</script>

<style scoped>
  .edu_ul{
    width: 600px;
    padding-left: 0;
    list-style: none;
    margin: 20px auto;
  }
  .edu_ul>li{
    width: 600px;
    height: 100px;
    background-color: ghostwhite;
    border: whitesmoke solid 2px;
    border-radius: 5px;
    margin: 10px 0 10px 0;
  }
  .edu_content {
    width: 310px;
    height: 60px;
    margin: 20px 0 0 60px;
    /*display: inline-block;*/
    float: left;
    text-align: left;
  }
  .edu_content_btn{
    width: 140px;
    height: 40px;
    margin: 20px 20px 20px 50px;
    /*display: inline-block;*/
    float: left;
  }
  .school{
    font-size: large;
    margin-right: 20px;
  }
  .degree{
    font-size: small;
  }
  .form_content{
    width: 400px;
    margin: 0 auto;
    text-align: left;
  }
  .time{
    display: block;
    margin: 8px 0 0 10px;
    font-size: small;
  }
</style>
