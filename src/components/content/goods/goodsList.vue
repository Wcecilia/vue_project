<template>
    <div class="good">
        <good-item v-for="(item,index) in goods" :goodsItem="item"></good-item>
    </div>
</template>

<script>
import GoodItem from './goodItem'
export default {
    components: {
        GoodItem
    },
    props: {
        goods: {
            type: Array,
            default: []
        }
    }
}
</script>

<style scoped>
.good{
    position: relative;
    z-index: 1;
    bottom: 50px;
}
</style>