<template>
    <div>
      <!-- top start -->
      <Top message="本院动态" />  
      <!-- banner -->
      <!-- <Swiper/> -->
      <!-- contain start -->
      <!-- <Main/> -->
      <!-- foot start -->
      <Fot/>
    </div>
</template>


<script>
// 顶部组件
import Top from "@/components/Top";
// 底部导航
import Fot from "@/components/Foot";
// 轮播组件
import Swiper from "@/components/Swiper";
// 内容
import Main from "@/components/Vipmain";

export default {
  data() {
    return {};
  },
  components: {
    Top: Top,
    Fot: Fot,
    Swiper: Swiper,
    Main: Main
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
