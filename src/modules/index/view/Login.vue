<template>
    <ul class="box">
        <li>我是首页</li>
        <li>我得环境变量是：{{ env }}</li>
    </ul>
</template>

<script>
    export default {
        name: "login",
        data(){
            return{
                env: null
            }
        },
        mounted(){
            this.env = process.env.VUE_APP_NODE_ENV
        }
    }
</script>

<style lang="scss" scoped>
.box{
    background-color: $theme;
}
li{
    list-style-type: none;
    color: #000;
}
</style>
