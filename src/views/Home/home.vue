<template>
  <div>
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <banner-swiper :banners="banners" class="banner"/>
    <recommend-view :recommends="recommends"/>
    <feature />
    <tab-controll :titles="['流行','新款','精选']" class="tab-controll" @tabClick="tabClick"></tab-controll>
    <goods-list :goods="showList"></goods-list>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navBar'
import TabControll from '@/components/content/tabcontroll/tabControll'
import GoodsList from '@/components/content/goods/goodsList'

import BannerSwiper from './children/bannerSwiper'
import recommendView from './children/recommendView'
import Feature from './children/featureView'

import {getHomeMultidata,getHomeGoods} from '@/network/home'
export default {
  components: {
    NavBar,
    TabControll,
    GoodsList,
    BannerSwiper,
    recommendView,
    Feature
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {'page': 0, 'list': []},
        'new': {'page': 0, 'list': []},
        'sell': {'page': 0, 'list': []},
      },
      currentType: 'pop'
    }
  },
  created() {
    //获取显示信息
    this.getHomeMultidata();

    //获取商品列表
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
     showList() {
       return this.goods[this.currentType].list
     }
  },
  methods: {
    /**
     * 事件监听
     */
    tabClick (index) {
      console.log(this.showList)

      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },

    /**
     * 网络请求
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page +1;
      //console.log(page);
      getHomeGoods(type,1).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1;
      })

      
    }
  },
}
</script>

<style scoped>
.home-nav{
  color: #fff;
  background-color: var(--color-high-text);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
}
.banner{
  margin-top: 44px;
}
.tab-controll{
  position: sticky;
  top: 44px;
}
</style>