//获取类名元素
const getClassName = (args) => {
        if (document.getElementsByClassName) {
            if (document.getElementsByClassName(args).length != 1) {
                return document.getElementsByClassName(args);
            } else {
                return document.getElementsByClassName(args)[0];
            }
        } else {
            //可以准确找到dom元素  影响性能
            for (let i = 0; i < document.getElementsByTagName("div").length; i++) {
                if (document.getElementsByTagName("div")[i].getAttribute("class") === args) {
                    return document.getElementsByTagName("div")[i];
                }
            }
        }
    }
    //获取id元素信息
const getId = (args) => {
        return document.getElementById(args);
    }
    /* 获取动态样式*/
const getStyle = (element, alt) => {
        return parseInt((element.currentStyle ? element.currentStyle : window.getComputedStyle(element, "null"))[alt]);
    }
    //阻止默认事件阻止冒泡事件
let mrEvent = (e) => {
        let eve = e || window.event;
        eve.stopPropagation ? eve.stopPropagation() : window.event.cancelBubble = true;
        eve.preventDefault ? eve.preventDefault() : window.event.returnValue = false;
    }
    //索检指定数组
const SplitArrayLength = (args, type) => {
    let newArr = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i].navType === type) {
            newArr.push(args[i]);
        }
    }
    return newArr;
}

const TopNavList = (args) => {
    return SplitArrayLength(args, "primary");
}
const SubNavList = (args) => {
    return SplitArrayLength(args, "subnavigation");
}
const QrNavList = (args) => {
    return SplitArrayLength(args, "download");
}
const FooterList = (args) => {
    return SplitArrayLength(args, "bottomNavigation");
}
const Copyright = (args) => {
    return SplitArrayLength(args, "copyright")[0].title;
}

const getbannerList = (args) => {
    let bannerList = [];
    let a = SplitArrayLength(args, "banner")[0].resource_url;
    bannerList.push(SplitArrayLength(args, "banner")[0].resource_url[4]);
    for (let i = 0; i < a.length; i++) {
        bannerList.push(a[i]);
    }
    bannerList.push(SplitArrayLength(args, "banner")[0].resource_url[0]);
    return bannerList;
}

const funnyBannerList = (args) => {
    let funnyBannerList = [];
    funnyBannerList.push(args[args.length - 1]);
    for (let i = 0; i < args.length; i++) {
        funnyBannerList.push(args[i]);
    }
    funnyBannerList.push(args[0]);
    return funnyBannerList;
}

