<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <banner-swiper :banners="banners" />
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import navBar from '@/components/common/navbar/navBar'
import BannerSwiper from './children/bannerSwiper'
import recommendView from './children/recommendView'

import {getHomeMultidata} from '@/network/home'
export default {
  components: {
    navBar,
    BannerSwiper,
    recommendView
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
}
</script>

<style scoped>
.home-nav{
  color: #fff;
  background-color: var(--color-high-text);
}
</style>