

<template>
  <div class="guanggao">
    <div class="one-left">
      <img src="../assets/g1.jpg" alt="">
    </div>
    <div class="one-sild">
      <img src="../assets/g2.jpg" alt="">
      <img src="../assets/g4.jpg" alt="">
    </div>
    <div class="one-right">
      <img src="../assets/g3.jpg" alt="">
      <img src="../assets/g5.jpg" alt="">
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {

    }
  },

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.guanggao{
  padding: 0.3em 0.5em;
}
.one-left,.one-sild,.one-right{
  float: left;
}
.one-sild img,.one-right img{
  float: left;
}
.one-left{
  width: 31%;
}
.one-left img{
  width: 100%;
}
.one-sild,.one-right{
  width: 32%;
  padding-left: 2%;
}
.one-sild img,.one-right img{
  width: 100%;
  padding-bottom: 7%;
}
</style>
