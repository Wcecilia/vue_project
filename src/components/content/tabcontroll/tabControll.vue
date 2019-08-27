<template>
    <div class="tab-controll">
        <div v-for="(item,index) in titles" 
            class="tab-controll-item"
            :class="{active: index === currentIndex}"
            @click="tabControll(index)"
            >
            <span>{{item}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: []
        }
    },
    data () {
        return {
            currentIndex: 0
        }
    },
    methods: {
        tabControll (index) {
            this.currentIndex = index;
            this.$emit("tabClick",index)
        }
    },
}
</script>

<style scoped>
.tab-controll {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    z-index: 2;
    margin-bottom: 50px;
}
.tab-controll-item{
    flex: 1
}
.active {
    color: var(--color-high-text);
}
.active span{
    border-bottom: 2px solid var(--color-tint);
    padding: 4px;
}
</style>