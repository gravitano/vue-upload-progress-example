<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <upload-form/>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import UploadForm from './components/UploadForm'

    export default {
        name: 'app',
        components: {
            HelloWorld,
            UploadForm
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
