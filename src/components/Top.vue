<template>
  <div>

    <nav class="navbar navbar-default top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
    <!-- 导航按钮  -->
      <button type="button" class="navbar-toggle collapsed btn" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">{{message}}</a>
    </div>

    <div class="collapse navbar-collapse mynav" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav mynav-s">
        <li><a href="#">首页</a></li>
        <li class="dropdown" >
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">医院概况<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">新闻中心<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">专家团队 <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">党政建设<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">教学教研<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">就医指南<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">合作交流<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">本院动态</a></li>
            <li><a href="#">健康资讯</a></li>
            <li><a href="#">医院公告</a></li>
            <li><a href="#">成功案例</a></li>
            <li role="separator" class="divider"></li>
          </ul>
        </li>
        <li><a href="#">在线咨询</a></li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
  </div>
</template>


<script>
export default {
  data() {
    return {
      navs:[
        // {title:"医院概况"},
        // {title:"新闻中心"}
      ]
    };
  },
  props: ["message"]
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top{
  background: #009ed9;
  color: #fff;
}
.mynav{
  width: 100%;
  position: absolute;
  background: rgba(255, 255, 255, 0.9);

}
.navbar{
  margin: 0;
}
.navbar-brand{
  color: #fff;
}
/* 导航按钮  */
.btn {
  width: 3.5em;
  height: 2.5em;
  outline:none;
}
.navbar-toggle:focus{
  background: #fff;
}
.foots{
  font-size: 1em;
}
</style>
        