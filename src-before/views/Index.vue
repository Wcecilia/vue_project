<template>
  <div class="index">
    <h2>我是首页</h2>
    <p>{{count}}</p>
    <button @click="add">+1</button>
    <button @click="del">-1</button>
  </div>
</template>

<script>
export default {
  computed: {
    count: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    add() {
      this.$store.commit("add");
      setTimeout(() => {
        let data = "hello world";
        console.log(data);
      }, 1000);
    },
    del() {
      this.$store.commit("del");

      new Promise((resolve, reject) => {
        setTimeout(() => {
          //resolve("promise");
          reject("error promise");
        }, 1000);
      })
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
</style>