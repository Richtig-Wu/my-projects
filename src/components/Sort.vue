<template>
  <div>   
    <div class="box">
      <div  class="main" >
        <ul>
          <li class="box-l" type="button" @click="sort">生活食品</li>
          <li class="box-c" type="button" @click="sort1">价格从高到低</li>
          <li class="box-r" type="button" @click="sort2">销量优先</li>
        </ul>
      </div>

      <div v-show="nons" class="nav">
        <ul>
          <li>美食</li>
          <li>美酒</li>
          <li>家居</li>
          <li>百货</li>
          <li>家电</li>
          <li>汽车配件</li>
          <li>箱包</li>
          <li>珠宝</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nons: false
    };
  },
  methods: {
    sort: function() {
      this.nons = !this.nons;
    },
    sort1: function() {

    },
    sort2: function() {

    }  
  },
    
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
/* .box{
width: 100%;
height:150px;
background: blue;
} */
.main {
  width: 100%;
  height: 30%;
  background: red;
  display: block;
}
.main li{
  width: ;
  display: inline-block;
  background: blue;
}
.nav ul li {
  width: 17%;
  float: left;
  background: #f2f2f2;
  border-radius: 5px;
  padding: 1%;
  margin: 3%;
  text-align: center;
  font-size: 0.9em;
}
</style>
