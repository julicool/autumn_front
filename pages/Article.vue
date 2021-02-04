<template>
  <div id="article">
    <el-row type="flex" justify="left">
      <el-col>
        <div id="title">{{ dairyDetail.title }}</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p id="label">
          <i class="el-icon-date"/>{{ dairyDetail.createAt }}
          <el-divider direction="vertical"></el-divider>
          <i class="el-icon-sunrise"/> {{ dairyDetail.weather }}
          <el-divider direction="vertical"></el-divider>
          <i class="el-icon-location-information"/> {{ dairyDetail.location }}
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div id="content" v-html='dairyDetail.content'>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {mapMutations, mapState} from "vuex";

  export default {
    name: "Article",
    computed: {
      ...mapState({
        dairyDetail: state => state.dairy.dairyDetail,
      })
    },
    mounted() {
      this.$store.dispatch('dairy/getDairyById',{'id': this.$route.query.id})
    }
  }
</script>

<style lang="scss">

  #article {
    padding: 50px 40px 50px 40px;
  }

  #content img {
    width: 100%;
    height: 100%;
  }

  #title {
    font-weight: initial;
    font-size: 25px;
  }

  i {
    margin-right: 5px;
  }

  #label {
    font-weight: lighter;
    font-size: 14px;
  }

</style>
