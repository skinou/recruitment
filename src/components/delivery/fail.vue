<template>
  <div>
    <ul class="fail">
      <li v-for="(item,index) in getItemData" :key="index">
        <delivery-list-item :item="item" :pass="false" :fail="true"></delivery-list-item>
      </li>
    </ul>

    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="4"
      :current-page.sync="currentPage"
      :total="getPages">
    </el-pagination>
  </div>
</template>

<script>
  import deliveryListItem from '@/components/block/deliveryListItem'
  export default {
        name: "fail",
      components:{
        'delivery-list-item':deliveryListItem
      },
      computed: {
        getPages() {
          return this.list.length
        },
        getItemData() {
          let list = [...this.list]
          let start = 0
          let end = 4
          start += (this.currentPage - 1) * 4
          end += (this.currentPage - 1) * 4
          let arr = list.slice(start, end)
          return arr
        }
      },
      data(){
        return {
          currentPage: 1,
          list: [
            {
              job: 'java工程师',
              salary: '2k-3k',
              date: '2017.12.24',
              state: '不合适'
            },
            {
              job: 'php工程师',
              salary: '2k-3k',
              date: '2017.12.28',
              state: '不合适'
            },
            {
              job: 'java工程师',
              salary: '2k-3k',
              date: '2017.12.24',
              state: '不合适'
            }
          ]
        }
      }
    }
</script>

<style scoped>
  .fail{
    margin: 30px auto;
    list-style: none;
    padding:  0 0 0 0;
  }
  .fail>li{
    margin-top: 20px;
  }
</style>
