import Vue from 'vue'
import Vuex from 'vuex'
import uploader from "./modules/uploader";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        uploader
    }
})
