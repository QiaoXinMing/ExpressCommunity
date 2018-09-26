var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var select = $sql.select;
var serverMethod = require('../aisposalData/serverMethod');
// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加查询导航接口   服务器端的路由提交方式要和 vue的axios的提交方式对应上

router.get('/selectNav', (req, res) => {
    var sql = select.nav; //调用sql语句   
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            //索检出 图片的路径加载图片地址
            result = serverMethod.addBannerUrl(result);
            jsonWrite(res, result);
        }
    })
});

//查询热点文章
router.get('/selectHotData', (req, res) => {
    let sql = select.hotData;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.formatString(result, 70);
            jsonWrite(res, result);
        }
    });
});
//查询精选话题
router.get('/selectionTopics', (req, res) => {
    let sql = select.topics;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addImgVideoUrl(result);
            jsonWrite(res, result);
        }
    });
});

//精选帖子
router.get('/selectinvitation', (req, res) => {
    let sql = select.inviation;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.formatString(result, 20);
            jsonWrite(res, result);
        }
    });
});
//会员展示
router.get('/selectMeber', (req, res) => {
    let sql = select.meberList;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addImgUrl(result);
            jsonWrite(res, result);
        }
    });
});

//精选图片
router.get('/selectPictureList', (req, res) => {
    let sql = select.pictureList;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addImgUrlPicList(result);
            jsonWrite(res, result);
        }
    });
});


//幽默banner展示
router.get('/selectFunnyBannerList', (req, res) => {
    let sql = select.funnyBannerList;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addImgUrlPicList(result);
            jsonWrite(res, result);
        }
    });
});

//幽默图片和视频
router.get('/selectFunnyPictureVideoList', (req, res) => {
    let sql = select.funnyPictureVideoList;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addImgUrlPicList(result);
            jsonWrite(res, result);
        }
    });
});


// 索检文章列表
router.get('/selectParagraList', (req, res) => {
    let sql = select.paragralist;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.arctileImg(result);
            jsonWrite(res, result);
        }
    });
});
//文章排行榜
router.get('/selectParagraphbList', (req, res) => {
    let sql = select.paragraphblist;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
});
//文章按照评论排行    
router.get('/selectParagraphbPlList', (req, res) => {
    let sql = select.paragraphbpllist;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
});
//推荐阅读
router.get('/selectRecommend', (req, res) => {
    let sql = select.recommend;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.recommend(result);
            jsonWrite(res, result);
        }
    });
});
//图片列表
router.get('/selectPicture', (req, res) => {
    let sql = select.selectPicture;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.pictureList(result);
            jsonWrite(res, result);
        }
    });
});
//查询视频
router.get('/selectVideo', (req, res) => {
    let sql = select.selectVideo;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.videoList(result);
            jsonWrite(res, result);
        }
    });
});
//查询子导航页
router.post('/selectIndex', (req, res) => {
    let num = req.body.postInfo;
    let sql = "SELECT a.arctile_id,a.arctile_classfiy, a.arctile_title, a.resource_url, a.arctile_content,a.arctile_looked, a.arctile_reply, a.arctile_forward,a.arctile_collection,a.arctile_publishTime,a.resource_type, p.personal_username FROM express_arctile_info a ,express_personal_info p where arctile_nav_id=5 and 	resource_type = 'arctile' union all SELECT  pic.picture_id,pic.picture_classfiy,pic.picture_title,pic.resource_url,pic.picture_content,pic.picture_looked,pic.picture_reply, pic.picture_forward, pic.picture_collection, pic.picture_publishTime,pic.resource_type, p.personal_username FROM express_picture_info pic,express_personal_info p where picture_nav_id= 5 union all SELECT v.video_id, v.video_classfiy, v.video_title,v.resource_url,v.video_preview_pic,v.video_looked, v.video_reply, v.video_forward, v.video_collection, v.video_publishTime, v.resource_type, p.personal_username FROM express_video_info v,express_personal_info p where video_nav_id=5";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.publicIndexInfo(result);
            jsonWrite(res, result);
        }
    });
});

