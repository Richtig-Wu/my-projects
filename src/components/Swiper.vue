

<template>
        <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="slide in swiperSlides" class="banner" >
                <img v-bind:src="slide.url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
</template>


<script>
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

// require styles
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "carrousel",
  // 轮播图片
  data() {
    return {
      swiperOption: {
        //delay,停留时间
        autoplay: { delay: 2500,disableOnInteraction: false },
        speed: 1000, //速度
        loop: true, //循环
        initialSlide: 1000,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: false, //修改swiper的父元素时，自动初始化swiper
        pagination: {
          el: ".swiper-pagination",
        }
      },
      swiperSlides: [
        { url: require("../assets/1.jpg"), name: "a" },
        { url: require("../assets/2.jpg"), name: "a" },
        { url: require("../assets/3.jpg"), name: "a" },
        { url: require("../assets/4.jpg"), name: "a" },
        { url: require("../assets/5.jpg"), name: "a" },
        { url: require("../assets/6.jpg"), name: "a" },
        { url: require("../assets/7.jpg"), name: "a" }
      ]
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner img {
  width: 100%;
  height: 100%;
  background: red;
  background-size: contain;
}
</style>
