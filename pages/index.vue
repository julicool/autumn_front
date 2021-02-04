<template>
<div>
  <H2>正文部分</H2>
  <p>{{ name }} </p>
  <el-button @click="sayHello">说你好</el-button>

</div>


</template>

<script>
  import { mapMutations } from "vuex";

  export default {
    computed:{
      name () {
        return this.$store.state.name;
      }
    },
    methods:{
      ...mapMutations([
        'sayHello'
      ])
    }
  }
</script>

<style>

</style>
