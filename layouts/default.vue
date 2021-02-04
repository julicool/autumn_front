<template>
  <div class="counter">
    <el-container>
      <el-container>
        <el-aside id="aside" width="19vw">
          <el-row>
            <el-col>
              <div class="layout_card_1">
                <Person></Person>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col>
              <div class="layout_card_2">
                <Menu></Menu>
                <hr style="border: 0.5px #D2D2D2 dotted; width: 80%">
              </div>
            </el-col>
          </el-row>
        </el-aside>
        <el-container>
          <div width="70vw" id="main">
            <el-main>
              <nuxt/>
            </el-main>
          </div>
        </el-container>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Person from "../components/layout/Person";
  import Menu from "../components/layout/Menu";

  export default Vue.extend({
    data() {
      return {}
    },
    components: {
      Person,
      Menu,
    }
  })
</script>

<style lang="scss" scoped>
  .counter {
    width: 72vw;
    margin: 0 auto;
    border-radius: 4px;
  }

  #main {
    width: 52.5vw;
    min-height: 97vh;
    border-radius: 4px;
    margin: 3px 0 3px auto;
    background: white;
    box-shadow: 0 0 3px #A2A4A6;
  }

  #aside {
    position: fixed;
    top: 8px;
    z-index: 9999;
    padding: 3px 3px 3px 0px;
  }

  %layout_card {
    background: white;
    border-radius: 4px;
    box-shadow: 0 0 3px #A2A4A6;
  }

  .layout_card_1 {
    @extend %layout_card;
    height: 34vh;
    margin-bottom: 10px;
  }

  .layout_card_2 {
    @extend %layout_card;
    height: 58vh;
    padding: 20px 0 20px 0;
  }


</style>
