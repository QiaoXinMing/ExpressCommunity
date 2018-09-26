<template>
   <div class="container middle clearfix videoDetails"> 
      <div class="VideoDetailsLeft DetailsLeft hotTag">
        <div class='detailsInfo'>
         <video :src= videoDetais.resource_url class="left"></video>
          <div class="repWidth controlStrip height bg"> 
            <span class="playInfo posrel height"> <i class="fa fa-play play posabs" id="play"></i> <i class="fa fa-pause pause posabs hiddenNone" id="pause"></i> </span> 
            <span class="timeInfo"> <em id="currentTime">00:00</em>/ <em id="durationtime">{{videoDetais.video_time}}</em> </span> 
            <span class="prograss posrel"> <em id="prograss" class="posabs"></em> </span> 
            <span class="volume posrel" id="parentVolumeWrap posrel">
              <i class="fa fa-volume-up height"></i> 
              <em id="parentVolume" class="posabs parentVolume"><i id="volume" class="posabs"></i></em> 
            </span>
            <span class="video-down">
              <a :href= videoDetais.resource_url :title= videoDetais.video_title :alt= videoDetais.video_title >
              <i class="fa fa-download"></i>
              </a>
            </span>
            <span class="video-down video-like"><i id="heart" class="fa fa-heart-o"></i></span>
            <span class="video-share"><i id="heart" class="fa fa-share-alt"></i></span>
            <span class="fullScreen" id="fullscreen">
                  <i class="fa fa-arrows-alt"></i>
            </span> 
          </div> 
     </div>
<comment :arctileId="arctileId"></comment>
   </div>
    <DetailsRightInfo :userInfo="userInfo"/>
  </div>
</template>

<script>

import DetailsRightInfo from "./DetailsRightInfo";
import comment from "./comment";
import store from "../../store/index";
import { mapState,mapActions} from "vuex";
export default {
  name: "VideoDetails",
  data() {
    return {
      userInfo:[],
      arctileId:0,
    };
  },
  components: {
    DetailsRightInfo,
    comment
  },
  created:function(){
     this.postVideoDetails(this.$route.query.id);
      this.arctileId = this.$route.query.id;   //调用id查询评论信息数据
  },
  mounted:function(){
     this.index.playVideo();
  },
  computed: {
    ...mapState(["videoDetais",])
  },
  methods:{
    ...mapActions(["postVideoDetails",])    
  },
  watch:{
     videoDetais(){
	     this.userInfo = this.videoDetais;
     }
  },
  store
};
</script>
