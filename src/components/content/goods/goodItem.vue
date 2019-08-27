<template>
    <div class="good-item">
        <img :src="goodsItem.show.img" />
        <p class="title">{{goodsItem.title}}</p>
        <div>
            <span class="price">{{goodsItem.price}}</span>
            <img src="@/assets/img/common/collect.svg"/>
            <span class="cfav">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        goodsItem: {
            type: Object,
            default: {}
        }
    }
    
}
</script>

<style scoped>
.good-item{
   width: 50%;
   padding: 5px;
   display: inline-block;

}
.good-item>img{
    width: 100%;
    height: 200px;
    border-radius: 5px;
}
.good-item p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow:ellipsis;
    padding: 0 2px;
}
.good-item>div {
    text-align: center;
}
.good-item>div img{
    position: relative;
    top: 3px;
    width: 20px;
    height: 20px;
    margin-left: 5px;
}
.price{
    color: var(--color-tint);
}
</style>