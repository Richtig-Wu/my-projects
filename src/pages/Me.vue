<template>
    <div>
      <Top message="在线查询"></Top>
      <!-- <My/> -->
      <Fot></Fot>
    </div>
</template>


<script>
// 顶部组件
import Top from "@/components/Top";
// 底部导航
import Fot from "@/components/Foot";
// Me内容
import My from "@/components/My";

export default {
  data() {
    return {};
  },
  components: {
    Top: Top,
    Fot: Fot,
    My:My
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