//查询文章详情页
router.post('/selectArctileDetails', (req, res) => {
    let id = req.body.postInfo;
    let sql = "SELECT a.*,p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_arctile_info a, express_personal_info p where arctile_id = " + id + " and a.personal_id = p.personal_id";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.detailsArctileUserImg(result);
            jsonWrite(res, result);
        }
    });
});
//查询图集详情信息
router.post('/selectPictureDetails', (req, res) => {
    let id = req.body.postInfo;
    let sql = "SELECT pic.picture_id ,pic.picture_classfiy ,pic.picture_title,pic.picture_content ,pic.resource_url ,pic.picture_looked ,pic.picture_reply ,pic.picture_forward,pic.picture_collection,pic.picture_collection ,pic.picture_publishTime,p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_picture_info pic,express_personal_info p where pic.picture_id =3 and p.personal_id = pic.personal_id";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.detailsPictureUserImg(result);
            jsonWrite(res, result);
        }
    });
});
//查询视频详情信息
router.post('/selectVideoDetails', (req, res) => {
    let id = req.body.postInfo;
    let sql = "SELECT v.video_title,v.resource_url,v.video_time ,v.personal_id,v.resource_type, p.personal_username, p.personal_pic,p.personal_qr, p.personal_attention, p.personal_attentioned FROM express_video_info v,express_personal_info p where video_id = " + id + " and v.personal_id = p.personal_id";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.detailsVideoUserImg(result);
            jsonWrite(res, result);
        }
    });
});
//个人中心导航  
router.get('/selectPersonalNavInfo', (req, res) => {
    let sql = "SELECT * FROM express_personal_nav_info ";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
});
//个人文章列表   
router.post('/selectPersonalArctileList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT m.*,p.personal_username,p.personal_pic FROM express_arctile_info m,  express_personal_info p WHERE m.personal_id =  (select personal_id from express_personal_info where personal_username = '" + username + "')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.arctileImg(result);
            jsonWrite(res, result);
        }
    });
});
//个人图集页  
router.post('/selectPersonalPicutreList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT m.*,p.personal_username,p.personal_pic FROM express_picture_info m,  express_personal_info p WHERE m.personal_id =  (select personal_id from express_personal_info where personal_username = '" + username + "')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.pictureList(result);
            jsonWrite(res, result);
        }
    });
});
//个人视频页  
router.post('/selectPersonalVideoList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT m.*,p.personal_username,p.personal_pic FROM express_video_info m,  express_personal_info p WHERE m.personal_id =  (select personal_id from express_personal_info where personal_username = '" + username + "')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.videoList(result);
            jsonWrite(res, result);
        }
    });
});
//个人已发布的问题页面  
router.post('/selectPerQuestionList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT q.*,p.personal_username FROM express_question_answer_info q ,express_personal_info p where q.personal_id = (select personal_id from express_personal_info where personal_username = '" + username + "')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.arctileImg(result);
            jsonWrite(res, result);
        }
    });
});
//个人回答问题页
router.post('/selectPerAnswerList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT q.*,p.personal_username FROM express_question_answer_info q ,express_personal_info p where q.personal_id = (select personal_id from express_personal_info where personal_username = '" + username + "')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.arctileImg(result);
            jsonWrite(res, result);
        }
    });
});
//个人中心草稿文章  
router.post('/selectPerDraftsList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT d.*,p.personal_id,p.personal_username FROM express_arctile_info d ,express_personal_info p WHERE d.personal_id =(select personal_id from express_personal_info where personal_username = '" + username + "') and d.personal_id = p.personal_id and d.resource_type='drafts' ";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.arctileImg(result);
            jsonWrite(res, result);
        }
    });
});

//个人收藏 
router.post('/selectPerCollectionList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT m.*,pic.*,v.*, p.personal_username,p.personal_pic FROM express_arctile_info m, express_picture_info pic,  express_personal_info p,express_video_info v WHERE 1"
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.publicIndexInfo(result);
            jsonWrite(res, result);
        }
    });
});
//个人消息
router.post('/selectPerMessageList', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT m.*,p.personal_username,p.personal_pic FROM express_personal_message m,  express_personal_info p WHERE m.personal_id =  (select personal_id from express_personal_info where personal_username = '" + username + "')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addPersonalPic(result);
            jsonWrite(res, result);
        }
    });
});
//查询经验
router.post('/selectExpressInfo', (req, res) => {
    let con = req.body.postInfo;
    let sql = "SELECT m.*,pic.*, p.personal_username,p.personal_pic FROM express_arctile_info m, express_picture_info pic,  express_personal_info p WHERE 1";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.publicIndexInfo(result);
            jsonWrite(res, result);
        }
    });
});
//检测用户是否被注册  
router.post('/selectRegisterUserName', (req, res) => {
    let username = req.body.postInfo;
    let sql = "SELECT * FROM express_personal_info p WHERE p.personal_username = '" + username + "'";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
});

//注册用户  
router.post('/selectRegister', (req, res) => {
    let sql = "INSERT INTO `express_personal_info`( `personal_email_name`, `personal_phoneNum`, `personal_username`, `personal_password`, `personal_pic`, `personal_qr`, `personal_introduction`, `personal_attention`, `personal_attentioned`, `personal_arctile`, `personal_picture`, `personal_video`, `personal_register_time`, `personal_jyb`, `personal_meber_id`) VALUES ('null','null','" + req.body["postInfo[username]"] + "','" + req.body["postInfo[password]"] + "','null','null','','0','0','0','0','0','" + req.body["postInfo[registerTime]"] + "','0','2')";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    });
});
//用户登陆
router.post('/selectLogin', (req, res) => {
    let sql = "SELECT * FROM express_personal_info WHERE personal_username ='" + req.body["postInfo[username]"] + "' and personal_password = '" + req.body["postInfo[password]"] + "'";
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result = serverMethod.addUserImgAddress(result);
            jsonWrite(res, result);
        }
    });
});

module.exports = router;