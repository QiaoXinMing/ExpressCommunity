<template>
    <div class="comment">
        <div class="publishComment repWidth">
            <div class="publishCommentTitle repWidth">
                <h3 class="left height">读者感悟</h3>
                <sub>请遵守<a href="#">经验社区公约</a>言论规则，不得违反国家法律法规</sub>
                <em class="right">N条评论</em>
            </div>
            <div class="publishEditore repWidth">
                <textarea v-model="plEditorContainer"></textarea>
                <input type="button" value="发布评论" class="right height bg">
            </div>
        </div>
        <div class="publishCommentDetails repWidth">
             <div class="userComment repWidth">
                 <div class="photo left">
                     <img src="http://localhost:65534/JingYanSheQu/images/a/test.jpg" >
                 </div>
                 <div class="commentDetails right">
                      <h3 class="height"><a>administrator</a>
                      <em>17小时前</em></h3>
                      <div class="commentDetailsContainer">
                          <dl>
                              <dt>嘻嘻哈哈我是评论内容啊啊啊啊啊啊啊啊啊啊啊嘻嘻哈哈我是评论内容啊啊啊啊啊啊啊啊啊啊啊嘻嘻哈哈我是评论内容啊啊啊啊啊啊啊啊啊啊啊</dt>
                              <dd>
                                  <div class="subComment">
                                      <div class="subCommentDetails">
                                          <b>administrator :</b>
                                          我是评论你评论的内容的内容嘻嘻哈哈嘿嘿吼吼我是评论你评论的内容的内容嘻嘻哈哈嘿嘿吼吼我是评论你评论的内容的内容嘻嘻哈哈嘿嘿吼吼
                                      </div>
                                      <div class="subFooter height">
                                             <span><i class="fa fa-heart-o"></i>喜欢30</span>
                                             <span><i class="fa fa-comment"></i> 回复 </span>
                                      </div>
                                      <div class="subPublish subUserPublish hiddenNone">
                                          <textarea class="subPublishContainer"></textarea>
                                          
                                          <input type="button" value="回复" class="height bg right"/>
                                      </div>
                                  </div>
                              </dd>
                          </dl>
                          
                      </div>
                 </div>
             </div>
        </div>
    </div>
</template>

<script>
import store from "../../store/index";
import { mapState,mapActions} from "vuex";
export default {
    name:"comment",
    props:["arctileId"],
    data(){
        return{
            plEditorContainer:"",
        }
    },
    created:function(){
     //   this.getCommentList(this.arctileId);
    },
     computed: {
    ...mapState(["commentList"])
  },
  methods:{
    ...mapActions(["getCommentList"])
  },
}
</script>