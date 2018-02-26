<template>
<div>
  <div class="content">
    <span class="name">{{form.name}}</span>
    <span class="type">{{form.type}}</span>
    <span class="city">{{form.city}}</span>
    <span class="salary">{{form.salary}}</span>
    <br>
    <br>
    <span class="add">补充:</span>
    <span v-show="form.supplement!== ''" class="supplement">{{form.supplement}}</span>
  </div>

  <div>
    <el-button type="primary" plain @click="dialogVisible = true">修改</el-button>

    <el-dialog
      title="期望工作"
      :visible.sync="dialogVisible"
      width="600px"
    >

      <div class="form_content">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="类型" prop="type">
            <el-col :span="10">
              <el-select v-model="form.type" placeholder="请选择工作类型" >
                <el-option label="实习" value="实习"></el-option>
                <el-option label="兼职" value="兼职"></el-option>
                <el-option label="全职" value="全职"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="城市" prop="city">
            <el-input v-model="form.city"></el-input>
          </el-form-item>
          <el-form-item label="工资" prop="salary">
            <el-col :span="10">
              <el-select v-model="form.salary" placeholder="请选择工资" >
                <el-option label="2k以下" value="2k以下"></el-option>
                <el-option label="2k-5k" value="2k-5k"></el-option>
                <el-option label="5k-10k" value="5k-10k"></el-option>
                <el-option label="10k-15k" value="10k-15k"></el-option>
                <el-option label="15k-25k" value="15k-25k"></el-option>
                <el-option label="25k-50k" value="25k-50k"></el-option>
                <el-option label="50k以上" value="50k以上"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="补充信息" prop="supplement">
            <el-input type="textarea" v-model="form.supplement"></el-input>
          </el-form-item>
          <!--<el-form-item>-->
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
          <!--</el-form-item>-->
        </el-form>
      </div>

      <span slot="footer" class="dialog-footer">
              <el-button @click="resetForm">取 消</el-button>
              <el-button type="primary" @click="submitForm('form')">确 定</el-button>
            </span>

    </el-dialog>
  </div>

</div>
</template>

<script>
    export default {
        name: "user-work",
      data(){
          return{
            dialogVisible: false,
            form:{
              name:'java工程师',
              type:'实习',
              city:'广州',
              salary:'2k-5k',
              supplement:'努力转正'
            },
            rules:{
              name: [
                { required: true, message: '请输入岗位名称', trigger: 'blur' }
              ],
              type: [
                { required: true, message: '请选择工作类型', trigger: 'blur' }
              ],
              city: [
                { required: true, message: '请输入工作城市', trigger: 'blur' }
              ],
              salary: [
                { required: true, message: '请选择工资', trigger: 'blur' }
              ]
            }
          }
      },
      methods:{
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              // alert('submit!');
              this.dialogVisible = false
            } else {
              return false;
            }
          });
        },
        resetForm() {
          this.form.name='java工程师'
          this.form.type='实习'
          this.form.city='广州'
          this.form.salary='2k-5k'
          this.form.supplement='努力转正'
          this.dialogVisible = false
        }
      }
    }
</script>

<style scoped>
.content{
  width: 550px;
  height: 120px;
  border: ghostwhite solid 1px;
  margin: 20px auto;
  text-align: left;
  border-radius: 3px;
  background-color: ghostwhite;
}
  .name{
    font-size: large;
    font-weight: bold;
    display: inline-block;
    margin: 20px 0 0 50px;
  }
  .city{
    display: inline-block;
    margin: 20px 0 0 10px;
  }
  .type{
    display: inline-block;
    margin: 20px 0 0 10px;
  }
  .salary{
    display: inline-block;
    margin: 10px 0 0 200px;
    color: red;
  }
  .add{
    /*display: block;*/
    margin: 20px 0 0 50px;
  }
  .supplement{
    /*display: block;*/
    margin: 10px 0 0 10px;
  }
.form_content{
  width: 400px;
  margin: 0 auto;
  text-align: left;
}
</style>
