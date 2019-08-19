<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"TabBar"
}
</script>

<style scoped>
#tab-bar{
    background-color: #f6f6f6;
    height: 49px;
    border-top: 1px solid #eee;
    box-shadow: 0px -1px 1px rgba(150, 150, 150, .08);
    position: fixed;
    left: 0px;
    right:0px;
    bottom: 0px;
    text-align: center;
    display: flex;
}
</style>