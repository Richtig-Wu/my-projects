<template>
    <div>
      <Top message="健康资讯"></Top>
      <!-- <Sort/> -->
      <!-- <div class="vip">
        <Vip/>
      </div> -->
      <Fot/>
    </div>
</template>


<script>
// 顶部组件
import Top from "@/components/Top";
// 底部导航
import Fot from "@/components/Foot";
// 分类过滤
import Sort from "@/components/Sort";
// 分类内容
import Vip from "@/components/Vipmain";

export default {
  data() {
    return {};
  },
  components: {
    Top: Top,
    Fot: Fot,
    Sort: Sort,
    Vip:Vip
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vip{
  margin-top: 1%;
}
</style>
