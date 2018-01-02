<template>
  <div>
    <select class="sel" name="" v-show="$route.path =='/' ? true : false"> 
      <option value="">城市</option>
      <option value="广州">广州</option>
      <option value="上海">上海</option>
      <option value="福建">福建</option>
      <option value="厦门">厦门</option>
    </select>
    <i class="iconfont icon-fangdajing" v-show="$route.path =='/' ? true : false"></i>
    <span v-show="$route.path =='/cart' ? true : false">编辑</span>
    <div class="top" >{{message}}</div>
  </div>
</template>


<script>

  export default {
    data() {
      return {
          // title:"生活一家",
      }
      
    },
    props:['message'],
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
select{
  /*清除select默认边框*/
  appearance:none;
  width: auto;
  padding: 0 0.5%;
  margin: 0;
}

.top{
  height: 60px;
  display: block;
  background: rgb(288,188,14);
  line-height: 60px;
  color: #fff;
  text-align: center;
  font-size: 24px;
}
.sel{
  position: absolute;
  border: none;
  background: none;
  outline: none;
  top: 20px;
  left: 14px;
  color: #fff;
  font-size: 22px;
}
option{
  background: rgb(288,188,14);
  text-align: center;
}
i,span{
  font-size: 1.8em;
  position: absolute;
  top: 14px;
  right: 14px;
  color: #fff;
}
</style>
