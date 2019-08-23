<template>
  <!--所有的item都展示同一个图片, 同一个文字-->
  <div id="tab-bar-item" @click="checkItem">
    <div v-if="!isActive">
      <slot name="icon-img"></slot>
    </div>
    <div v-else>
      <slot name="actvie-img"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="icon-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {
      //isActive: false
    };
  },
  methods: {
    checkItem() {
      //this.$router.push(this.path); 
      this.$router.replace(this.path);
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
};
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  height: 49px;
}
#tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
</style>
