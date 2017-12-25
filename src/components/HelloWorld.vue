  

<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSlides" class="banner">I'm Slide {{ slide }}</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>


<script>
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

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
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {
      setInterval(() => {
        console.log('simulate async data')
        if (this.swiperSlides.length < 6) {
          this.swiperSlides.push(this.swiperSlides.length + 1)
        }
      }, 3000)
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
.banner{
  width: 700px;
  height: 300px;
  background: red;
}
</style>
