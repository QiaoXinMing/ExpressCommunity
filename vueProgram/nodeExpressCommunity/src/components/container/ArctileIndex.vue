<template>
  <div class="beautiful-article">
   <ul>
    <li v-for="(expressArctile,index) in expressArctileList" :key=index>
      <div v-if="expressArctile.resource_url !== '' " class="beautiful-article-model">
       <router-link tag="h3" :to="{path:'ArctileDetails',query:{id:expressArctile.arctile_id}}" class="overflow ht">
         {{expressArctile.arctile_title}}
        </router-link>
       <div class="beautiful-article-info posrel">
        <div class="beautiful-article-img">
            <img :src=expressArctile.resource_url>
        </div>	
        <div class="beautiful-article-info-content right">
        <p class="ht">{{expressArctile.arctile_content}}</p>
        </div>
        <div class="beautiful-article-bottom-info posabs"> 
          <em>[&nbsp;{{expressArctile.arctile_classfiy}}&nbsp;]</em>
          <em><i class="fa fa-eye"></i>&nbsp;{{expressArctile.arctile_looked}}</em>
          <em><i class="fa fa-reply"></i>&nbsp;{{expressArctile.arctile_reply}}</em>
          <em><i class="fa fa-share-alt"></i>&nbsp;{{expressArctile.arctile_forward}}</em>
          <em><i class="fa fa-folder-open"></i>&nbsp;{{expressArctile.arctile_collection}}</em>
          <em>{{expressArctile.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
          <em><i class="fa fa-user"></i>&nbsp;{{expressArctile.personal_username}}</em>
        </div>
      </div>
    </div>

    <div v-else class="noPicture">
      <router-link tag="h3" :to="{path:'ArctileDetails',query:{id:expressArctile.arctile_id}}" class="overflow ht">
        {{expressArctile.arctile_title}}
	   </router-link>
     <div class="beautiful-article-info">	
      <p class="ht">{{expressArctile.arctile_content}}</p>
        <div class="beautiful-article-bottom-info right"> 
          <em>[&nbsp;{{expressArctile.arctile_classfiy}}&nbsp;]</em>
          <em><i class="fa fa-eye"></i>&nbsp;{{expressArctile.arctile_looked}}</em>
          <em><i class="fa fa fa-reply"></i>&nbsp;{{expressArctile.arctile_reply}}</em>
          <em><i class="fa fa-share-alt"></i>&nbsp;{{expressArctile.arctile_forward}}</em>
          <em><i class="fa fa-folder-open"></i>&nbsp;{{expressArctile.arctile_collection}}</em>
          <em>{{expressArctile.arctile_publishTime}}&nbsp;<i class="fa fa-clock-o"></i></em>
          <em><i class="fa fa-user"></i>&nbsp;{{expressArctile.personal_username}}</em>
        </div>
     </div>
   </div>
   </li>
  </ul>
 </div>
</template>

<script>
import store from "../../store/index";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "ArctileIndex",
  props:["addMoreTotalList"],
  created:function(){
    this.getParagraList();
  },
  mounted: function() {
    
  },
  computed: {
    ...mapState(["expressArctileList"])
  },
  methods: {
    ...mapActions(["getParagraList"]),
  },
  store
};
</script>
