<template>
  <div id="app">
    <c-header v-if="headerShow" v-bind:fixed='fixed' v-bind:icon='iconType'></c-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import CHeader from './components/CHeader'
export default {
  name: 'app',
  components: {
    CHeader
  },
  data () {
    return {
      fixed: true,
      headerShow: true,
      iconType: true
    }
  }
}
</script>

<style>
.app {
  overflow: hidden;
  height: 100%;
  min-height: calc(100vh);
  background:#fff;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  transition: all .2s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
</style>
