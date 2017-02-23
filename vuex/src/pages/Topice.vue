<template lang="html">
  <nav class="nav-box clearfix">
    <ul class="nav-bar">
      <li v-for="(item, index) in itemTab" class="nav-bar-item"
      v-bind:class="{'nav-bar-active':initIndex === index}" v-on:click="changeTab(index)">{{item.title}}</li>
    </ul>
  </nav>
</template>

<script>
// import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  }
  // 数据请求
  // created () {
  //   this.$store.dispatch('getTopicList')
  // }
  // computed: {
  //   ...mapState({
  //     itemTab: state => state.com.itemTab,
  //     initIndex: state => state.com.initIndex
  //   })
  // }
}
</script>

<style lang="css">
.loading-box{
  margin:15px auto;
  text-align:center;
}
.loading-box div{
  margin:auto;
}
.topics{
  background:#fff;
}
/*导航 nav*/
.nav-bar {
  position: fixed;
  top:43px;
  z-index:1;
}
.nav-bar {
  width:100%;
  height: 32px;
  background: #444;
}
.nav-bar-item {
  float:left;
  display:inline-block;
  width: 20%;
  color: #80bd01;
  text-align: center;
  line-height: 28px;
}
.nav-bar-active{
  color: #fff;
  font-size: 16px;
}
/*列表 list*/
.scroll-posts-list{
  overflow: hidden;
  margin-top:75px;
}
.posts-list{
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid #80bd01;
}
.posts-list a{
  display: block;
  padding: 0 15px;
}
.posts-list-info{
  overflow: hidden;
  display: flex;
  margin-top: 15px;
  // padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}
.posts-list-info .userimg{
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.posts-list-info .item-box{
  flex: 1;
  margin-left: 15px;
}
.posts-list-info .item-box .userinfo{
  display: flex;
}
.posts-list-info .item-box .userinfo .username,
.posts-list-info .item-box .userinfo .time{
  flex: 1;
  font-size:15px;
}
.posts-list-info .item-box .userinfo .time{
  text-align: right;
  color: #555;
}
.posts-list-info .item-box .posts-title{
  height: 40px;
  margin: 10px 0;
  font-size: 14px;
  color: #35495e;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.posts-list-info .item-box  .posts-tag{
  display: inline-block;
  width: 36px;
  height:18px;
  text-align: center;
  // line-height:18px;
  margin-right: 5px;
  font-size: 12px;
  color: #80bd01;
  border: 1px solid #80bd01;
}
.posts-list-info .item-box .hot{
  color: red;
  border: 1px solid red;
}
.posts-list .bar-info .bar-info-item{
  display: inline-block;
  margin-right: 25px;
  line-height: 30px;
  color:#333;
}
.posts-list .bar-info .bar-info-item-icon{
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  font-size:18px;
}
.posts-list .bar-info .bar-info-item .iconfont{
  color: #d81e06;
}
.posts-list .bar-info .bar-info-item-number{
  display: inline-block;
  vertical-align: middle;
}
.posts-list .bar-info .bar-info-item2{
  display: inline-block;
  float: right;
  line-height: 33px;
}
.posts-list .bar-info .bar-info-item2 .iconfont{
  color: #80bd01;
}
.posts-list .bar-info .bar-info-item2 .bar-info-item-number{
}
</style>
