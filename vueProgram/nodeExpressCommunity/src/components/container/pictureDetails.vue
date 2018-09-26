<template>
   <div class="container middle clearfix"> 
   <div class="arctilesDetailsLeft showPictureBanner left"> 
    <div class="slideDetails posrel"> 
     <div class="slideDetailsPicture posrel"> 
      <ul class="slideWrapper posabs"> 
       <li v-for="(bannerItem,index) in pictureDetailsList.resource_url" :key="index"> 
        <div class="showPictureBannerDetailsImg posrel">
         <img :src="bannerItem" alt="" /> 
         <b :href="bannerItem" target="_blank" class="posabs">评论：<i class="fa fa-comment"></i></b> 
         <b :href="bannerItem" target="_blank" class="posabs"><i class="fa fa-download"></i></b> 
        </div> 
        </li> 
      </ul> 
      <div class="slidePictureDetails posabs"> 
       <div class="slideDetailsPictureContainer"> 
        <ul class="wrapperContainer posabs"> 
          <li v-for="(bannerItem,index) in pictureDetailsList.picture_content" :key="index"> {{bannerItem}} </li>  
        </ul> 
       </div> 
      </div> 
     </div> 
     <a href="javascript:;" class="posabs bg prev">上一张</a> 
     <a href="javascript:;" class="posabs bg next">下一张</a> 
    </div> 
  <comment :arctileId="arctileId"></comment>
   </div> 
   <div class="userPictureInfo right"> 
    <h3 class="height">{{pictureDetailsList.picture_title}}</h3> 
    <div class="userPictureDteilsInfo"> 
     <img :src= pictureDetailsList.personal_pic /> 
    </div> 
    <div class="author">
      {{pictureDetailsList.personal_username}} &nbsp;&nbsp; 
     <a href="javascript:void(0)" class="tpgzyh height bg showInfo">关注</a> 
    </div> 
    <div class="detailsPictureContainer"></div> 
    <div class="userFooter clearfix"> 
     <div class="userPictureTime left"> 
      <span class="left">[{{pictureDetailsList.picture_classfiy}}]&nbsp;&nbsp;{{pictureDetailsList.picture_publishTime}}</span> 
      <a class="right" href="javascript:void(0)">举报</a> 
     </div> 
     <div class="userPictureDetailsShareInfoDetails height"> 
      <label class="left">分享到</label> 
      <ul> 
       <li> <i class="fa fa-h-sign"></i></li> 
       <li> <i class="fa fa-h-sign"></i></li> 
       <li> <i class="fa fa-h-sign"></i></li> 
      </ul> 
      <a class="right" href="javascript:void(0)">收藏</a> 
     </div> 
    </div> 
   </div> 
  </div>
</template>

<script>
import comment from "./comment";
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default{
  name:"PictureDetails",
   components: {
    comment
  },
  data(){
    return {
      length:"",
      arctileId:0,
    }
  },
  created:function(){
     this.postPictureDetails(this.$route.query.id);
  },
  computed:{
   ...mapState(['pictureDetailsList','commentList','total']),   
  },
  methods:{
    ...mapActions(["postPictureDetails"]),
  },
  watch:{
    pictureDetailsList(){
     $('.ck-slideDetails').ckSlide({
      dir: 'x',
      length:this.total,
      autoPlay:false
      });
    }
    
  },
  store
}
</script>