import axios from 'axios'

export default {
    namespaced: true,
    state: {
        uploadPercentage: 0
    },
    mutations: {
        setUploadPercentage(state, percentage) {
            state.uploadPercentage = percentage
        }
    },
    actions: {
        upload({commit}, file) {
            const config = {
                onUploadProgress: function (progressEvent) {
                    const uploadPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    commit('setUploadPercentage', uploadPercentage)
                }
            };
            const data = new FormData();
            data.append('image', file);
            axios.post('https://upload.service.gits.id/upload', data, config).then(data => {
                console.log(data)
            }).then(err => {
                console.log(err)
            })
        }
    },

    getters: {
        uploadPercentage: state => state.uploadPercentage
    }
}