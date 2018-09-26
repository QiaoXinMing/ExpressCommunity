import getData from './ajaxIos';
import sm from './serverMethod';
const actions = {
    //查询导航
    getNavList({ commit, rootState }) {
        //对应服务器端的路由地址
        getData.getData.getAxiosMethod(this, 'selectNav', 'GETNAVLIST');
    },
    //查询热点
    getHotData({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectHotData', 'GETHOTDATA');
    },
    //查询精选话题
    getSelectionTopics({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectionTopics', 'SELECTIONTOPICS');
    },
    //精选帖子
    getInvitationList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectinvitation', 'SELECTINVITATION');
    },
    //加载精选图片
    getInvitationPictureList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectPictureList', 'SELECTINVITATIONPICTURELIST');
    },
    //加载会员
    getMeberShowList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectMeber', 'SELECTMEBER');
    },
    //幽默banner
    getFunnyBannerList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectFunnyBannerList', 'SELECTFUNNYBANNERLIST');
    },
    //幽默视图
    getFunnyPictureVideoList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectFunnyPictureVideoList', 'SELECTFUNNYPICTUREVIDEOLIST');
    },
    //加载文章列表
    getParagraList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectParagraList', 'SELECTGETPARAGRALIST');
    },
    //首页文章分页
    getPage({ commit, rootState }, num) {
        this.commit('CHANGEINDEXNUM', num);
    },
    //个人中心分页
    changePage({ commit, rootState }, num) {
        this.commit('CHANGEPAGE', num);
    },
    changePicturePage({ commit, rootState }, num) {
        this.commit('CHANGEPICTUREPAGE', num);
    },
    changeVideoPage({ commit, rootState }, num) {
        this.commit('CHANGEVIDEOPAGE', num);
    },
    changeQuestionPage({ commit, rootState }, num) {
        this.commit('CHANGEQUESTIONPAGE', num);
    },
    changeAnswerPage({ commit, rootState }, num) {
        this.commit('CHANGEABSWERPAGE', num);
    },
    changeDraftsPage({ commit, rootState }, num) {
        this.commit('CHANGEDRAFTSPAGE', num);
    },
    changeCollectionPage({ commit, rootState }, num) {
        this.commit('CHANGECOLLECTIONPAGE', num);
    },
    changeMessagePage({ commit, rootState }, num) {
        this.commit('CHANGEMESSAGEPAGE', num);
    },

    //文章列表/视频列表加载更多事件
    addMore({ commit, rootState }, type) {
        this.commit('ADDMOREARCTILESLIST', type);
    },
    //加载文章排行榜
    getParagraphbList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectParagraphbList', 'SELECTGETPARAGRAPHBLIST');
    },
    //按照评论数排行文章
    getParagraphbPlList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectParagraphbPlList', 'SELECTGETPARAGRAPHBPLLIST');
    },
    //推荐阅读
    getRecommend({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectRecommend', 'SELECTGETRECOMMEND');
    },
    //图片列表页
    getPictureList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectPicture', 'SELECTPICTURELIST');
    },
    //加载图片瀑布流
    getWaterFall({ commit, rootState }) {
        this.commit('WATERFALL');
    },
    //视频列表
    getVideoList({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectVideo', 'SELECTVIDEO');
    },
    //子导航公共模板页
    postPublicIndexList({ commit, rootState }, num) {
        getData.getData.postAxiosMethod(this, 'selectIndex', num, 'SELECTPUBLICINDEX');
    },
    //文章详情页
    postArctileDetails({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectArctileDetails', id, 'ARCTILEDETAILS');
    },
    //图集详情页
    postPictureDetails({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPictureDetails', id, 'PICTUREDETAILS');
    },
    //视频详情页
    postVideoDetails({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectVideoDetails', id, 'VIDEODETAILS');
    },
    //个人中心导航
    getPersonalOperation({ commit, rootState }) {
        getData.getData.getAxiosMethod(this, 'selectPersonalNavInfo', 'PERSONALOPERATION');
    },
    //个人中心发表的文章
    getPerArctileList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPersonalArctileList', id, 'PERSONALPERARCTILELIST');
    },
    //个人中心图集列表页
    getPerPictureList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPersonalPicutreList', id, 'PERSONALPICTURELIST');
    },
    //个人中心视频
    getPerVideoList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPersonalVideoList', id, 'PERSONALVIDEOLIST');
    },
    //个人中心已发布的问题
    getPerQuestionList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPerQuestionList', id, 'PERSONALQUESTION');
    },
    //个人中心已回答的问题
    getPerAnswerList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPerAnswerList', id, 'PERSONALANSWER');
    },
    //个人中心草稿文章
    getPerDraftsList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPerDraftsList', id, 'PERSONALDRAFTS');
    },
    //个人收藏
    getPerCollectionList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPerCollectionList', id, 'PERSONALCOLLECTION');
    },
    //个人消息
    getPerMessageList({ commit, rootState }, id) {
        getData.getData.postAxiosMethod(this, 'selectPerMessageList', id, 'PERSONALMESSAGELIST');
    },
    //索简信息
    getSearchList({ commit, rootState }, con) {
        getData.getData.postAxiosMethod(this, 'selectExpressInfo', con, 'SEARCHLIST');
    },
    //检测用户名是否被注册
    checkRegisterUserName({ commit, rootState }, name) {
        getData.getData.postAxiosMethod(this, 'selectRegisterUserName', name, 'CHECKREGISTERUSERNAME');
    },
    //注册全局组件
    postVC({ commit, rootState }, vc) {
        this.commit("VCMETHOD", vc);
    },
    //用户注册
    register({ commit, rootState }, user) {
        getData.getData.postAxiosMethod(this, 'selectRegister', user, 'REGISTER');
    },
    //用户登陆
    login({ commit, rootState }, user) {
        getData.getData.postAxiosMethod(this, 'selectLogin', user, 'LOGIN');
    },
    //获取用户session信息
    getUserSession({ commit, rootState }) {
        let user = {},
            username = sm.getSession("username"),
            password = sm.getSession("password");
        user.username = username;
        user.password = password;
        getData.getData.postAxiosMethod(this, 'selectLogin', user, 'GETUSERLOGIN');
    },
    //检测用户是否登录
    checkLogin({ commit, rootState }) {
        this.commit("CHECKLOGINED");
    },
    //修改发布主导航信息
    changeEditor({ commit, rootState }, ev) {
        this.commit("CHANGEEDITORCLASSFIY", ev);
    },
    //修改子导航信息
    changeSubNav({ commit, rootState }, ev) {
        this.commit("CHANGEEDITORSUBCLASSFIY", ev);
    },
    //关闭编辑区预览内容的编辑器
    closeLookEditor({ commit, rootState }) {
        this.commit("CLOSELOOKEDITOR");
    },
    //编辑区预览文本同步
    changeText({ commit, rootState }) {
        this.commit("CHANGETEXT");
    },
    //上传图集
    uploadImages({ commit, rootState }, ev) {
        this.commit("UPLOADIMAGE", ev);
    },
    //上传视频
    uploadVideo({ commit, rootState }, ev) {
        this.commit("UPLOADVIDEO", ev);
    },
    //个人中心修改头像
    modifyPhoto({ commit, rootState }) {
        this.commit("MODIFYPHOTO");
    }

}

export default actions;