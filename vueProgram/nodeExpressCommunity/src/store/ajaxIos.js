import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import qs from 'qs';
Vue.use(Vuex);
Vue.prototype.axios = axios;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //设置文本提交类型

const baseServer = "http://192.168.1.101:3000/api/select/";
const getData = {

    //获取数据库表中信息
    getAxiosMethod(THIS, URL, METHODNAME) {
        let _this = THIS;
        axios.get(baseServer + URL).then((res) => {
            _this.commit(METHODNAME, res.data);
        }).catch((e) => {
            console.log(e);
        });
    },

    //提交客户端数据信息到数据库	
    postAxiosMethod(THIS, URL, args, METHODNAME) {

        let _this = THIS,
            data = qs.stringify({ postInfo: args });
        axios.post(baseServer + URL, data)
            .then(function(res) {
                _this.commit(METHODNAME, res.data);
            }).catch(function(e) {
                console.log(e);
            });
    },


}

export default {
    getData
}