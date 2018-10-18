<template>
    <v-container>
        <v-card>
            <v-card-text>
                <input type="file" @change="handleFileChanged"/>
                <!--<div class="mt-3">Upload Percentage: {{ percentage }}</div>-->
                <v-progress-linear v-model="percentage"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data: () => ({
            file: null
        }),
        computed: {
            ...mapGetters('uploader', {
                percentage: 'uploadPercentage'
            })
        },
        methods: {
            handleFileChanged(event) {
                const file = event.target.files[0];
                this.$store.dispatch('uploader/upload', file)
            }
        }
    }
</script>