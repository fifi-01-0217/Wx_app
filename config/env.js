import test from './test.env.js'
import development from './development.env.js'
import production from './production.env.js'
// const env = test  // 测试环境
const env = development  // 开发环境
// const env = production  // 生产环境
module.exports = env