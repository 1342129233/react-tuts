// module.exports = (config) => {
//     // 所有的配置文件在这里修改， 对 config 进行配置
//     // 如果没有使用 customize-cra 就对这里进行配置，如果使用了就走下面
//     return config
// }


// 配置装饰器
const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
    addDecoratorsLegacy()
)