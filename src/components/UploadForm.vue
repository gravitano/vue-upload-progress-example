<template>
    <div>
        <input type="file" @change="handleFileChanged"/>
        <div>Upload Percentage: {{ percentage }}</div>
        <!--<button @click="upload">Submit</button>-->
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default  {
        data: () => ({
            file: null
        }),
        computed: {
            ...mapGetters({
                percentage: 'uploadPercentage'
            })
        },
        methods: {
            handleFileChanged(event) {
                const file = event.target.files[0];
                this.$store.dispatch('upload', file)
            }
        }
    }
</script>