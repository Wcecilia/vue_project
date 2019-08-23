<template>
    <div class="classify">
         <h2>我是分类</h2>

         <router-link to="/classify/message">信息</router-link>
         <router-link to="/classify/news">新闻</router-link>

         <router-view />
    </div>
</template>

<script>
export default {
    data () {
        return {
            path: "/classify/news"
        }
    },
    created() {
        // console.log("classify create");
    },
    destroyed() {
        // console.log("classify destroyed");
    },
    //只有在被keep-alive 才可以使用
    activated () {
        this.$router.push(this.path)
    },
    beforeRouteLeave (to, from, next) {
        this.path = this.$route.path;
        next();
    }
  }
</script>

<style scoped>

</style>