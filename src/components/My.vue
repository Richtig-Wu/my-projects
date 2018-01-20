<template>
    <div class="body">
      <!-- top start -->
        <div class="top">
          <img src="../assets/me.jpg" alt="">
          <div class="top_main">
            <div class="avatar">
              <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-zuanshi"></use>
              </svg>  
          </div>
          <span>凯丽_Kylie</span>
          <div class="vip">VIP会员</div>
          </div>
        </div>
        <!-- main start -->
        <div class="main"> 
          <ul>
            <li v-for="m in main"><i :class="m.icon" :style="{color:m.color}"></i>{{m.text}} <i :class="m.icon1"></i></li>
          </ul>
          <ul class="ul2">
            <li v-for="m1 in main1"><i :class="m1.icon" :style="{color:m1.color}"></i>{{m1.text}} <i :class="m1.icon1"></i></li>
          </ul>
        </div>        
    </div>
</template>


<script>
export default {
  data() {
    return {
      main:[
        {icon:"iconfont icon-fenlei1",color:"#fa627b",icon1:"iconfont icon-arrow-right i",text:"  基本资料"},
        {icon:"iconfont icon-dingdan",color:"#8fdb87",icon1:"iconfont icon-arrow-right i",text:"  我的订单"},
        {icon:"iconfont icon-xing",color:"#fc882a",icon1:"iconfont icon-arrow-right i",text:"  我的收藏"},
        {icon:"iconfont icon-qianbao",color:"#ea7a7a",icon1:"iconfont icon-arrow-right i",text:"  我的钱包"},
        {icon:"iconfont icon-gps",color:"#7fc9f8",icon1:"iconfont icon-arrow-right i",text:"  收货地址"},
        {icon:"iconfont icon-xunzhang",color:"#facf65",icon1:"iconfont icon-arrow-right i",text:"  升级会员"}
      ],
      main1:[
        {icon:"iconfont icon-shezhi",color:"#aa9186",icon1:"iconfont icon-arrow-right i",text:"  更多"},
        {icon:"iconfont icon-jinru",color:"#ff5555",icon1:"iconfont icon-arrow-right i",text:"  注销"}
      ]
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
}
.body {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -3;
  background: #f2f2f2;

}
.top {
  width: 100%;
}
.top img {
  width: 100%;
}
.top_main {
  position: absolute;
  top: 11%;
  left: 50%;
}
.avatar {
  width: 4.5em;
  height: 4.5em;
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: url("../assets/kylie.jpg") 49% 20%/200%;
}

.icon {
  width: 1.8em;
  height: 1.8em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  position: absolute;
  bottom: -10%;
  left: 60%;
}
span {
  margin-top: -10%;
  display: block;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.1em;
}
.vip {
  display: inline-block;
  padding-left: 0.7em;
  padding-right: 0.7em;
  margin-top: 15%;
  transform: translate(-50%, -50%);
  text-align: center;
  border: 1px solid #fff;
  border-radius: 13px;
  color: #fff;
  background: rgba(255, 255, 255, 0.28);
  font-size: 0.9em;
}
.main{

  margin-bottom: 20%;
}
.main ul{
  margin: 2% 0;
  padding: 0;
  padding: 0 5%;
  background: #fff
}
/* mian 字体图标 */
.main li{
  font-size:1.18em; 
  padding: 3% 0;
  border-top: 1px solid #dbd5d5; 
}
.main li:nth-child(1){
  border: none;
}
.main i{
  font-size: 1.1em;
}
.i{
  float:right;
  color: #a3a0a0;
}
</style>
