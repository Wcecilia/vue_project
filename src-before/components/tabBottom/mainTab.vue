<template>
    <tab-bar>
        <tab-bar-item path="/index" activeColor="pink">
          <img slot="icon-img" src="../../assets/img/tabbar/home.svg">
          <img slot="actvie-img" src="../../assets/img/tabbar/home_active.svg">
          <div slot="icon-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/classify" activeColor="pink">
          <img slot="icon-img" src="../../assets/img/tabbar/category.svg">
          <img slot="actvie-img" src="../../assets/img/tabbar/category_active.svg">
          <div slot="icon-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/shopCar" activeColor="pink">
          <img slot="icon-img" src="../../assets/img/tabbar/shopcart.svg">
          <img slot="actvie-img" src="../../assets/img/tabbar/shopcart_active.svg">
          <div slot="icon-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="deepPink">
          <img slot="icon-img" src="../../assets/img/tabbar/profile.svg">
          <img slot="actvie-img" src="../../assets/img/tabbar/profile_active.svg">
          <div slot="icon-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>
<script>
import TabBar from '@/components/tabBottom/tabBar'
import TabBarItem from '@/components/tabBottom/tabBarItem'
export default {
    name: "mainTab",
    components: {
    TabBar,
    TabBarItem
  }
}
</script>
