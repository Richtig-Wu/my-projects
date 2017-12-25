

<template>
  <div class="">
    <Top></Top>
    <swiper :options="swiperOption">
      <swiper-slide v-for="slide in swiperSlides" class="banner">
        <img v-bind:src="slide.url" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <Gao></Gao>
  </div>
</template>


<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 顶部组件
import Top from '@/components/Top'
// 广告组件
import Gao from '@/components/Guanggao'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper)
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'carrousel',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperSlides: [
        {"url":require("../assets/1.jpg"),"name":"a"},
        {"url":require("../assets/2.jpg"),"name":"a"},
        {"url":require("../assets/3.jpg"),"name":"a"},
        {"url":require("../assets/4.jpg"),"name":"a"},
        {"url":require("../assets/3.jpg"),"name":"a"},
    ]
    }
  },
  mounted() {
    setInterval(() => {
      // console.log('simulate async data')
      if (this.swiperSlides.length < 5) {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      }
    }, 3000)
  },
  components:{
      "Top":Top,
      "Gao":Gao,
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
a {
  color: #42b983;
}
.banner img{
  width: 100%;
  height: 100%;
  background: red;
  background-size: contain;
}
</style>
