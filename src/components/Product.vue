
<template>
<div>
   <div class="sales">
    <div v-for="pro in products"  class="product" >
        <img v-bind:src="pro.url" alt="">
        <p>{{pro.name}}</p>
    </div>
   </div>
</div>
</template>


<script>

  export default {
     data(){
         return{
            products:[
             {"url":require("../assets/1.jpg"),"name":"【10月抢购预告】 荣耀乐檬大神爆款 惊爆价"},
             {"url":require("../assets/2.jpg"),"name":"【劲爆开抢】 宝洁大礼包优惠前所未有"},
             {"url":require("../assets/3.jpg"),"name":"【神价再现】 GOD PRICE 华丽上市 "},
            ]
         }
     },
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sales{
    padding: 3%;
}
.product {
    width: 100%;
    height: 100%;
    background:rgb(250, 235, 235);
    margin-top: 4%; 
}
.product img{
    width: 100%;
}
p{
    margin:0 0 1%;
    font-size: 14px;
}
</style>