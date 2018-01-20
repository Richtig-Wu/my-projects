<template>
    <div class="foots">
        <!-- <p>sad</p> -->
        <div class="foot clearfix">
                <ul>
                <li v-for="foot in foots">
                    <router-link v-bind:to="foot.path" exact>
                        <i v-bind:class="foot.icfont"></i><br>
                        <span>{{foot.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      foots: [
        { icfont: "iconfont icon-zhengtaofangzi", name: "首页", path: "/" },
        { icfont: "iconfont icon-liwuhe", name: "本院动态", path: "/vip" },
        { icfont: "iconfont icon-fenlei", name: "健康资讯", path: "/sort" },
        { icfont: "iconfont icon-icon", name: "医院公告", path: "/cart" },
        {
          icfont: "iconfont icon-geren-copy-copy-copy",
          name: "在线查询",
          path: "/me"
        }
      ]
    };
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
  margin: 0;
  list-style: none;
}
a {
  text-decoration: none;
  color: #666;
}
/*  清除浮动css */
.clearfix:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
}
.clearfix {
  zoom: 1;
}
.foots {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: -1.1%;
  border-top: 1px solid #e9e9e9;
}
.foot {
  background: #fdfbfb;
  padding: 2.5%;
}
.foot ul {
}
.foot li {
  width: 20%;
  float: left;
  text-align: center;
}
i {
  font-size: 1.8em;
  font-weight: 500;
}
span {
  font-size: 0.9em;
  font-weight: 500;
}
/* 字体图标 */

a.router-link-active {
  color: rgb(253, 193, 63);
}
</style>
