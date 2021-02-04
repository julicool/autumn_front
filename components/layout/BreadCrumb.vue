<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="bread in breadList">
      {{ bread }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
    export default {
        name: "BreadCrumb",
      data(){
          return {
            breadList:[
              "活动管理",
              "活动列表",
              "活动详情"
            ]
          }
      }
    }
</script>

<style scoped>

</style>
