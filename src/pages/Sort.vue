<template>
    <div>
      <Top message="分类"></Top>
      <Sort></Sort>
      <Fot></Fot>
    </div>
</template>


<script>
// 顶部组件
import Top from "@/components/Top";
// 底部导航
import Fot from "@/components/Foot";
// 分类内容
import Sort from "@/components/Sort";

export default {
  data() {
    return {};
  },
  components: {
    Top: Top,
    Fot: Fot,
    Sort:Sort
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
