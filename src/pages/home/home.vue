<template>
    <div>
        <van-tabbar v-model="active" active-color="#fcc32b">
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="search" dot>订单</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">个人</van-tabbar-item>
        </van-tabbar>
        <div v-show="active==0" class="view_index">
            <van-button type="info">
                {{currentType}}
            </van-button>
        </div>
        <div v-show="active==1" class="view_order">这里是订单</div>
        <div v-show="active==2" class="view_user">这里是个人</div>
        <router-view />
    </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';
export default {
    components: {
        [TabbarItem.name]: TabbarItem,
        [Tabbar.name]: Tabbar,
    },
    name: "home",
    data () {
        return {
            active: 0
        }
    },
    computed: {
        currentType(){
            return this.$store.getters.currentType
        }
    },
    created() { 
    },
    methods: {
    },

}
</script>

<style lang="less" scoped>
</style>