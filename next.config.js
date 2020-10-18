/* Connect svg plugin */
const withReactSvg = require('next-react-svg')
const path = require('path')

module.exports = withReactSvg({
    include: path.resolve(__dirname, '/'),
    webpack(config, options) {
        return config
    }
});

// /* i18n plugin settings */
// const { nextI18NextRewrites } = require('next-i18next/rewrites')
//
// const localeSubpaths = {}
//
// module.exports = {
//     rewrites: async () => nextI18NextRewrites(localeSubpaths),
//     publicRuntimeConfig: {
//         localeSubpaths
//     },
// }
