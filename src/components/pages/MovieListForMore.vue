<template>
  <div class="tab-swiper vux-center content">
    <div v-if="movies" v-for="item in movies">
      <div v-if="currentPage==1">
        <div class="movieType-title">
          <p><b>{{item.title}}——列表</b></p>
        </div>
        <div class="line"></div>
      </div>
      <div v-for="movie in item.subjects">
            <router-link :to="{ name: 'subject', params: { id: movie.id}}">
            <div  class="flex-box">
        <img :src="movie.images.medium" width="100px;">
        <div class="flex-box-content">
          <p>{{movie.original_title}}</p>
          <p class="text-muted small-size">{{movie.year}}年
           
          </p>
          <p>
             <span  v-if="movie.rating.average!=0"><em>{{movie.rating.average}}分</em></span> 
             <stars :stars.sync="movie.rating.stars"></stars>
          </p>
          <p class="small-size">主演：
            <span v-for="(cast,index) in movie.casts"> 
                                       <span v-if="index !=0">/</span>{{cast.name}}
            </span>
          </p>
          <p class="small-size">{{movie.collect_count}}人看过</p>
          
          <p>
            <span v-for="genre in movie.genres">
                                         <badge :text="genre" class="m-r-1"></badge>
                                    </span>
          </p>
        </div>
        <div class="line"></div>
        </div>
        </router-link>
      </div>
    </div>
    <div>
      <loading v-model="loading" :text="loadingText"></loading>
    </div>
    <div v-if="!more">没有更多了</div>
  </div>
</template>>
<!-- <script type="text/ecmascript-6"> -->
<script>
import { Swiper, Badge, Loading } from 'vux';
import Stars from '.././common/Stars.vue';
export default {
  data() {
    return {
      movies: [],
      loadingText: "loading",
      loading: true, //是否加载
      pageSize: 5, //每页条数
      currentPage: 1, //当前页
      more: true //更多
    }
  },
  components: {
    Swiper,
    Badge,
    Loading,
    Stars
  },
  mounted: function() {
    window.addEventListener('scroll', this.handleScroll);
    this.getMovies();
  },
  methods: {
    async getMovies() {
      let start = (this.currentPage - 1) * this.pageSize;
      let data = await this.$http.get(`/v2/movie/${this.$route.params.type}?start=${start}&count=${this.pageSize}`);
      if (data.status == 200) {
        if (data.data.subjects.length >= 0) {
          this.movies = this.movies.concat(data.data);
        } else {
          this.more = false;
        }
        this.loading = false;
      }
    },
    handleScroll(e) {
      if (document.body.scrollTop >= document.body.scrollHeight - window.screen.height && !this.loading) {
        this.loading = true;
        this.currentPage++;
        this.getMovies();
      }
    }
  }
}

</script>
