<template>
    <div id="activity01" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "client",
        mounted(){
            console.log(process.env.NODE_ENV)
            console.log(process.env.VUE_APP_T)
        }
    }
</script>

<style scoped>

</style>