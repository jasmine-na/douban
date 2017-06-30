import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Movie from '@/components/pages/movie.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '*',redirect:'/' },
    {
      path: '/',
      component: Home,
      redirect: '/index',
      children: [
        { path: 'index',component: Movie },
        { path: 'movie',component: Movie }
      ]
    }
  ]
})
