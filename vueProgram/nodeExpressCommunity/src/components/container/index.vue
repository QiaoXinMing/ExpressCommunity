<template>
 <div class="container clearfix middle">  
   <!--banner start-->
  <div class="bannerSlide posrel">
        <ul class="bannerSlideWrapper posabs">
          <li v-for="(bannerItem,index) in bannerList" :key=index>
            <img :src=bannerItem alt="">
          </li>
        </ul>
  <a href="javascript:;" class="posabs prev">&lt;</a>
  <a href="javascript:;" class="posabs next">&gt;</a>
  <div class="bannerSlideBox posabs">
    <div class="slideWrap">
      <ul class="dotWrap">
        <li class="current"></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
        <li class=""></li>
      </ul>
    </div>
  </div>
</div>
<!-- banner end-->

<!-- today hot -->
<div class="hotday right">
    <div class="hotday-title bbs repWidth height">
    <h2>今日<b>热</b>点</h2>
      <em>TODAY HOT</em>
        </div>
          <div class="hotday-wrap">
            <ul>
              <li v-for="(hotItem,index) in hotdata" :key=index>
                <div class="hotday-content repWidth">
                  <div class="num">
                    <em>{{index+1}}.</em>
                  </div>
                  <div class="hotday-info">
                 <router-link tag="h3" :to="{name:'ArctileDetails',query:{arctileId:hotItem.arctile_id}}" class="fc">{{hotItem.arctile_title}}</router-link>
                 <p>{{hotItem.arctile_content}}</p>
                </div>
                </div>
              </li>		
          </ul>
        </div>
      </div>
  <div class='ad bg repWidth'>经验社区 分享给你我的经验!</div>
<!-- today hot end -->

<div class="index-hot-topic clearfix">
<div class="hot-topic-title height">
	<h3 class="left">精选话题</h3>
	<div class="publish right"><!-- :to="{path:'/publish/'+username}"  -->
	<a class="bg height addMore" @click="publish()">发布文章</a>
	</div>
</div>

<div class="hot-topic-left left">
   <div class="hot-topic-list">
    <ul class="hot-topic-list-wrap">
    <li v-for="(hotTopicItem,index) in hotTopicList" :key=index>
     <div v-if="hotTopicItem.resource_type != 'arctile' ">
     <router-link tag="a" :to="{name:'VideoDetails'}">
       <div class="hot-topic-list-pic left">
        <video controls><source :src=hotTopicItem.resource_url type="video/mp4"></video>
       </div>
     </router-link>
     <div class="hot-topic-list-content right">
      <h3 class="overflow fc height">{{hotTopicItem.arctile_title}}</h3>
      <p class="hot-topic-list-content-info">{{hotTopicItem.arctile_content}}</p>
      <p class="hot-topic-list-content-browse right"> 
      <span>{{hotTopicItem.arctile_reply}} 人回复</span><span>|</span>
      <span>{{hotTopicItem.arctile_looked}} 人浏览</span></p>
     </div>
     
    </div>
   <div v-else>
   <div class="hot-topic-list-pic left"><img :src=hotTopicItem.resource_url alt=""></div>
   <div class="hot-topic-list-content right">
    <h3 class="overflow fc">{{hotTopicItem.arctile_title}}</h3>
    <router-link tag="a" :to="{name:'ArctileDetails'}">
    <p class="hot-topic-list-content-info">{{hotTopicItem.arctile_content}}</p>
    </router-link>
    <p class="hot-topic-list-content-browse right"> <span>{{hotTopicItem.arctile_reply}} 人回复</span><span>|</span><span>{{hotTopicItem.arctile_looked}} 人浏览</span></p>
   </div>
  
  </div>
     </li>
    </ul>

<div class="meber-show bg posrel">
   <span class="meber-show-icon left"> 
     <i class="fa fa-quote-left"></i>
     <div class="meber-show-title height">3 篇新主题</div>
  </span>
<div class="meber-show-banner">
 <div class="meber-show-banner-admin posrel">
  <ul class="meber-show-banner-admin-list posabs">
    <li v-for=" (meberShowItem,index) in meberShowList" :key=index>
     <div class="meber-show-banner-admin-list-parent posrel">
       <div class="meber-show-banner-admin-pic left">
        <img :src=meberShowItem.personal_pic class="left">
      </div>
      <div class="meber-show-banner-admin-user right">
      <h3 class="overflow">{{meberShowItem.personal_username}}<a>{{meberShowItem.arctile_title}}</a></h3>
     </div>
      <i class="meber-show-banner-admin-article-trangle posabs"></i>
      <div class="meber-show-banner-admin-article-details clearfix">
        {{meberShowItem.arctile_content}} 
       </div>
      </div>
     </li>
     </ul>
    </div>
   </div>
       <a href="javascript:;" class="change-bnt prev posabs">&lt;</a>
       <a href="javascript:;" class="change-bnt next posabs">&gt;</a>
      </div>
    </div>
</div>

