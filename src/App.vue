<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
    <main-tab></main-tab>
  </div>
</template>
<script>
import MainTab from '@/components/content/mainTab/mainTab'
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
