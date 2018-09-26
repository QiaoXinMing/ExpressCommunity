<template>
 <div id="header" class="repWidth">
   <div class="loading repWidth left"></div>
   <div class="header middle posrel">
     <div class="topNavInfo">
       <div class='logo left fc'>经验社区</div>
       <div class="TopNavList">
      <div class="primaryNav">
         <ul> 
         <router-link tag='li' :to="{name:navListItem.url}" v-for='(navListItem , index) in TopNavList' :key=index exact>
	   {{navListItem.title}}
         </router-link>
       </ul>
      </div>

       <div class="searchInfo right">
       <div class="form">
         <input type="text" class="left flexAnimate fc ht" name="" id="" v-model="searchInfo" :placeholder="searchPlaceholder"/>
	     <router-link tag="input" type="button" :to="{path:'/search/'+this.searchInfo}" value="搜索" class="fc searchBtn"></router-link>
       </div>
      </div>
    </div>
    </div>

    <div class="hotTag posrel">
      <dl class="left showInfo">
       <dt>热门标签：</dt> 
        <router-link tag='dd'  :to="{name:tagListItem.url}" v-for='(tagListItem , index) in SubNavList' :key=index>
	   {{tagListItem.title}}
         </router-link>
         </dl>
         <div class="navOverFlow">
           <label class="bg">更多</label>
           <div class="showHotTag posabs hiddenNone" v-if=NavTipsFlag >
             {{NavTips}}
           </div>
         </div>
         <div class="NavMore hiddenNone" @click="showMore()">+</div>
    </div>
   <div class="NavMoreList hiddenNone posabs flexAnimate">
     <div class="posrel NavMoreListTop">
       <em @click="closeMoreNav()">+</em>
     </div>
     <div class="NavMoreListTopTips">
       <h4>我的导航<label>点击进入导航</label></h4>
       <b class="right fc">编辑</b>
     </div>
     <div class="NavMorePerDetais">
          <ul>
             <li>关注</li>
             <li>推荐</li>
           </ul>
     </div>
     <div class="NavMoreRecommend">
           <h4>导航推荐<label>点击添加导航</label></h4>
           <ul>
             <li>我是更多标签</li>
             <li>我是更多标</li>
             <li>我是更</li>
             <li>我是更多</li>
             <li>我是</li>
             <li>我是更签</li>
           </ul>
     </div>
    </div>
    <div v-for="(ewmItem,index) in QrNavList"  class="AppDown posabs fc" :key=index>
     <img :src=ewmItem.resource_url :alt=ewmItem.title :title=ewmItem.title />
     <label>{{ewmItem.title}}</label>
    </div>
   </div>
  </div>
</template>

<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";  //单独使用vuex模块中的 mapState,mapActions
import as from "axios";
export default {
  name: "headerTop",
  data() {
    return {
      searchInfo: "",
      searchPlaceholder:"搜搜更懂你",
      NavTips:"暂无更过热门标签。。。。",
      NavTipsFlag:true,
    };
  },
  mounted:function(){
  //    this.index.closeMoreNav();
  },
  created: function() {
    this.getNavList(); //调用store中定义好的获取导航的方法
//    this.getLookInfo(); 网站访问量
  },
  computed: {
    ...mapState(["pageview", "TopNavList", "SubNavList", "QrNavList"]),
  },
  methods: {
    ...mapActions(["getNavList", "getLookInfo",]),
    showMore:function(){
      this.index.showMoreNav();
    },
    closeMoreNav:function(){
      this.index.closeMoreNav();
    }
  },
  store
};
</script>

<style>
</style>