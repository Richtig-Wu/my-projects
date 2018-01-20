<template>
    <div class="pay">
       <div class="input"  @click="see">
          <input type="checkbox" class="radio">
        <svg class="icon dui" aria-hidden="true" v-if="seen">
          <use xlink:href="#icon-dui"></use>
        </svg>
          
       </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      seen: false,
    };
  },
  methods: {
    see: function() {
      (this.seen = !this.seen), console.log(this.seen);
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 结算css */
.pay {
  width: 100%;
  height: 4em;
  background: #f2f2f2;
  position: absolute;
  left: 0;
  bottom: 4em;
}
/* 全选按钮css */
.input {
  width: 1.18em;
  height: 1.18em;
  display: inline-block;
  border-radius: 50%;
  border: 1px solid hsl(0, 0%, 81%);
  /* background: #fff; */
  position: relative;
  top: 1.3em;
  left: 1em;
}
.radio {
  height: 1.2m;
  background: gray;
}
input[type="checkbox"] {
  visibility: hidden;
}

.dui {
  width: 1.8em;
  height: 1.8em;
  position: relative;
  left: -0.28em;
  top: -1.6em;
}
</style>