<div class="invitation right">
  <dl class="invitation-info">
	  <dt><h3>精选帖子</h3></dt>
	  <dd v-for="(invitationItem,index) in invitationList" :key=index class="clearfix" @mouseenter="hoverChange($event)">
      <i>{{index+1}}.</i>
       <router-link tag="a" :to="{name:'ArctileDetails'}" class="right overflow">{{invitationItem.arctile_title}}</router-link>
       <p v-if="index == 0 " class="invitation-info-show showInfo">{{invitationItem.arctile_content}}<router-link tag="a" :to="{path:'ArctileDetails'}" class='more right'> 查看更多</router-link></p>
       <p v-else class="invitation-info-hidden hiddenNone">{{invitationItem.arctile_content}}<router-link tag="a" :to="{path:'ArctileDetails'}" class='more right'>查看更多</router-link></p>
     </dd>
    </dl>

  <div class="invitation-show">
	<ul>
	  <router-link tag="li" :to="{path:'PictureDetails/'+invitationItem.picture_id}" v-for="(invitationItem,index) in invitationPictureList" class="invitation-show-list overflow posrel "  :key=index>
       <img :src=invitationItem.resource_url :alt=invitationItem.picture_classfiy :title=invitationItem.picture_classfiy>
        <span class="invitation-show-list-background posabs flexAnimate showInfo"></span>
        <a href="" class="invitation-show-list-info posabs flexAnimate showInfo">{{invitationItem.picture_title}}</a>
      </router-link>
	</ul>
     </div>
    </div>
   </div>
   <!-- end  -->
   <!-- funny start -->

   <div class="index-hot-topic clearfix">
    <div class="hot-topic-title">
        <h3 class="height">搞笑视图</h3>
    </div>

    <div class="bannerSlide left funnyBanner posrel">
        <ul class="bannerSlideWrapper posabs">
            <li v-for="(bannerItem,index) in funnyBannerList" :key=index class="posrel">
                <img :src=bannerItem.resource_url alt="">
                <div class="funnyPicture-info posabs">{{bannerItem.picture_content}}</div>
            </li>
        </ul>
    </div>

    <div class="funny-picture">
        <ul>
            <li v-for="(funnyPictureItem,index) in funnyPictureList" class="funny-picture-list posrel" v-if="funnyPictureItem.resource_type == 'picture' " :key=index>
                <a class="funny-picture-list-pic">
                    <img :src=funnyPictureItem.resource_url>
                </a>
                <span class="funny-picture-background flexAnimate posabs showInfo posabs"></span>
                <a class="funny-picture-list-info posabs flexAnimate showInfo" >{{funnyPictureItem.arctile_title}}</a>
            </li>
            <li class="funny-video-list" v-else>
                <video controls>
                    <source :poster=funnyPictureItem.picture_content :src=funnyPictureItem.resource_url type="video/mp4">
                </video>
            </li>
        </ul>
    </div>

</div>

   <!-- funny end -->
   <!-- arctile start-->
<div class="index-hot-topic clearfix">
	<div class="hot-topic-title">
		<h3 class="height">美文展示</h3>
	</div>
      <div class="arctiles left">
       <ArctilesIndexs/>
       <pg :total="indexTotalNum" @pagechange="pagechange"></pg>       
      </div>
     <RightInfos/>
   </div>
   <!-- arctile end-->

 </div>
</template>

<script>
import store from "../../store";
import { mapState, mapActions } from "vuex";
import ArctilesIndexs from "./ArctileIndex";
import RightInfos from "./RightInfo";
import pg from "../personal/pg";
export default {
  name: "index",
  data() {
    return {
     username:"",//获取用户名
    };
  },
  
  components:{
    ArctilesIndexs,
    pg,
    RightInfos
  },
  created: function() {
    this.getHotData();//加载今日热点
    this.getSelectionTopics(); //加载精选话题
    this.getInvitationList(); //精选帖子
    this.getInvitationPictureList(); //加载精选图片
    this.getMeberShowList();         //加载会员
    this.getFunnyBannerList();       //幽默banner
    this.getFunnyPictureVideoList();      //幽默视图
    
  },
  mounted:function(){
    this.index.startBanner();//首页banner图片
    this.index.meberBanner();//首页会员banner图片
    this.index.funnyBanner();//首页搞笑banner图片
  },
   computed: {
    ...mapState([
      "bannerList", //banner图
      "hotdata", //今日热点
      "hotTopicList", //精选话题
      "invitationList", //精选帖子
      "invitationPictureList", //精选图片
      "meberShowList", //会员展示
      "funnyBannerList", //幽默banner
      "funnyPictureList", //幽默图片展示包含视频
      "indexTotalNum",//文章展示总记录数
    ])
  },
   methods: {
    ...mapActions([
      "getHotData",
      "getSelectionTopics",
      "getInvitationList",
      "getInvitationPictureList",
      "getMeberShowList",
      "getFunnyBannerList",
      "getFunnyPictureVideoList",
      "getPage",
      "checkLogin",
      "postVC"
    ]),
    hoverChange:function(el){
      this.index.hoverChange(el.target);//精选帖子鼠标划过效果
    },
    pagechange:function(currentPage){
      this.getPage(currentPage);
    },
    publish:function(){
      this.postVC(this);
      this.checkLogin();
    }
  },
   store
}

</script>





