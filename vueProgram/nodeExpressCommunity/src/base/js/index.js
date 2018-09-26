//获取id元素信息
const getId = (args) => {
    return document.getElementById(args);
}

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

/* 获取动态样式*/
const getStyle = (element, alt) => parseInt((element.currentStyle ? element.currentStyle : window.getComputedStyle(element, "null"))[alt]);

//阻止默认事件阻止冒泡事件
const mrEvent = (e) => {
    let eve = e || window.event;
    eve.stopPropagation ? eve.stopPropagation() : window.event.cancelBubble = true;
    eve.preventDefault ? eve.preventDefault() : window.event.returnValue = false;
}

//设置响应式字体
let fontSize = () => {
    const scale = 1 / window.devicePixelRatio; //设置缩放比例	
    document.querySelector('meta[name=viewport]').setAttribute('content', 'width=device-width,initial-scale=' + scale + ',maximum-scale=' + scale + ',minimum-scale=' + scale + ',user-scalable=no');
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 12 / 10 + 'px'; //设置文档字体大小
}


//设置sessionStore
const userAgent = (userInfo) => {
    let user = userInfo || null;
    if (user) {
        sessionStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%" + 0 + "%pictureNum%" + 0 + "%videoNum%" + 0 + "%username%" + user.username + "%password%" + user.password);
    } else {
        sessionStorage.setItem("JingYanSheQuDefultUserInfo", "%arctileNum%" + 0 + "%pictureNum%" + 0 + "%videoNum%" + 0 + "%username%null%password%null");
    }

}
window.onload = function() {
    fontSize();
    userAgent();
}

window.onresize = function() {
    fontSize();
}
const showMoreNav = () => {
    document.getElementsByClassName("NavMoreList")[0].style.top = 0;
}
const closeMoreNav = () => {
    document.getElementsByClassName("NavMoreList")[0].style.top = (window.screen.height / 16) + "rem";
}
const startBanner = () => {
    let imgsUL = getClassName("bannerSlideWrapper")[0],
        nav = getClassName("dotWrap"),
        prev = getClassName("prev")[0],
        next = getClassName("next")[0],
        timer = null,
        animTimer = null,
        index = 1;


    //init images set images offsetLeft PX
    function initImgs(cur_index) {
        clearInterval(timer);
        clearInterval(animTimer);
        let off = cur_index * 680;
        imgsUL.style.left = -off + "px";
    }

    //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -680) {
            donghua(-3400);
        } else if (newLeft < -3400) {
            donghua(-680);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        animTimer = setInterval(function() {
            imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);
                play();
            }
        }, 20);
    }

    function play() {
        timer = setInterval(function() {
            next.onclick();
        }, 2000)
    }

    function btnShow(cur_index) {
        for (let i = 0; i < nav.children.length; i++) {
            nav.children[i].className = "";
        }
        nav.children[cur_index - 1].className = "current";
    }

    for (var i = 0; i < nav.children.length; i++) {
        nav.children[i].index = i;
        nav.children[i].onmouseover = function() {
            index = this.index + 1;
            initImgs(this.index + 1);
            btnShow(this.index + 1);
        }
        nav.children[i].onmouseout = function() {
            play();
        }
    }

    prev.onclick = function() {
        initImgs(index);
        index -= 1;
        if (index < 1) {
            index = 4;
        }
        animate(680);
        btnShow(index);
    }

    next.onclick = function() {
        initImgs(index);
        index += 1;
        if (index > 5) {
            index = 1;
        }
        animate(-680);
        btnShow(index);
    }
    play();
}


const hoverChange = (el) => {
    let dd = el.parentNode.getElementsByTagName("dd");
    for (let i = 0; i < dd.length; i++) {
        dd[i].getElementsByTagName("p")[0].className = "invitation-info-hidden hiddenNone";
    }
    el.getElementsByTagName("p")[0].className = "invitation-info-show showInfo";
}

const meberBanner = () => {

    let imgsUL = getClassName("meber-show-banner-admin-list"),
        prev = getClassName("prev")[1],
        next = getClassName("next")[1],
        animTimer = null,
        index = 1;



    //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -208) {
            donghua(-1380);
        } else if (newLeft < -1380) {
            donghua(-208);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        animTimer = setInterval(function() {
            imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);

            }
        }, 20);
    }



    prev.onclick = function() {
        index -= 1;
        if (index < 1) {
            index = 8;
        }
        animate(208);
    }

    next.onclick = function() {
        index += 1;
        if (index > 9) {
            index = 1;
        }
        animate(-208);
    }

}

const funnyBanner = () => {
    let imgsUL = getClassName("bannerSlideWrapper")[1],
        timer = null,
        animTimer = null;


    //init animate
    function animate(offset) {
        let newLeft = parseInt(imgsUL.offsetLeft) + offset;
        if (newLeft > -340) {
            donghua(-1700);
        } else if (newLeft < -1700) {
            donghua(-340);
        } else {
            donghua(newLeft);
        }
    }

    function donghua(offset) {
        clearInterval(animTimer);
        clearInterval(timer);
        animTimer = setInterval(function() {
            imgsUL.style.left = imgsUL.offsetLeft + (offset - imgsUL.offsetLeft) / 10 + "px";
            if (imgsUL.offsetLeft - offset < 10 && imgsUL.offsetLeft - offset > -10) {
                imgsUL.style.left = offset + "px";
                clearInterval(animTimer);
                play();
            }
        }, 20);
    }

    function play() {
        timer = setInterval(function() {
            animate(-340);
        }, 2000)
    }

    play();
}
const checkUserName = (name) => {
    let regChinese = /^[\u4e00-\u9fa5]{2,4}$/, // chinese
        regEmail = /^([a-zA-Z0-9_])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{3,4})+$/, // email
        regPhone = /^1[3|5|7|8][0-9]\d{8}$/, // phone
        ch = regChinese.test(name),
        email = regEmail.test(name),
        Phone = regPhone.test(name);
    if (ch || email || Phone) {
        return name;
    }

    if (!ch && !email && !Phone) {
        return;
    }
}
const checkPassword = (password) => {
    let regPass = /^[a-zA-Z0-9\~\'\!\@\#\￥\$\%\^\&\*\(\)\-\+\_\=\:\.]{6,12}$/;
    if (regPass.test(password)) {
        return password;
    } else {
        return;
    }
}

const getNowTime = () => {
    let date = new Date(),
        year = date.getFullYear(),
        mounth = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        second = date.getSeconds();
    return year + "-" + mounth + "-" + day + " " + hours + ":" + minutes + ":" + second;
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

export default {
    showMoreNav,
    closeMoreNav,
    startBanner,
    meberBanner,
    hoverChange,
    funnyBanner,
    checkUserName,
    checkPassword,
    getNowTime,
    userAgent,
    getSession,
}