<template>
  <div id="app">
    <router-view></router-view>
    <main-tab></main-tab>
  </div>
</template>
<script>
import MainTab from '@/components/tabBottom/mainTab'
export default {
  components: {
    MainTab
  },
  methods: {
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
