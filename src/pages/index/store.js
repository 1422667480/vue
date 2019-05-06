export default {
    state: {
        currentType: 'SELF_DRIVING', //当前业务类型
    },
    getters: {
        /**
         * @description 获取当前业务类型
         */
        currentType: (state) => {
            return state.currentType
        },
    },
    mutations: {
        setCurrentType (state, val) {
            state.currentType = val;
        }
    },
    actions: {
    }
}