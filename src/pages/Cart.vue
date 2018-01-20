<template>
    <div>
      <div class="top">
        <Top message="医院公告"></Top>
      </div>
      <!-- <div>
        <Cart />
      </div> -->
      <Fot></Fot>
    </div>
</template>


<script>
// 顶部组件
import Top from "@/components/Top";
// 底部导航
import Fot from "@/components/Foot";
// 购物车内容
import Cart from "@/components/Cart";

export default {
  data() {
    return {};
  },
  components: {
    Top: Top,
    Fot: Fot,
    Cart:Cart
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  font-size: 0.8em;
}

</style>
