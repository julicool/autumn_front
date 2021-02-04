<template>
  <div>
    <ul>
      <nuxt-link to="/">
        <li><i class="el-icon-s-home"/>主页</li>
      </nuxt-link>
      <nuxt-link to="/ArticleList">
        <li><i class="el-icon-notebook-1"/>日记</li>
      </nuxt-link>
      <nuxt-link to="/">
        <li><i class="el-icon-collection"/>笔记</li>
      </nuxt-link>
      <nuxt-link to="/">
        <li><i class="el-icon-camera-solid"/>摄影</li>
      </nuxt-link>
      <nuxt-link to="/">
        <li><i class="el-icon-mic"/>杂谈</li>
      </nuxt-link>
    </ul>

  </div>

</template>

<script>
  export default {
    name: "Menu"
  }
</script>

<style lang="scss" scoped>
  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      padding: 15px 0 20px 40px;

      &:hover {
        background-color: #F7F8FB;
      }

      i {
        margin-right: 15px;
      }
    }
  }

</style>
