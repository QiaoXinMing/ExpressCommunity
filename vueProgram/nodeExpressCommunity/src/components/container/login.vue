<template>

  <div class="container middle loginRegistor clearfix">
  <h3 class="loginTips height fc">经验社区给你更便捷的经验分享！</h3>
    <div class="register left">
    <h3 class="height">注册</h3>
      <div class="login-table">
        <ul>
          <li><input type="text" placeholder="邮箱/用户名(中文)"  v-model="regUserName" @click ="enter($event)" @blur="out($event)"><em v-if="showUserNameTips">{{showUserTip}}</em></li>
          <li><input type="password" placeholder="请输入密码" v-model="newPassWord" @click ="enter($event)" @blur="out($event)"><em>{{showUserPass}}</em></li>
          <li><input type="password" placeholder="请再次输入密码"  v-model="sNewPassWord" @click ="enter($event)" @blur="out($event)"><em v-if="showUserPassWord">{{showUserSPass}}</em></li> 
          <li><input type="text" placeholder="请输入验证码" @click ="enter($event)" @blur="out($event)"><em v-if="showYZM">{{showYZM}}</em></li> 
          <li><input type="button" value="注册" @click="regist()"></li>
        </ul>
       </div>
    </div>
    <div class="login right">
    <h3 class="height">登陆</h3>
      <div class="login-table">
         <ul>
          <li><input type="text" placeholder="邮箱/用户名" v-model="username"></li>
          <li><input type="password" placeholder="请输入密码" v-model="password"></li>
          <li><input type="text" placeholder="请输入验证码"></li>
          <li><input type="button" value="登陆"  @click="loginUser()"></li>
          </ul>
      </div>
      <!--div class="moreLogin">
      <label>快捷登陆</label>
        <ul>
          <li><a href="javascript:void(0)"><i class="fa fa-github-alt"></i></a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-github-alt"></i></a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-github-alt"></i></a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-github-alt"></i></a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-github-alt"></i></a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-github-alt"></i></a></li>
	</ul>
      </div-->
    </div>
  </div>
</template>

<script>
import store from "../../store";
import { mapState, mapActions } from "vuex";
import { setTimeout } from 'timers';
export default{
     name:'login',
     data(){
       return {
        regUserName:"",
        newPassWord:"",
        sNewPassWord:"",
        username:"",
        password:"",
        showUserTip:"2-4位",
        showUserPass:"6-12位",
        showUserSPass:"密码输入不一致",
        showYZM:"验证码不正确",
        showYZM:0,
        showUserNameTips:1,
        showUserPassWord:0,
        tempInput:"",
        tempUFlag:false,
        tempPFlag:false,
        tempRPFlag:false,
       }
     },
     computed:{
       ...mapState(["checkRegister"]),
     },
     methods:{
       ...mapActions(["register","login","checkRegisterUserName","postVC"]),
        enter(e){
          e.target.className="checkedInput";
          this.tempInput = e.target;
        },
        out(e){
           e.target.className="";
           this.tempInput = "";
           this.showUserPass = "6-12位";
        },
         regist(){
          if(this.tempUFlag &&  this.tempPFlag && this.tempRPFlag ){
            let user = {};
            user.username = this.regUserName;
            user.password = this.newPassWord;
            user.registerTime = this.index.getNowTime();
              this.register(user);
              this.login(user);
          }else{
               alert("您注册的信息不正确");
          }
          
        },
        loginUser(){
          if(!this.username||!this.username){
            alert("用户名密码不能为空");
          }else{
            this.postVC(this);
            let user={};
            user.username = this.username;
            user.password = this.password;
            this.login(user);
            this.index.userAgent(user);
          }
        }
       },
       watch:{
         regUserName:function(){
           let resultName = this.index.checkUserName(this.regUserName);
             if(!resultName){
              this.tempInput.style.color = "red";
             }else{
                this.tempUFlag = true;
               this.tempInput.style.color = "#757575";
               this.checkRegisterUserName(this.regUserName);
             }
        },
        newPassWord:function(){
          let password = this.index.checkPassword(this.newPassWord);
          if(!password){
            this.showUserPass = "密码不对劲";
          }else{
             this.tempPFlag = true;
            this.showUserPass = "符合要求";
          }
        },
        sNewPassWord:function(){
          if(this.sNewPassWord !== this.newPassWord){
            this.showUserPassWord = 1;
          }else{
             this.tempRPFlag = true;
            this.showUserPassWord = 0;
          }
        },
       
       },
     store
   }
</script>