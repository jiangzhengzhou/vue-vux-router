<template lang="html">
  <div class="header">
    <div class="head-box" v-bind:class="{ 'is-fixed': fixed }">
      <header class="head-logo clearfix">
          <i class="head-logo-menu iconfont icon-fenlei1" v-if="icon"  @click="showMenuSlide"></i>
          <i class="head-logo-back iconfont icon-fanhui"  v-if="!icon" @click="goHistory"></i>
          <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" class="logo-img">
      </header>
    </div>
    <menu-slide v-bind:show="leftNavStatus"></menu-slide>
    </div>
</template>

<script>
import MenuSlide from './MenuSlide'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: mapState({
    // 借数据  map映射
    leftNavStatus: state => state.com.leftNavStatus
  }),
  props: {
    fixed: Boolean,
    icon: Boolean
  },
  components: {
    MenuSlide
  },
  methods: {
    // 借方法
    ...mapActions({setNavState: 'setNavState'}),
    showMenuSlide () {
      this.setNavState(true)
    },
    goHistory () {
    }
  }
}
</script>
<!-- 集合组件（复杂数据请求， 分发）  组件，UI组件(框架) -->
<style lang="css">
.is-fixed{
        position: fixed;
    }
    .head-box{
        width:100%;
        top:0;
        z-index:1;
    }
    .head-logo{
        height: 43px;
        line-height:43px;
        background: #444;
        text-align:center;
        position: relative;
    }
    .head-logo .head-logo-icon{
        font-size:28px;
        color: #80bd01;
    }
    .head-logo .head-logo-menu,
    .head-logo-back{
        position: absolute;
        top: 0;
        left: 20px;
        font-size: 20px;
        color: #fff;
    }
    .logo-img{
        width:120px;
        vertical-align: middle;
    }
</style>
