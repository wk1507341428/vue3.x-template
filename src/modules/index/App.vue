<template>
    <div id="App" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    import config from "../../config/index"
    export default {
        name: "App",
        mounted(){
            console.log(process.env.NODE_ENV)
            console.log(process.env.VUE_APP_T)
            console.log(process.env.VUE_APP_NODE_ENV)
            console.log(config.config)
        }
    }
</script>

<style scoped>

</style>