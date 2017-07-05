<template>
	          <div class="tab-swiper vux-center content">
	                  <ul>
	                  {{movies}}
	                  	<li v-for="movie in movies">
                                <div class="movie-title">{{movie.title}}</div>
                                <div class="line"></div>
		                  	    <div class="flex-box" v-for="item in movie.subjects">
			                    	<img :src="item.images.medium">
			                    	<div class="flex-box-content">
			                    		  <p>{{item.original_title}}</p>
			                    		  <p class="text-muted small-size">{{item.year}}年/<span class="text-blue small-size">{{item.rating.average}}分</span>
			                    		  <!-- star：{{item.rating.stars}} --></p>
			                    		  <p class="small-size">主演：<span v-for="(cast,index) in item.casts"> 
			                    		  	     <span v-if="index !=0">/</span>{{cast.name}}
			                    		  </span>
			                    		  </p>
			                    		  <p>
			                    		  	  <span v-for="genre in item.genres">
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
import {Swiper,Badge} from 'vux'
export default {
	components: {
	      Swiper,Badge
	},
    data () {
	    return {
	        movies:[],
	        count:5//获取条数
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
	             let data = await this.$http.get(`/v2/movie/in_theaters?start=0 & count=${this.count}`);
	             if (data.status == 200) {
	             	   this.movies[0]=data.data;
	             }
	        },
	        //获取即将上映列表
	        async getComing_soon() {
	             let data = await this.$http.get(`/v2/movie/coming_soon?start=0 & count=${this.count}`);
	             if (data.status == 200) {
	             	   this.movies[1]=data.data;
	             }
	        },
	        //获取新片榜列表
	        async getUs_box() {
	             let data = await this.$http.get(`/v2/movie/us_box?start=0 & count=${this.count}`);
	             if (data.status == 200) {
	             	   this.movies[2]=data.data;
	             }
	        }

     }
}
</script>
<style type="text/css">
</style>

