<template>
    <div class="body">
        <div class="vip">
            <div class="vbox vtext" v-for="v in vips">
                <img v-bind:src="v.url" alt="">
                    <span>{{v.span}}</span><br> 
                    <span id="money">{{v.money}}</span>
                    <span class="del">&nbsp; 原价:<del>{{v.del}}</del></span> 
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
  data() {
    return {
      vips: [
        {
          url: require("../assets/vip1.jpg"),
          span: "休闲零食五味园pk脆独立小包装500g",
          money: "￥10.9",
          del: "￥12.8"
        },
        {
          url: require("../assets/vip2.jpg"),
          span: "坚果特产山核桃奶油味碧根果210gx2袋",
          money: "￥29.5",
          del: "￥42.5"
        },
        {
          url: require("../assets/vip3.jpg"),
          span: "家居生活懒人日用品百 货实用礼物",
          money: "￥680",
          del: "￥785"
        },
        {
          url: require("../assets/vip4.jpg"),
          span: "安安金 薰衣草精油舒缓 安睡沐浴露750g ",
          money: "￥38.5",
          del: "￥48"
        },
        {
          url: require("../assets/vip1.jpg"),
          span: "休闲零食五味园pk脆独立小包装500g",
          money: "￥10.9",
          del: "￥12.8"
        },
        {
          url: require("../assets/vip2.jpg"),
          span: "坚果特产山核桃奶油味碧根果210gx2袋",
          money: "￥29.5",
          del: "￥42.5"
        },
        {
          url: require("../assets/vip3.jpg"),
          span: "家居生活懒人日用品百 货实用礼物",
          money: "￥680",
          del: "￥785"
        },
        {
          url: require("../assets/vip4.jpg"),
          span: "安安金 薰衣草精油舒缓 安睡沐浴露750g ",
          money: "￥38.5",
          del: "￥48"
        },
        {
          url: require("../assets/vip1.jpg"),
          span: "休闲零食五味园pk脆独立小包装500g",
          money: "￥10.9",
          del: "￥12.8"
        },
        {
          url: require("../assets/vip2.jpg"),
          span: "坚果特产山核桃奶油味碧根果210gx2袋",
          money: "￥29.5",
          del: "￥42.5"
        },
        {
          url: require("../assets/vip3.jpg"),
          span: "家居生活懒人日用品百 货实用礼物",
          money: "￥680",
          del: "￥785"
        },
        {
          url: require("../assets/vip4.jpg"),
          span: "安安金 薰衣草精油舒缓 安睡沐浴露750g ",
          money: "￥38.5",
          del: "￥48"
        }
      ]
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: "微软雅黑";
  margin: 0;
  padding: 0;
}
.body {
  width: 100%;
  /* height: 100%; */
  position: absolute;
  background: #f2f2f2;
  margin-top: -1%;
  padding-bottom: 18%;
}
.vip {
  padding: 3%;
}
.vbox {
  width: 40%;
  float: left;
}
.vbox:nth-child(2n) {
  margin-left: 2%;
}

img {
  width: 100%;
  margin-bottom: 2%;
}
del,
.del {
  color: #a1a2a3;
}
.vtext {
  padding: 0 4.5%;
  font-size: 0.9em;
  background: #fff;
  margin-bottom: 2%;
}
.vtext span:nth-child(2) {
  font-weight: 600;
  display: inline-block;
}

#money {
  color: red;
  padding: 0.5em 0;
  display: inline-block;
}
</style>
