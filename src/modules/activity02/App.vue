<template>
    <div id="activity02" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "activity02",
        mounted(){
            console.log(process.env.NODE_ENV)
            console.log(process.env.VUE_APP_T)
        }
    }
</script>

<style scoped>

</style>