const util = require('../assets/util')
const env = util.env()
const config_defalut = require("./config")

let config = {}
if( env === 'development' ){
    config = require('./config.development')
}
else if( env === 'test' ){
    config = require('./config.test')
}
else if( env === 'uat' ){
    config = require('./config.uat')
}

config = Object.assign(config_defalut,config)

export default {
    env,
    config
}
