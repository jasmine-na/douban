<template>
	          <div class="tab-swiper vux-center content" >

	                  <div class="weui-search-bar__box">
	                           <i class="weui-icon-search" ></i> 
	                           <input type="search" v-model="searchText"  autocomplete="off" class="weui-search-bar__input" v-on:change="searchMovie">
	                            <a href="javascript:" class="weui-icon-clear" style="display: none;"></a>
	                   </div>
	                    <movie-list v-if="searchTotal > 0" :movies.sync="searchMovies">
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
import {Search,Loading} from 'vux';
import MovieList from './MovieList.vue';

export default {
	components: {
	     Search,Loading,MovieList
	},
    data () {
	    return {
	        searchMovies:[],
	        searchTotal:0,
	        count:6,//获取条数
	        searchText:"",
	        movies:[],
	        loadingText:"loading",
	        loading: true //是否加载
	    }
	},
	mounted: function() {
        this.getMovies();
    },
    methods: {
            //获取正在热映列表
	        getMovies() {
	             const actions = ['in_theaters', 'coming_soon', 'top250'];
	             var that=this;
	             actions.map(async function(item,index){
	             	        let data = await that.$http.get(`/v2/movie/${item}?count=${that.count}`);
                            that.movies.push({
								name: item,
								data:data.data
							})
							if(index==actions.length-1){
                                 that.loading=false;
							}
	                   }         
	             )
				

	        },
	        async searchMovie(){
	        	 this.loading=true;
	        	 let data = await this.$http.get(`/v2/movie/search?q=${this.searchText}`);
	             if (data.status == 200) {
	             	   this.searchMovies=data;
	             	   this.searchTotal=this.searchMovies.data.total;
	             }
	             this.loading=false;
	             
	        }

     }
}
</script>

