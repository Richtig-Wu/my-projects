<template>
  <div>   
    <div class="box">
      <div  class="main" >
        <ul>
          <li class="box-l" type="button" @click="sort">生活食品<i class="iconfont icon-xiajiantou"></i></li>
          <li class="box-c" type="button" @click="sort1">价格从高到低<i class="iconfont icon-xiajiantou"></i></li>
          <li class="box-r" type="button" @click="sort2">销量优先<i class="iconfont icon-xiajiantou"></i></li>
        </ul>
      </div>

      <div v-show="nons" class="nav">
        <ul>
          <li v-for="so in sot">{{so.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nons: false,
      sot: [
        { name: "美食" },
        { name: "美酒" },
        { name: "家居" },
        { name: "百货" },
        { name: "家电" },
        { name: "汽车配件" },
        { name: "箱包" },
        { name: "珠宝" }
      ]
    };
  },
  methods: {
    sort: function() {
      this.nons = !this.nons;
    },
    sort1: function() {},
    sort2: function() {}
  }
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

.main {
  width: 100%;
  height: 30%;
  /* background: red; */
  display: block;
}
.main ul {
  width: 100%;
  /* background: red; */
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  display: -webkit-flex;
}
.main li {
  width: 100%;
  font-size: 0.85em;
  padding: 3% 2%;
  text-align: center;
  justify-content: center;
  margin: 0;
}
.nav ul {
  width: 100%;
  height: 20%;
  background: #fff;
  position: absolute;
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
i {
  font-size: 0.9em;
  margin-left: 0.5em;
}
</style>

