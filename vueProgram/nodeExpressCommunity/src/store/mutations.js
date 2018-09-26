import serverMethod from './serverMethod';
let vc = null;
const mutations = {
    GETNAVLIST(state, args) {
        state.TopNavList = serverMethod.TopNavList(args);
        state.SubNavList = serverMethod.SubNavList(args);
        state.QrNavList = serverMethod.QrNavList(args);
        state.FooterList = serverMethod.FooterList(args);
        state.Copyright = serverMethod.Copyright(args);
        state.bannerList = serverMethod.getbannerList(args);
    },
    GETHOTDATA(state, args) {
        state.hotdata = args;
    },
    SELECTIONTOPICS(state, args) {
        state.hotTopicList = args;
    },
    SELECTINVITATION(state, args) {
        state.invitationList = args;
    },
    SELECTINVITATIONPICTURELIST(state, args) {
        state.invitationPictureList = args;
    },
    SELECTMEBER(state, args) {
        state.meberShowList = args;
    },
    SELECTFUNNYBANNERLIST(state, args) {
        state.funnyBannerList = serverMethod.funnyBannerList(args);
    },
    SELECTFUNNYPICTUREVIDEOLIST(state, args) {
        state.funnyPictureList = args;
    },
    SELECTGETPARAGRALIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        let arctileNum = serverMethod.getSession("arctileNum");
        if (parseInt(arctileNum) > 0) {
            state.expressArctileList = state.tempList[parseInt(arctileNum) - 1].concat(state.tempList[parseInt(arctileNum)]);
        } else {
            state.expressArctileList = state.tempList[0];
        }
        state.indexTotalNum = args.length;
    },

    ADDMOREARCTILESLIST(state, type) {
        let num = null;
        if (type == "arctiles") {
            num = serverMethod.getSession("arctileNum");
            if (parseInt(num) < state.tempList.length - 1) {
                state.expressArctileList = state.tempList[parseInt(num)].concat(state.tempList[parseInt(num) + 1]);
                serverMethod.setSession("arctile", num - -1);
            }
        } else {
            num = serverMethod.getSession("videoNum");
            if (parseInt(num) < state.tempList.length - 1) {
                state.videoList = state.tempList[parseInt(num)].concat(state.tempList[parseInt(num) + 1]);
                serverMethod.setSession("video", num - -1);
            }
        }

    },
    SELECTGETPARAGRAPHBLIST(state, args) {
        state.arctilePhList = args;
    },
    SELECTGETPARAGRAPHBPLLIST(state, args) {
        state.arctilePhList = args;
    },
    SELECTGETRECOMMEND(state, args) {
        state.articleRankingList = args;
    },
    SELECTPICTURELIST(state, args) {
        state.tempList = serverMethod.splitArrTwl(args);
        let pictureNum = serverMethod.getSession("pictureNum");
        if (parseInt(pictureNum) > 0) {
            state.pictureShowList = state.tempList[parseInt(pictureNum) - 1].concat(state.tempList[parseInt(pictureNum)]);
        } else {
            state.pictureShowList = state.tempList[0];
        }
    },
    WATERFALL(state) {
        let pictureNum = serverMethod.getSession("pictureNum");
        if (parseInt(pictureNum) < state.tempList.length - 1) {
            state.pictureShowList = state.tempList[parseInt(pictureNum)].concat(state.tempList[parseInt(pictureNum) + 1]);
            serverMethod.setSession("picture", pictureNum - -1);
        }
    },
    SELECTVIDEO(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        let videoNum = serverMethod.getSession("videoNum");
        if (parseInt(videoNum) > 0) {
            state.videoList = state.tempList[parseInt(videoNum) - 1].concat(state.tempList[parseInt(videoNum)]);
        } else {
            state.videoList = state.tempList[0];
        }
    },
    SELECTPUBLICINDEX(state, args) {
        state.publicIndexList = args;
    },
    ARCTILEDETAILS(state, args) {
        state.arctileDetais = args;
    },
    PICTUREDETAILS(state, args) {
        state.pictureDetailsList = args;
    },
    VIDEODETAILS(state, args) {
        state.videoDetais = args;
    },
    PERSONALOPERATION(state, args) {
        state.personalsetList = args;
    },
    PERSONALPERARCTILELIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.perArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALPICTURELIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.perPictureShowList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALVIDEOLIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.perVideoList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALQUESTION(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.questionArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALANSWER(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.answerArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALDRAFTS(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.draftsArctileList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALCOLLECTION(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.perCollection = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    PERSONALMESSAGELIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.messageList = state.tempList[0];
        state.indexTotalNum = args.length;
    },
    CHANGEINDEXNUM(state, num) {
        state.expressArctileList = state.tempList[num - 1];
    },
    CHANGEPAGE(state, num) {
        state.perArctileList = state.tempList[num - 1];
    },
    CHANGEPICTUREPAGE(state, num) {
        state.perPictureShowList = state.tempList[num - 1];
    },
    CHANGEVIDEOPAGE(state, num) {
        state.perVideoList = state.tempList[num - 1];
    },
    CHANGEQUESTIONPAGE(state, num) {
        state.questionArctileList = state.tempList[num - 1];
    },
    CHANGEABSWERPAGE(state, num) {
        state.answerArctileList = state.tempList[num - 1];
    },
    CHANGEDRAFTSPAGE(state, num) {
        state.draftsArctileList = state.tempList[num - 1];
    },
    CHANGECOLLECTIONPAGE(state, num) {
        state.perCollection = state.tempList[num - 1];
    },
    CHANGEMESSAGEPAGE(state, num) {
        state.messageList = state.tempList[num - 1];
    },
    SEARCHLIST(state, args) {
        state.tempList = serverMethod.splitArrTen(args);
        state.searchList = state.tempList[0];
    },
    CHECKREGISTERUSERNAME(state, args) {
        if (args[0]) {
            alert("用户已被注册");
        }
    },
    VCMETHOD(state, args) {
        vc = args;
    },
    REGISTER(state, args) {
        alert("注册成功");
    },
    LOGIN(state, args) {
        if (args[0]) {
            vc.$router.push({
                name: 'personal',
            });
        } else {
            alert("密码不对劲");
        }
    },
    GETUSERLOGIN(state, args) {
        state.user = args[0];
        state.personalPhoto = state.user.personal_pic;
    },
    CHECKLOGINED(state, args) {
        if (serverMethod.getSession("username") === "null") {
            vc.$router.push({
                name: 'login',
            });
        } else {
            vc.$router.push({
                name: 'publish',
            });
        }
    },
    CHANGEEDITORCLASSFIY(state, args) {
        let _this = vc;
        _this.navTitle = args.currentTarget.innerText;
        if (_this.navTitle == "文章") {
            _this.showEditor = 2;
            _this.submitValue = "发布";
            if (_this.$refs.myTextEditor) {
                _this.$refs.myTextEditor.quill.enable(true);
            }
        } else if (_this.navTitle == "图集") {
            if (_this.$refs.myTextEditor) {
                _this.$refs.myTextEditor.quill.enable(false);
            }
            _this.showEditor = 3;
            _this.submitValue = "上传";
        } else {
            if (_this.$refs.myTextEditor) {
                _this.$refs.myTextEditor.quill.enable(false);
            }
            _this.showEditor = 4;
            _this.submitValue = "上传";
            serverMethod.dragUploadVideo();
        }
    },
    CHANGEEDITORSUBCLASSFIY(state, args) {
        vc.subNavTitle = args.currentTarget.innerText;
    },
    CLOSELOOKEDITOR(state, args) {
        if (vc.$refs.LookEditor) {
            vc.$refs.LookEditor.quill.enable(false);
        }
    },
    CHANGETEXT(state, args) {
        let _this = vc;
        if (_this.$refs.LookEditor) {
            _this.$refs.LookEditor.quill.root.innerHTML = _this.container;
        }
    },
    UPLOADIMAGE(state, ev) {
        let obj = {};
        obj.pictureSrc = "";
        obj.description = "";
        ev.target.onchange = function() {
            let file = null,
                reader;
            file = this.files[0];
            reader = new FileReader();
            reader.onload = function(e) {
                obj.pictureSrc = e.target.result;
            };
            reader.readAsDataURL(file);
            if (state.uploadPictureList.length < 9) {
                state.uploadPictureList.unshift(obj);
                setTimeout(function() {
                    if (state.uploadPictureList.length > 4) {
                        ev.target.parentNode.parentNode.style.marginRight = 0;
                    }
                    if (state.uploadPictureList.length > 5) {
                        ev.target.parentNode.parentNode.parentNode.children[state.uploadPictureList.length - (state.uploadPictureList.length % 5)].style.marginRight = 0;
                    }
                }, 0)
            } else {
                alert("只能上传9张图片");
            }
        }
    },
    UPLOADVIDEO(state, ev) {
        serverMethod.uploadVideo(ev);
    },
    MODIFYPHOTO(state) {
        state.personalPhoto = serverMethod.modifyPhoto();
    }
};

export default mutations;