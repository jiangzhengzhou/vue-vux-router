import Vue from 'vue'
import Router from 'vue-router'
import Topice from '../pages/Topice'
import Detail from '../pages/Detail'
import Post from '../pages/Post'
import Me from '../pages/Me'
import About from '../pages/About'
import Login from '../pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Topice
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
    {
      path: '/about',
      name: About,
      component: About
    },
    {
      path: '/login',
      name: Login,
      component: Login
    }
  ]
})
