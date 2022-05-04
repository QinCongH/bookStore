// 引入依赖文件
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import indexAbout from './modules/indexAbout'
export default new Vuex.Store({
    modules:{
        indexAbout,
    }
})