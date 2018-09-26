const baseImg = "http://localhost:65534/JingYanSheQu/images/";
const baseVideo = "http://localhost:65534/JingYanSheQu/videos/";
const formatString = (con, length) => {
    for (let i = 0; i < con.length; i++) {
        con[i].arctile_content = con[i].arctile_content.replace(/<\/?[^>]*>/gi, ''); //去除HTML Tag
        con[i].arctile_content = con[i].arctile_content.replace(/\s+/g, '') //去除行尾空格
        con[i].arctile_content = con[i].arctile_content.substr(0, length) + "...";
    }
    return con;
}

const addBannerUrl = (con) => {
    for (let i = 0; i < con.length; i++) {
        if (con[i].navType === "download") {
            for (let j = 0; j < con[i].resource_url.split("|").length; j++) {
                if (con[i].resource_url.split("|")[j]) {
                    con[i].resource_url = baseImg + 'webSite/' + con[i].resource_url.split("|")[j];
                }
            }
        } else if (con[i].navType === "banner") {
            let bannerList = [];

            for (let j = 0; j < con[i].resource_url.split("|").length; j++) {
                if (con[i].resource_url.split("|")[j]) {
                    bannerList.push(baseImg + 'webSite/' + con[i].resource_url.split("|")[j]);
                }
            }
            con[i].resource_url = bannerList;
        }
    }

    return con;
}
const addImgVideoUrl = (con) => {
    let arr = [],
        brr = [],
        crr = [];
    formatString(con, 50);
    for (let i = 0; i < con.length; i++) {
        if (con[i].resource_type == 'arctile') {
            for (let j = 0; j < con[i].resource_url.split("|").length; j++) {
                if (con[i].resource_url.split("|")[j]) {
                    con[i].resource_url = baseImg + con[i].personal_username + '/' + con[i].resource_url.split("|")[j];
                    arr.push(con[i]);
                }
            }
        } else {
            for (let j = 0; j < con[i].resource_url.split("|").length; j++) {
                if (con[i].resource_url.split("|")[j]) {
                    con[i].resource_url = baseVideo + con[i].personal_username + '/' + con[i].resource_url.split("|")[j];
                    brr.push(con[i]);
                }
            }
        }
    }
    crr.push(arr[0]);
    crr.push(brr[0]);
    crr.push(brr[1]);
    crr.push(arr[1]);
    crr.push(arr[2]);
    crr.push(brr[2]);
    crr.push(brr[3]);
    crr.push(arr[3]);
    return crr;
}

const addImgUrl = (con) => {
    formatString(con, 10);
    for (let i = 0; i < con.length; i++) {
        con[i].personal_pic = baseImg + con[i].personal_username + '/' + con[i].personal_pic;
    }
    return con;
}

const addImgUrlPicList = (con) => {
    for (let i = 0; i < con.length; i++) {
        if (con[i].resource_type == "picture") {
            con[i].resource_url = baseImg + con[i].personal_username + '/' + con[i].resource_url.split("|")[0];
        } else if (con[i].resource_type == "arctile" && con[i].resource_url !== "") {
            con[i].resource_url = baseImg + con[i].personal_username + '/' + con[i].resource_url.split("|")[0];
        } else if (con[i].resource_type == "arctile" && con[i].resource_url == "") {
            con[i].resource_url = "";
        } else {
            con[i].resource_url = baseVideo + con[i].personal_username + '/' + con[i].resource_url.split("|")[0];
        }

    }
    return con;
}
const addImgsUrl = (con) => {
    for (let i = 0; i < con.length; i++) {
        if (con[i].resource_url.split("|")[0]) {
            con[i].resource_url = baseImg + con[i].personal_username + '/' + con[i].resource_url.split("|")[0];
        }
    }
    return con;
}
const arctileImg = (con) => {
    let result = formatString(con, 120);
    return addImgsUrl(result);
}
const recommend = (con) => {
    let result = formatString(con, 58);
    return addImgsUrl(result);
}
const pictureList = (con) => {
    for (let i = 0; i < con.length; i++) {
        con[i].personal_pic = baseImg + con[i].personal_username + '/' + con[i].personal_pic;
    }
    return addImgsUrl(con);
}
const videoList = (con) => {
    for (let i = 0; i < con.length; i++) {
        con[i].video_content = con[i].video_content.replace(/<\/?[^>]*>/gi, ''); //去除HTML Tag
        con[i].video_content = con[i].video_content.replace(/\s+/g, '') //去除行尾空格
        con[i].video_content = con[i].video_content.substr(0, 120) + "...";
    }
    return con;

}

const imgConFirst = (con) => {
    for (let i = 0; i < con.length; i++) {
        if (con[i].resource_type == "picture") {
            con[i].arctile_content = con[i].arctile_content.split("|")[0];
        }
    }
    return con
}
const publicIndexInfo = (con) => {
    let fs = formatString(con, 120);
    let imgCon = addImgUrlPicList(fs);
    let a = imgConFirst(imgCon);
    return a;
}
const detailsArctileUserImg = (con) => {
    for (let i = 0; i < con.length; i++) {
        con[i].personal_pic = baseImg + con[i].personal_username + '/' + con[i].personal_pic.split("|")[0];
    }
    return con[0];
}

const detailsPictureUserImg = (con) => {
    let imgArr = [],
        conArr = [];
    for (let i = 0; i < con.length; i++) {
        con[i].personal_pic = baseImg + con[i].personal_username + '/' + con[i].personal_pic.split("|")[0];
        for (let j = 0; j < con[i].resource_url.split("|").length; j++) {
            if (con[i].resource_url.split("|")[j]) {
                imgArr.push(baseImg + con[i].personal_username + '/' + con[i].resource_url.split("|")[j]);
            }
        }
        con[i].resource_url = imgArr;
        for (let j = 0; j < con[i].picture_content.split("|").length; j++) {
            if (con[i].picture_content.split("|")[j]) {
                conArr.push(con[i].picture_content.split("|")[j]);
            }
        }
        con[i].picture_content = conArr;
    }
    return con[0];
}

const detailsVideoUserImg = (con) => {
    for (let i = 0; i < con.length; i++) {
        con[i].personal_pic = baseImg + con[i].personal_username + '/' + con[i].personal_pic;
        con[i].resource_url = baseVideo + con[i].personal_username + '/' + con[i].resource_url;
    }
    return con[0];
}
const addPersonalPic = (con) => {
    for (let i = 0; i < con.length; i++) {
        con[i].personal_pic = baseImg + con[i].personal_username + '/' + con[i].personal_pic;
    }
    return con;
}
const addUserImgAddress = (con) => {
    let result = addPersonalPic(con);
    for (let i = 0; i < con.length; i++) {
        con[i].personal_qr = baseImg + con[i].personal_username + '/' + con[i].personal_qr;
    }
    return result;
}
module.exports = {
    formatString, //去掉html标签
    addBannerUrl, //添加banner图片地址
    addImgVideoUrl, //添加地址
    addImgUrl, //添加图片地址
    addImgUrlPicList, //图片列表添加图片地址
    addImgsUrl, //banner图图片添加地址
    arctileImg, //文章列表图片显示
    recommend, //推荐阅读文章
    pictureList, //图片列表页
    videoList, //视频列表
    publicIndexInfo, //索检子导航中 图片视频文字方法
    detailsArctileUserImg, //文章用户图片添加路径地址
    detailsPictureUserImg, //图集用户图片分组用户添加路径
    detailsVideoUserImg, //添加视频地址用户图片
    addPersonalPic, //个人消息 图片添加地址
    addUserImgAddress, //loginuser添加图片地址
}