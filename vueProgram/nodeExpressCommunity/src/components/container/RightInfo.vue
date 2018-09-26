<template>
 <div class="beautiful-article-right  right">
    <div class="article-ranking">
        <div class="article-ranking-title height">
                 <h3>文章排行</h3>
                <a href="javascript:void(0)" class="on" @click="read()">阅读</a>
                <a href="javascript:void(0)" @click="commen()">评论</a>
              </div>
            <ul>
            <router-link tag="li" :to="{path:'detailsArctiles'}" class="overflow height" v-for="(arctileItem,index) in arctilePhList" :key=index>
             <em>{{index+1}}.</em>
             {{arctileItem.arctile_title}}
           </router-link>
          </ul>
	</div>
	<div class="article-ranking read right">
		<div class="article-ranking-title height">
                  <h3>推荐阅读</h3>
		</div>
		<ul>		
		<li v-for="(articleRankingItem,index) in articleRankingList" v-if="articleRankingItem.resource_url !='' "  :key=index>
                      <h3 class="overflow height">{{articleRankingItem.arctile_title}}</h3>
                    <div class="read-img"><img :src=articleRankingItem.resource_url ></div>
                    <div class="read-info right">
                    <span>{{articleRankingItem.arctile_content}}</span>
                    <router-link tag="a" :to="{path:'detailsArctiles'}" class="right">
                 查看更多
              </router-link>
            </div>
          </li>
        </ul>
     </div>
</div>

</template>

<script>
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default{
  name:"RightInfo", 
  created:function(){
    this.getParagraphbList();
    this.getRecommend();
  },
  computed:{
    ...mapState(['arctilePhList','articleRankingList']), 
  },
  methods:{
    ...mapActions(['getParagraphbList','getParagraphbPlList','getRecommend']),
   read(){
     this.getParagraphbList();
   },
   commen(){
     this.getParagraphbPlList();
   }
  },
  store 
}
</script>