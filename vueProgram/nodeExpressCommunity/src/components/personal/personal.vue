<template>
  <div class="personal container middle">
    <div class="personalInfo repWidth">
      <div class="personalPhoto left">
        <img :src=user.personal_pic />
      </div>
      <div class="personalshowInfo left">
        <h3 class="height">{{user.personal_username}}</h3>
        <ul>
          <li>
            <label>文章</label>
            {{user.personal_arctile}}
          </li>
          <li>
            <label>图集</label>
            {{user.personal_picture}}
          </li>
          <li>
            <label>视频</label>
            {{user.personal_video}}
          </li>
          <li>
            <label>经验币</label>
            {{user.personal_jyb}}
          </li>
         </ul>
      </div>
      <a class="personal bg height addMore showInfo" @click="publish()">发布文章</a>
    </div>
    <div class="personalNav repWidth">
      <ul class="height">
        <router-link tag="li" :to="{name:personalsetItem.url}" v-for="(personalsetItem,index) in personalsetList" :key=index @click="change(personalsetItem.url)">
         {{personalsetItem.title}}
        </router-link>
      </ul>
    </div>
     <router-view name='person'></router-view>
  </div>
</template>
<script>
import store from "../../store/index";
import { mapState, mapActions } from "vuex";
export default {
  name:"personal",
  created: function() {
    this.getPersonalOperation();
    this.getUserSession();
  },
 
  computed: {
    ...mapState(["personalsetList","user"])
  },
  methods: {
    ...mapActions(["getPersonalOperation","getUserSession","checkLogin", "postVC"]),
    change(args) {
      this.changeUrl = args;
    },
    changePhoto() {
      this.plugs.uploadPhoto();
    },
    publish:function(){
      this.postVC(this);
      this.checkLogin();
    }
  },
  store
}
</script>
