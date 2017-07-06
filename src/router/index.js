import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Movie from '@/components/pages/movie.vue'
import MovieList from '@/components/pages/MovieList2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '*',redirect:'/' },
    {
      path: '/',
      component: Home,
      redirect: '/index',
      children: [
        { path: 'index',name:'index',component: Movie },
        { path: 'movie',name:'movie',component: Movie },
        { path: '/list/:type',name:'list', component: MovieList }
      ]
    }
  ]
})
