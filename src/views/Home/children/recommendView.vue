<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  font-size: 12px;
  text-align: center;
}
.recommend > div {
  flex: 1;
}
.recommend img {
  width: 70px;
  height: 70px;
}
.recommend a div {
  padding-top: 5px;
}
</style>