const splitArrTen = (args) => {
    let arcList = [];
    for (let i = 0; i < args.length; i += 10) {
        arcList.push(args.slice(i, i + 10));
    }
    return arcList;
}
const splitArrTwl = (args) => {
    let pictureList = [];
    for (let i = 0; i < args.length; i += 12) {
        pictureList.push(args.slice(i, i + 12));
    }
    return pictureList;
}
const getSession = (key) => {
    let defaultUserInfo = sessionStorage.getItem("JingYanSheQuDefultUserInfo"),
        defaultUser = {},
        keys = null,
        value = null;
    try {
        /*将数组转成json */
        for (let i = 0; i < defaultUserInfo.split("%").length; i++) {
            if (i % 2 == 0) {
                value = defaultUserInfo.split("%")[i];
            } else {
                keys = defaultUserInfo.split("%")[i];
            }
            defaultUser[keys] = value;
        }
    } catch (e) {
        return;
    }
    return defaultUser[key];
}
const setSession = (type, num) => {
    let pictureNum = getSession("pictureNum"),
        arctileNum = getSession("arctileNum"),
        videoNum = getSession("videoNum"),
        username = getSession("username"),
        password = getSession("password");
    if (type == "arctile") {
        sessionStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%" + num + "%pictureNum%" + pictureNum + "%videoNum%" + videoNum + "%username%" + username + "%password%" + password);
    } else if (type == "picture") {
        sessionStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%" + arctileNum + "%pictureNum%" + num + "%videoNum%" + videoNum + "%username%" + username + "%password%" + password);
    } else if (type == "video") {
        sessionStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%" + arctileNum + "%pictureNum%" + pictureNum + "%videoNum%" + num + "%username%" + username + "%password%" + password);
    }
}
const getTime = (time) => {
    /*
      60秒
      一分 60
      六十分 一小时
    */
    let totalTime = null;

    if (time < 10) {
        console.log("秒级视频");
        totalTime = "00:00:0" + parseInt(time);
        return totalTime;
    }
    if (time > 9 && time < 60) {
        console.log("十几秒视频");
        totalTime = "00:00:" + parseInt(time);
        return totalTime;
    }

    if (time > 59 && time < 3600) { //此处为分级   61
        if (parseInt(time % 60) < 10 && parseInt(time % 60) == 0) {
            console.log("00:02:00");
            totalTime = "00:0" + parseInt(time) + ":00";
        }
        if (parseInt(time % 60) > 9 && parseInt(time % 60) == 0) {
            console.log("00:20:00");
            totalTime = "00:" + parseInt(time) + ":00";
        }
        if (parseInt(time / 60) < 10 && time - parseInt(time / 60) * 60 < 10) {
            totalTime = "00:0" + parseInt(time / 60) + ":0" + parseInt(time - parseInt(time / 60) * 60);
        }
        if (parseInt(time / 60) < 10 && time - parseInt(time / 60) * 60 > 9) {
            console.log("00:02:32");
            totalTime = "00:0" + parseInt(time / 60) + ":" + parseInt(time - parseInt(time / 60) * 60);
        }
        if (parseInt(time / 60) > 9 && time - parseInt(time / 60) * 60 < 10) {
            console.log("00:20:05");
            totalTime = "00:" + parseInt(time / 60) + ":0" + parseInt(time - parseInt(time / 60) * 60);
        }
        if (parseInt(time / 60) > 9 && time - parseInt(time / 60) * 60 > 9) {
            console.log("00:20:22");
            totalTime = "00:" + parseInt(time / 60) + ":" + parseInt(time - parseInt(time / 60) * 60);
        }
        return totalTime;
    }
    //此处为时级视频 
    if (parseInt(time / 60) > 59) { //此处为时级 例如 59分钟 时间显示 01:00:00秒  
        if (parseInt(time / 60) / 60 < 10 && parseInt(time / 60) % 60 == 0) {
            console.log("01:00:00");
            totalTime = "0:" + parseInt(time / 60) / 60 + "00:00";
        }
        if (parseInt(time / 60) / 60 > 9 && parseInt(time / 60) % 60 == 0) {
            console.log("10:00:00");
            totalTime = parseInt(time / 60) / 60 + ":00:00";
        }

        if (parseInt(time / 60) / 60 < 10 && parseInt(time / 60) % 60 == 0) {
            console.log("01:32:00");
            totalTime = "0:" + parseInt(parseInt(time / 60) / 60) + ":" + parseInt(time / 60) % 60 + ":00";
        }
        if (parseInt(time / 60) / 60 > 9 && parseInt(time / 60) % 60 == 0 && parseInt(time - (parseInt(time / 60) / 60) * 60 * 60 - parseInt(parseInt(time / 60) % 60) > 9)) {
            console.log("10:32:23");
            totalTime = parseInt(time / 60) / 60 + ":" + parseInt(parseInt(time / 60) % 60) + ":" + parseInt(time - parseInt((parseInt(time / 60) / 60)) * 60 * 60 - parseInt(parseInt(time / 60) % 60));
        }

        if (parseInt(time / 60) / 60 < 10 && parseInt(time / 60) % 60 < 10 && parseInt(time - parseInt(parseInt(time / 60) / 60) * 60 * 60 - parseInt(parseInt(time / 60) % 60) * 60 < 9)) {
            console.log("01:05:05");
            totalTime = "0:" + parseInt(time / 60) / 60 + ":0" + parseInt(parseInt(time / 60) % 60) + ":0" + parseInt(time - parseInt(parseInt(time / 60) / 60) * 60 * 60 - parseInt(parseInt(time / 60) % 60));
        }
        if (parseInt(time / 60) / 60 < 10 && parseInt(time / 60) % 60 < 10 && time - parseInt(parseInt(time / 60) / 60) * 60 * 60 - parseInt(parseInt(time / 60) % 60) * 60 > 9) {
            console.log("10:05:50");
            totalTime = parseInt(time / 60) % 60 + ":0" + parseInt(parseInt(time / 60) % 60) + parseInt(time - (parseInt(time / 60) / 60) * 60 * 60 - parseInt(parseInt(time / 60) % 60));
        }

        return totalTime;
    }
}
const reader = (f) => {
    let i = 0,
        reader = new FileReader(),
        timer = null,
        fSize = f.size / 1024 / 1024,
        previewVideo = document.getElementById("previewVideo");
    getClassName("videoUploadShowInfo").style.display = "inline-block";
    getClassName("videoUploadInner").style.display = "none";
    previewVideo.oncanplay = function() {
        let videoTime = getTime(this.duration);
    }
    reader.readAsDataURL(f);

    reader.onload = function() {
        getClassName('videoPreview').getElementsByTagName("video")[0].src = reader.result;
    }

    timer = setInterval(function() {
        i += 1;
        if (i > 48) {
            getClassName('videoUploadPrograss').style.color = "#f5f5f5";
        }
        if (i <= 100) {
            getClassName('videoUploadbg').style.width = i + "%";
            getClassName('videoUploadPrograss').innerText = i + "%";
        } else {
            clearInterval(timer);
        }
    }, 300);
}
const dragUploadVideo = () => {
    setTimeout(function() {
        let dropbox = getClassName('videoUploadWrap');

        dropbox.addEventListener("dragover", function(e) {
            mrEvent(e);
        }, false);

        dropbox.addEventListener("drop", function(e) {
            mrEvent(e);
            let list = e.dataTransfer.files;
            let f = list[0];
            if (/mp4|MP4/gi.test(f.name)) {
                reader(f);
            } else {
                alert("请上传视频");
            }
        }, false);
    }, 0);
}
const uploadVideo = (ev) => {
    let f = ev.srcElement.files[0];
    reader(f);
}
const modifyPhoto = () => {
    let photoCircle = getId('previewCircle'),
        previewShear = getId('previewShear'),
        ctx = photoCircle.getContext("2d"),
        ctx2 = previewShear.getContext("2d"),
        file = null,
        canvasImage = null,
        canvasImageArr = [],
        reader,
        previewPhoto = getId('previewPhoto');
    photoCircle.width = "80";
    photoCircle.height = "80";
    previewShear.width = "500";
    previewShear.height = "500";

    function canFun(x, y) {
        let top = !y ? 0 : parseInt(y);
        let left = !x ? 0 : parseInt(x);
        ctx.clearRect(0, 0, 80, 80);
        ctx.save();
        ctx.arc(40, 40, 40, 0 * Math.PI, 2 * Math.PI);
        ctx.clip();
        ctx.drawImage(previewPhoto, 0, 0, 80, 80);
        ctx2.clearRect(0, 0, 500, 500);
        ctx2.drawImage(previewPhoto, top * 2.5, left * 2.5, 250, 250, 0, 0, 500, 500);
    }

    function getCanvasImg() {
        let f = document.getElementById("previewShear").toDataURL();

        function dataURLtoBlob(dataurl) {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
        canvasImage = dataURLtoBlob(f);
        canvasImageArr.shift();
        canvasImageArr.push(canvasImage);
        return canvasImageArr;
    }
    //鼠标按下范围框 判断鼠标是否移动 是否抬起 抬起则取消鼠标按下事件  
    $('#chooseBox').mousedown(function(e) {
        mrEvent(e);
        let oEvent = e || event,
            originX = e.clientX,
            originY = e.clientY,
            left = 0,
            top = 0;
        window.onmousemove = function(e) {
            mrEvent(e);
            top = e.clientY - originY,
                left = e.clientX - originX;
            $('#chooseBox').css({ left: left, top: top });
            if ($('#chooseBox').position().left <= 0) {
                left = 0;
                $('#chooseBox').css({ left: left, });
            }
            if ($('#chooseBox').position().left > 120) {
                left = '120px'
                $('#chooseBox').css({ left: left });
            }
            if ($('#chooseBox').position().top <= 0) {
                top = 0;
                $('#chooseBox').css({ top: top });
            }
            if ($('#chooseBox').position().top > 120) {
                top = '120px'
                $('#chooseBox').css({ top: top });
            }
            canFun(top, left);
        }
        window.onmouseup = function(e) {
            mrEvent(e);
            window.onmousemove = null;
            return getCanvasImg();
        }
    });

    function changeFile() {
        $('.chooseBox').css({ display: 'block', left: 0, top: 0 });
        file = $(this)[0].files[0];
        reader = new FileReader();
        reader.onload = function(e) {
            previewPhoto.setAttribute('src', e.target.result);
            canFun();
        }

        reader.readAsDataURL(file);
    }
    $("input[type='file']").change(changeFile);
    return getCanvasImg();
}
export default {
    TopNavList, //顶部导航
    SubNavList, //顶部子导航
    QrNavList, //二维码导航
    FooterList, //底部导航
    Copyright, //版权信息
    getbannerList, //获取banner导航
    funnyBannerList, //搞笑视图banner
    splitArrTen, //数组每10个分为一组
    splitArrTwl, //数组每12个分为一组
    getSession, //获取session信息
    setSession, //设置session信息
    dragUploadVideo, //拖拽上传视频
    uploadVideo, //文件上传视频
    modifyPhoto, //修改个人中心头像
};