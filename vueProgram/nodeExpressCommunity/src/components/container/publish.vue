<template>
  <div class="container middle publish clearfix posrel">
       <div class='title left repWidth'>
        <div class="select posabs height">
	       <span>{{navTitle}}</span>
	        <ul class="posabs hiddenNone proClassfiy">
	          <li v-for="(navItem,index) in TopNavList.slice(1,4)" @click="changeNav($event)" :key=index>{{navItem.title}}</li>
	        </ul>
	        <div class="searchtype_arrow posabs"></div>
	     </div>
	     <div class="select NavClassfiy posabs height">
	      <span class="subClassfiy">{{subNavTitle}}</span>
	       <ul class="hiddenNone subNavInfo">
	         <li v-for="(subNavItem,index) in SubNavList" @click="changeSubNavInfo($event)" :key=index>{{subNavItem.title}}</li>
	       </ul>
	      <div class="searchtype_arrow sub_arrow posabs"></div>
	       </div>
           <input class="height right" type="text" placeholder="内容标题不得超过30个字">
         </div>
         <quill-editor v-if="showEditor == 2 " class="quill" :options=editorOption ref="myTextEditor" v-model="container" @change="changeText()"></quill-editor>
         <div v-if="showEditor == 3 " class="imgUpload clearfix">
           <div class="prompt left">
            <ul>
	              <li v-for="(uploadPictureItem,index) in uploadPictureList" v-if="index > -1" :key=index>
	              <div class="promptPhoto posrel">
	               <div class="imgOptation posabs">
		             <div class="innerOption posabs">
                <em class="left">待上传</em>
                <em class="deleteImg right">删除</em>
              </div>
              <div class="updataloadbackground"></div>
              </div>
              <img :src=uploadPictureItem.pictureSrc>
            </div><!--  uploadPictureItem.description   -->
            <textarea class="promptPhotoInfo" placeholder="请输入照片描述" v-model="description"></textarea>
            </li>

              <li class="imgUploadWrap">
                <div class="imgUploadOptions posrel">
                 <div class="imgUploadOptionsButton posabs height bg">
                  <div class="promptPhoto posrel">+</div>
                   <div class="promptPhotoInfo" @chang="changeText($event)">请输入照片描述不得多余100字也可空着不写</div>
                  </div>
                <input type="file" @click="uploadImage($event)" class="posabs">
               </div>
              </li>
            </ul>
        </div>
          
       </div>
       <div v-if="showEditor == 4 " class="videoUpload clearfix">
           <div class="videoUploadWrap repWidth">
            <div class="videoUploadInner posabs">
	      <i class="fa fa-cloud-upload"></i>
	       <input type="file" class="uploadVideo posabs" @change="uploadVideoInfo($event)">
	       <label class="height">将视频拖拽到此处可上传</label>
	    </div>
	     <div class="videoUploadShowInfo hiddenNone">
	          <div class="videoUploadwbk posrel">
		     <div class="videoUploadbk posabs">
		       <i class="videoUploadbg posabs"></i>
		      </div>
		     <em class="videoUploadPrograss posabs">0%</em>
		  </div>
                  <div class="videoPreview left">
		     <video id ="previewVideo" src="http://localhost:65534/JingYanSheQu/Videos/a/zsq.mp4"></video>
		  </div>
		  <div class="videoEditor right">
		     <textarea placeholder="我是视频描述信息"></textarea>
		  </div>
	     </div>
	   </div>
       </div>
       <label>请遵守<a href="#">经验社区公约</a>言论规则，不得违反国家法律法规</label>
       <input type="button" :value=submitValue class="height arctilePublishButton addMore bg right"/>
    <div v-if="showEditor == 2 " class="preview posabs">
      <quill-editor  class="quill" :options=lookEditor ref="LookEditor"></quill-editor>
    </div>
   </div>
</template>

<script>
import store from '../../store/index'
import { mapState,mapActions} from 'vuex';
export default {
  name: "publish",
  data() {
    return {
      description:"",
      lookEditor: { placeholder: "" },
      container: "",
      navTitle: "文章",
      subNavTitle: "宅技术",
      showEditor: 2,
      submitValue: "发布",
      navList:"",
      prompt: "http://localhost:65534/images/me.jpg",
      editorOption: {
        placeholder: "请输入您的内容",
        modules: {
          toolbar: [
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "code-block",
            { color: ["#f5f5f5"] },
            { background: ["#008b8b"] },
            "image",
            "underline",
            "strike",
            "blockquote"
          ]
        }
      }
    };
  },
  created:function(){
   this.postVC(this);
  },
  mounted:function(){
     this.closeLookEditor(this);
  },
  computed:{
   ...mapState(['TopNavList','SubNavList','uploadPictureList']),
  },
  methods: {
    ...mapActions(['postVC','changeEditor','changeSubNav','closeLookEditor','changeText','uploadImages','uploadVideo']),
    changeNav(ev){
      this.changeEditor(ev);
    },
    changeSubNavInfo(ev){
      this.changeSubNav(ev);
    },
    uploadImage(ev){
       this.uploadImages(ev);
    },
    uploadVideoInfo(ev){
      this.uploadVideo(ev);
    },
  },
  store
};
</script>