import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Movie from '@/components/pages/Movie.vue'
import MovieList from '@/components/pages/MovieListForMore.vue'
import Subject from '@/components/pages/Subject.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      component: Home,
      redirect: '/index',
      children: [
        { path: 'index', name: 'index', component: Movie },
        { path: 'movie', name: 'movie', component: Movie },
        { path: '/list/:type', name: 'list', component: MovieList },
        { path: '/subject/:id', name: 'subject', component: Subject }
      ]
    }
  ]
})
