/**
 * 获取该项目的环境变量
 */
const env = () => {
    const env = process.env.NODE_ENV === "development" ? "development" : 
        ["uat","test"].includes(process.env.VUE_APP_NODE_ENV) ? process.env.VUE_APP_NODE_ENV : 
            "production"
    return env
}


module.exports = {
    env
}