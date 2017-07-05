<template>
	          <div class="tab-swiper vux-center content">
	                  <div class="weui-search-bar__box">
	                           <i class="weui-icon-search" v-on:click="searchMovie"></i> 
	                           <input type="search" v-model="searchText"  autocomplete="off" class="weui-search-bar__input">
	                            <a href="javascript:" class="weui-icon-clear" style="display: none;"></a>
	                   </div>
	                  <ul>
	                  	<li v-for="movie in movies">
                                <div class="movieType-title">{{movieType.title}}</div>
                                <div class="line"></div>
		                  	    <div class="flex-box" v-for="move in movieType.subjects">
			                    	<img :src="move.images.medium">
			                    	<div class="flex-box-content">
			                    		  <p>{{move.original_title}}</p>
			                    		  <p class="text-muted small-size">{{move.year}}年/<span class="text-blue small-size">{{move.rating.average}}分</span>
			                    		  <!-- star：{{move.rating.stars}} --></p>
			                    		  <p class="small-size">主演：<span v-for="(cast,index) in move.casts"> 
			                    		  	     <span v-if="index !=0">/</span>{{cast.name}}
			                    		  </span>
			                    		  </p>
			                    		  <p>
			                    		  	  <span v-for="genre in move.genres">
			                    		  	  	   <badge :text="genre" class="m-r-1"></badge>
			                    		  	  </span>
			                    		  </p>
			                    	</div>
			                    	<div class="line"></div>
		                    	</div>
	                  	   </li>
	                  </ul>  
	          </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
import {Swiper,Badge,Search} from 'vux'
export default {
	components: {
	      Swiper,Badge,Search
	},
    data () {
	    return {
	        movies:[],
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
	             	   this.movies[0]=data.data;
	             }
	        },
	        //获取即将上映列表
	        async getComing_soon() {
	             let data = await this.$http.get(`/v2/movie/coming_soon?count=${this.count}`);
	             if (data.status == 200) {
	             	   this.movies[1]=data.data;
	             }
	        },
	        //获取新片榜列表
	        async getUs_box() {
	             let data = await this.$http.get(`/v2/movie/us_box?count=${this.count}`);
	             if (data.status == 200) {
	             	   this.movies[2]=data.data;
	             }
	        },
	        async searchMovie(){
	         	 console.log(this.searchText)
	        	 let data = await this.$http.get(`/v2/movie/search?q=${this.searchText}`);
	             if (data.status == 200) {
	             	   this.movies=data.data;
	             }
	        }

     }
}
</script>
<style type="text/css">
  .weui-search-bar__box{border:1px solid #eee;border-radius: 6px;}
</style>

