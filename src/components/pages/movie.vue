<template>
  <div class="tab-swiper vux-center content">
    <div class="weui-search-bar__box">
      <i class="weui-icon-search"></i>
      <input type="search" v-model="searchText" autocomplete="off" class="weui-search-bar__input" v-on:change="searchMovie">
      <a href="javascript:" class="weui-icon-clear" style="display: none;"></a>
    </div>
    <movie-list v-if="searchTotal > 0" :movies.sync="searchMovieList">
    </movie-list>
    <div v-else v-for="movie in movies">
      <movie-list :movies.sync="movie"></movie-list>
    </div>
    <div>
      <loading v-model="loading" :text="loadingText"></loading>
    </div>
  </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
import { Search, Loading } from 'vux';
import MovieList from './MovieListForIndex.vue'; //电影主页的列表

export default {
  components: {
    Search,
    Loading,
    MovieList
  },
  data() {
    return {
      searchMovieList: [],//搜索的电影列表
      searchTotal: 0,//搜索电影的总条目
      count: 6, //获取每种电影的总条数 
      searchText: "",//搜索的电影文本
      movies: [],//电影列表
      loadingText: "loading",//加载文字
      loading: true //是否加载
    }
  },
  mounted: function() {
    this.getMovieList(); //获取电影列表
  },
  methods: {
    //获取电影列表
    getMovieList() {
      //正在热播的电影，即将上映的电影，top250
      const actions = ['in_theaters', 'coming_soon', 'top250'];
      var that = this;
      actions.map(async function(item, index) {
        //获取数据
        let data = await that.$http.get(`/v2/movie/${item}?count=${that.count}`);
        that.movies.push({
          name: item,
          data: data.data
        })
        //加载完成
        if (index == actions.length - 1) {
          that.loading = false;
        }
      })
    },
    //搜索电影
    async searchMovie() {
      this.loading = true;
      let data = await this.$http.get(`/v2/movie/search?q=${this.searchText}`);
      if (data.status == 200) {
         this.searchMovieList = data;
         //搜索电影的总条目
         this.searchTotal = this.searchMovieList.data.total;
      }
      //加载完成
      this.loading = false;
    }
  }
}

</script>
