<template>
    <div>
        <van-tabbar v-model="active" active-color="#fcc32b">
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="search" dot>订单</van-tabbar-item>
            <van-tabbar-item icon="friends-o" info="5">个人</van-tabbar-item>
        </van-tabbar>
        <div v-show="active==0" class="view_index">
            <van-button type="info" @click="toHome">
                这里是主页
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
    name: "index",
    data () {
        return {
            active: 0
        }
    },
    methods: {
        /**
         * @description 多页面状态数据持久化模拟
         */
        toHome () {
            this.$store.commit('setCurrentType', 'WITH_DRIVER_CHARTERD_CAR')
            location.href = 'home.html'
        }
    },

}
</script>

<style lang="less" scoped>
</style>