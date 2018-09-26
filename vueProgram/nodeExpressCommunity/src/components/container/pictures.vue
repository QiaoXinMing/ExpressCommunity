<template>
  <div class="container picture middle"> 
   <ul class="clearfix"> 
    <li v-for="(pictureShowItem,index) in pictureShowList" :key="index"> 
     <div v-if="(index+1)%4 != 0" class="pictureShow"> 
      <div class="pictureShow-fengmian"> 
        <router-link tag="a" :to="{path:'PictureDetails',query:{id:pictureShowItem.picture_id}}" class="posrel">
           <img :src="pictureShowItem.resource_url" /> <label class="posabs">{{pictureShowItem.picture_classfiy}}</label>
       </router-link>
      </div> 
      <div class="pictureShow-author-info"> 
       <div class="userInfo"> 
        <img :src="pictureShowItem.personal_pic" /> 
       </div> 
       <div class="pictureShow-title right"> 
        <span>{{pictureShowItem.personal_username}}</span> 
        <span class="right">{{pictureShowItem.picture_publishTime}}</span> 
        <h6 class="overflow">{{pictureShowItem.picture_title}}</h6> 
       </div> 
       <div class="pictureShow-details height"> 
        <span>{{pictureShowItem.picture_forward}}&nbsp;人转发</span> 
        <span>{{pictureShowItem.picture_collection}}&nbsp;人收藏</span> 
        <span>{{pictureShowItem.picture_looked}}&nbsp;人浏览</span> 
        <span>{{pictureShowItem.picture_reply}}&nbsp;回复</span> 
       </div> 
      </div> 
     </div> 
     <div v-else class="pictureShow noMarginRight"> 
      <div class="pictureShow-fengmian"> 
        <router-link tag="a" :to="{path:'PictureDetails',query:{id:pictureShowItem.picture_id}}" class="posrel">
          <img :src="pictureShowItem.resource_url" /> <label class="posabs">{{pictureShowItem.picture_classfiy}}</label>
        </router-link>
      </div> 
      <div class="pictureShow-author-info clearfix"> 
       <div class="userInfo"> 
        <img :src="pictureShowItem.personal_pic" /> 
       </div> 
       <div class="pictureShow-title overflow right"> 
        <span>{{pictureShowItem.personal_username}}</span> 
        <span class="right">{{pictureShowItem.picture_publishTime}}</span> 
        <h6 class="overflow">{{pictureShowItem.picture_title}}</h6> 
       </div> 
       <div class="pictureShow-details"> 
        <span>{{pictureShowItem.picture_forward}}&nbsp;人转发</span> 
        <span>{{pictureShowItem.picture_collectionNum}}&nbsp;人收藏</span> 
        <span>{{pictureShowItem.picture_looked}}&nbsp;人浏览</span> 
        <span>{{pictureShowItem.picture_reply}}&nbsp;回复</span> 
       </div> 
      </div> 
     </div> 
    </li> 
   </ul> 
  </div>
</template>

<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";

export default {
  name: "pictures",
  created: function() {
    this.getPictureList();
  },
  mounted:function(){
    this.imgLoad();
  },
  computed: {
    ...mapState(["pictureShowList"])
  },
  methods: {
    ...mapActions(["getPictureList","getWaterFall"]),
   imgLoad(){
      var _this = this;
     function addPicture(){
        let docHeight = window.document.body.scrollHeight,
            eleTop = window.scrollY || window.document.documentElement.scrollTop || document.body.scrollTop,
            eleHeight = window.document.getElementsByClassName("picture")[0].getElementsByTagName("li")[0].offsetHeight,
	    scrollTop = docHeight - eleTop - 2.5*eleHeight -100;
	    if(scrollTop < 146.5){
              _this.getWaterFall();
	    }
     }
       window.onscroll = addPicture;
    },
  },
  deactivated:function(){
     window.onscroll = null;//cancle scroll method 
  },
  store
};
</script>