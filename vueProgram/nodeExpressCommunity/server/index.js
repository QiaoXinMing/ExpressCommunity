// node 后端服务器

const selectApi = require('./api/selectApi')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//node服务端跨域问题处理
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    if (req.method == 'OPTIONS') {
        /*让options请求快速返回*/
        res.send(200);
    } else {
        next();
    }
});


// 后端api路由
app.use('/api/select', selectApi)


// 监听端口
app.listen(3000)
console.log('成功开启node服务器 监听3000端口')