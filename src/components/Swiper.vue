

<template>
   
    <div>
        <swiper :options="swiperOption" >
            <swiper-slide v-for="slide in swiperSlides" class="banner">
                <img v-bind:src="slide.url" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

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
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
        { url: require("../assets/1.jpg"), name: "a" },
        { url: require("../assets/2.jpg"), name: "a" },
        { url: require("../assets/3.jpg"), name: "a" },
        { url: require("../assets/4.jpg"), name: "a" },
        { url: require("../assets/3.jpg"), name: "a" }
      ]
    };
  },
  // 轮播小点
  mounted() {
    setInterval(() => {
      // console.log('simulate async data')
      if (this.swiperSlides.length < 5) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000);
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
