<template>
    <div>
        <p>this is a todo list</p>
        <input type="text" v-model="newtodo" v-on:keyup.enter="addNew">
        <ul>        
            <li v-for="td in todo">
                {{td.red}}
            </li>
        </ul>       

    </div>
</template>


<script>
import Store from '../store'
export default {
  data() {
    return {
      todo: Store.fetch(),
      newtodo: ""
    };
  },
  methods: {
    addNew: function() {
      this.todo.push({ red: this.newtodo });
      this.newtodo = "";
    }
  },
  watch:{
      todo:{
          handler: function(todo){
              Store.save(todo)
          },
          deep:true
      }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
