let num = 5;

// sql语句
var sqlMap = {
    // 导航
    select: {
        //导航
        nav: 'select * from express_nav_info',
        hotData: 'select a.arctile_id, a.arctile_title, a.arctile_content from express_arctile_info a order by arctile_looked desc LIMIT 3',
        topics: '(select a.arctile_id, a.arctile_title, a.arctile_content, a.resource_url, a.arctile_looked, a.arctile_reply, a.personal_id, a.resource_type, p.personal_id, p.personal_username from express_arctile_info a, express_personal_info p where a.resource_url !="" and a.personal_id = p.personal_id order by a.arctile_looked + a.arctile_reply + a.arctile_forward desc LIMIT 4 ) union all ( select v.video_id, v.video_title, v.video_content, v.resource_url, v.video_looked, v.video_reply, v.personal_id, v.resource_type, p.personal_id, p.personal_username from express_video_info v, express_personal_info p where v.resource_url !="" and v.personal_id = p.personal_id order by v.video_looked + v.video_reply + v.video_forward desc LIMIT 4 )',
        inviation: 'select a.arctile_id,a.arctile_title,a.arctile_content from express_arctile_info a order by arctile_forward desc LIMIT 7',
        pictureList: 'SELECT p.picture_id,p.picture_title ,p.resource_url,p.resource_type,per.personal_username FROM express_picture_info p ,express_personal_info per order by picture_forward desc limit 9',
        meberList: 'SELECT a.arctile_title,a.arctile_content,a.arctile_publishTime,p.personal_pic,p.personal_username FROM express_arctile_info a,express_personal_info p WHERE a.personal_id = p.personal_id and p.personal_meber_id = 2 order by a.arctile_publishTime desc LIMIT 10',
        funnyBannerList: 'select p.picture_title, p.resource_url,p.resource_type, p.picture_content, per.personal_id , per.personal_username from express_picture_info p , express_personal_info per where p.picture_nav_id ="11" order by p.picture_looked desc LIMIT 5',
        funnyPictureVideoList: '(select p.picture_id, p.picture_title, p.resource_url, p.picture_content,p.resource_type, per.personal_username from express_picture_info p,express_personal_info per where picture_nav_id ="11" order by picture_forward desc LIMIT 4) union all (select v.video_id, v.video_title, v.resource_url, v.video_preview_pic,v.resource_type, per.personal_username from express_video_info v ,express_personal_info per where video_nav_id ="11" order by video_forward desc LIMIT 3)',
        paragralist: 'SELECT a.*,p.personal_username FROM express_arctile_info a ,express_personal_info p where resource_type = "arctile" ',
        paragraphblist: "select a.arctile_id,a.arctile_title,a.arctile_looked + a.arctile_reply+a.arctile_forward from express_arctile_info a order by arctile_looked desc LIMIT 10",
        paragraphbpllist: "select a.arctile_id,a.arctile_title,a.arctile_reply from express_arctile_info a order by arctile_reply desc LIMIT 10",
        recommend: "select a.arctile_id,a.arctile_title,a.arctile_content,a.resource_url,p.personal_username from express_arctile_info a ,  express_personal_info p where a.resource_url != '' order by arctile_looked asc LIMIT 10",
        selectPicture: 'SELECT pic.picture_id ,pic.picture_classfiy ,pic.picture_title ,pic.resource_url ,pic.picture_looked ,pic.picture_reply ,pic.picture_forward,pic.picture_collection,pic.picture_collection ,pic.picture_publishTime, p.personal_username,p.personal_pic FROM express_picture_info pic,express_personal_info p',
        selectVideo: 'SELECT v.video_id,v.video_classfiy ,v.video_title,v.video_time,v.video_content,v.video_looked ,v.video_reply ,v.video_forward,v.video_preview_pic,v.video_collection,v.video_collection,v.video_publishTime, p.personal_username FROM express_video_info v,express_personal_info p',
    },

}
module.exports = sqlMap