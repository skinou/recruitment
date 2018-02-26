<template>
    <div id="app">

      <div class="header">
        <div class="header-tab">
          <a class="companyEntrance" href="/index.html'"> < 企业入口</a>
          <router-link class="userEntrance" to="/userPage" @click.native="getActive=0">张三</router-link>
          <router-link class="userEntrance" to="/deliveryPage" @click.native="getActive=0">投递箱</router-link>
          <router-link class="userEntrance" to="/userPage" @click.native="getActive=0">个人简历</router-link>
        </div>
        <!--<el-menu :default-active="active"  :router="true"  mode="horizontal">-->
          <!--<el-menu-item index="/" >首页</el-menu-item>-->
          <!--<el-menu-item index="/companyPage" >公司</el-menu-item>-->
        <!--</el-menu>-->
        <ul class="nav">
          <li :class="{'active': getActive === 1}" @click="getActive=1"><router-link to="/" >首页</router-link></li>
          <li :class="{'active': getActive === 2}" @click="getActive=2"><router-link to="/companyPage" >公司</router-link></li>
        </ul>

      </div>
      <div class="body">
        <router-view/>
      </div>

      <div class="footer">
      </div>

    </div>
</template>

<script>
    export default {
      name: "App",
      data(){
        return{
          active1:false,
          active2:false,
          getActive:0

        }
      },
      created(){
        let test = window.location.hash;
        console.log(test)
        if(test==='#/'){
          this.getActive =1
        }
        else if(test==='#/companyPage'){
          this.getActive =2
        }
        else{
          this.getActive =0
          // this.active2=false
        }
      },
      // computed:{
      //   getActive(){
      //     // this.$nextTick(function () {
      //     //
      //     // })
      //
      //   },
      // },
      methods:{
        clear(){
          this.active1=false
          this.active2=false
        },
      }
    }
</script>

<style scoped>
  #app {
    /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*-webkit-font-smoothing: antialiased;*/
    /*-moz-osx-font-smoothing: grayscale;*/
    text-align: center;
    color: #2c3e50;
    /*margin-top: 60px;*/
  }
  .header{
    min-width: 1000px;
  }

  .userEntrance{
    float: right;
    color: white;
    cursor: pointer;
    margin: 4px 20px 0 0;
    font-size: small;
    text-decoration: none;
  }

  .companyEntrance{
    color: white;
    cursor: pointer;
    float: left;
    margin: 4px 0 0 20px;
    font-size: small;
    text-decoration: none;
  }

  .footer{
    min-width: 1000px;
    height: 80px;
    margin-top: 30px;
    background-color:whitesmoke;
  }

  .header-tab{
    height: 25px;
    background-color: #333333;
  }

  .el-menu{
    padding-left: 100px;
    height: 50px;
  }

  .el-menu>li{
    height: 50px;
  }
.nav{
  padding-left: 100px;
  height: 50px;
  list-style: none;
  margin: 0 0 0 0;
  min-width: 900px;
  text-align: left;
  border-bottom: solid 1px #e6e6e6;
}
  .nav>li{
    height: 48px;
    display: inline-block;
    line-height: 50px;
    cursor: pointer;
    white-space: nowrap;
    font-size: small;
  }

  .nav>li>a{
    display: inline-block;
    line-height: 50px;
    height: 48px;
    padding: 0 20px 0 20px;
    color: #303133;
    text-decoration: none;
  }


  .active {
    border-bottom: 2px solid #409EFF;

  }

</style>
