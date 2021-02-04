<template>
  <div style="margin: 40px auto;">
    <el-row type="flex" justify="center">
      <el-col>
        <h1>日记</h1>
        <p><i class="el-icon-date"/>最近更新日期：2020年09月12日</p>
      </el-col>
    </el-row>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-table :data="artList" :show-header=false style="height: 60vh">
          <el-table-column prop="id" label="id" width="70px"></el-table-column>
          <el-table-column label="标题">
            <template slot-scope="scope">
              <nuxt-link :to="'/Article?id=' + scope.row.id"> {{ scope.row.title }}</nuxt-link>
            </template>
          </el-table-column>
          <el-table-column prop="createAt" label="日期" width="120px"></el-table-column>
          <el-table-column prop="weather" label="标签" width="70px"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <div style="text-align: center;margin-top: 4vh">
      <el-pagination
        :background=false
        layout="prev, pager, next"
        :current-page.sync="page"
        @current-change="getDairyList('',tomorrowDate,page,10)"
        :total='artListTotal'>
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import { mapMutations, mapState } from "vuex";
  export default {
    name: "ArticleList",
    data() {
      return {
        page: 1,
        tomorrowDate: ''
      }
    },
    fetch( {store} ){
      return store.dispatch('getTomorrow');
    },
    computed:{
      ...mapState({
        artList: state => state.dairy.dairyList,
        artListTotal: state => state.dairy.dairyTotal,
      }),
    },
    methods:{
      getDairyList(startDate,endDate,page,pageSize){
        console.log(this.tomorrowDate)

        this.$store.dispatch('dairy/getDairyList',{startDate,endDate,page,pageSize})
      }
    },
    mounted() {
      this.tomorrowDate = this.$store.state.tomorrow;
      this.getDairyList('',this.tomorrowDate,1,10);
    }
  }
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
    text-align: center;
    &:last-child {
      margin-bottom: 0;
    }
  }

  h1 {
    font-weight: initial;
    font-size: 30px;
  }

  p {
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 7vh;
  }

  i {
    margin-right: 10px;
  }


</style>
