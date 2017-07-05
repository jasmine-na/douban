<template>
	          <div class="tab-swiper vux-center content" >
	                  <div class="weui-search-bar__box">
	                           <i class="weui-icon-search" ></i> 
	                           <input type="search" v-model="searchText"  autocomplete="off" class="weui-search-bar__input" v-on:change="searchMovie">
	                            <a href="javascript:" class="weui-icon-clear" style="display: none;"></a>
	                   </div>
	                    <movie-list v-if="searchTotal > 0" :movies.sync="searchMovies">
                        </movie-list>
                        <div  v-if="!searchTotal || searchTotal <= 0">
	                        <movie-list :movies.sync="in_theaters"></movie-list>
	                        <movie-list :movies.sync="coming_soon"></movie-list>
	                        <!-- <movie-list :movies.sync="us_box"></movie-list> -->
                        </div>
                        
                        
	          </div>

</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
import {Search} from 'vux';
import MovieList from './MovieList.vue';

export default {
	components: {
	     Search,MovieList
	},
    data () {
	    return {
	        in_theaters:null,
	        searchMovies:null,
	        searchTotal:0,
	        coming_soon:null,
	        us_box:null,
	        count:5,//获取条数
	        searchText:""
	    }
	 },
	mounted: function() {
        this.getIn_theaters();
        this.getComing_soon();
        this.getUs_box();
    },
     methods: {
            //获取正在热映列表
	        async getIn_theaters() {
	             let data = await this.$http.get(`/v2/movie/in_theaters?count=${this.count}`);
	             if (data.status == 200) {
	             	   this.in_theaters=data.data;
	             }
	        },
	        //获取即将上映列表
	        async getComing_soon() {
	             let data = await this.$http.get(`/v2/movie/coming_soon?count=${this.count}`);
	             if (data.status == 200) {
	             	   this.coming_soon=data.data;
	             }
	             console.log(this.coming_soon)
	        },
	        //获取新片榜列表
	        async getUs_box() {
	             let data = await this.$http.get(`/v2/movie/us_box?count=${this.count}`);
	             if (data.status == 200) {
	             	   this.us_box=data.data;
	             }
	        },
	        async searchMovie(){
	        	 let data = await this.$http.get(`/v2/movie/search?q=${this.searchText}`);
	             if (data.status == 200) {
	             	   this.searchMovies=data.data;
	             	   this.searchTotal=this.searchMovies.total;
	             }
	             
	        }

     }
}
</script>

