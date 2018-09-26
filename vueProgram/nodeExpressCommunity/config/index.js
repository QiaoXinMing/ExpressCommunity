'use strict'

const path = require('path')

module.exports = {
    dev: {

        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/api': {
                target: 'http://127.0.0.1:3000/api/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },

        // Various Dev Server settings
        host: '192.168.1.101', // can be overwritten by process.env.HOST
        port: 8082, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        devtool: 'cheap-module-eval-source-map',

        cacheBusting: true,

        cssSourceMap: true
    },

    build: {
        // Template for index.html
        index: path.resolve(__dirname, '../web/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../web'),
        assetsSubDirectory: 'base',
        assetsPublicPath: '/',

        /**
         * Source Maps
         */

        productionSourceMap: true,
        devtool: '#source-map',

        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        bundleAnalyzerReport: process.env.npm_config_report
    }
}