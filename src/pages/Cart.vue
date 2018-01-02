<template>
    <div>
      <Top message="购物车"></Top>
      <Fot></Fot>
    </div>
</template>


<script>
// 顶部组件
import Top from "@/components/Top";
// 底部导航
import Fot from "@/components/Foot";

export default {
  data() {
    return {};
  },
  components: {
    Top: Top,
    Fot: Fot
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
