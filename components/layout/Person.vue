<template>
  <div id="Person">
    <el-row>
      <el-col class="portrait">
        <el-image src="portrait.jpg" fit="cover"></el-image>
      </el-col>
      <el-col class="introduce">
        <div>
          <p>大学之道，在明明德，在亲民，在止于至善</p>
        </div>
      </el-col>
    </el-row>
  </div>

</template>

<script>
  export default {
    name: "Person"
  }
</script>

<style lang="scss" scoped>

  .portrait {
    height: 27vh;
  }

  /deep/ .el-image {
    border-radius: 4px 4px 0 0;
    height: 27vh;
  }

  .introduce {
    height: 8vh;
    border-radius: 0 0 4px 4px;
    padding: 0 20px 0 20px;
    div {
      text-align: center;
      p {
        font-size: 13px;
        font-weight: bold;
        color: black;
        margin-top: 2vh
      }
    }
  }



</style>
