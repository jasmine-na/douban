<template>
	          <div class="tab-swiper vux-center">
	                  <ul>
	                  	<li v-for="item in movies" class="flex-box">
	                    	<img :src="item.images.medium">
	                    	<div class="flex-box-content">
	                    		  <p>{{item.original_title}}</p>
	                    		  <p>{{item.year}}</p>
	                    		  <p>{{item.rating.average}}分</p>
	                    		  <p>
	                    		  	  <span v-for="genre in item.genres">
	                    		  	  	   {{genre}}
	                    		  	  </span>
	                    		  </p>
	                    	</div>
	                  	</li>
	                  </ul>
	          </div>
</template>
<!-- <script type="text/ecmascript-6"> -->
<script>
import {Swiper} from 'vux'
export default {
	components: {
	      Swiper
	},
    data () {
	    return {
	        movies:[]
	    }
	 },
	mounted: function() {
        this.getMovie();
    },
     methods: {
            //获取正在热映列表
	        async getMovie() {
	             let data = await this.$http.get(`/v2/movie/in_theaters`);
	             if (data.status == 200) {
	             	   this.movies=data.data.subjects;
	             	console.log(this.movies)
	             }
	        }
     }
}
</script>
<style>
     ul{padding: 1rem;}
     ul,li{list-style: none}
     .flex-box{display: flex;flex-direction:row;flex-wrap: nowrap;justify-content: flex-start;margin-top:4px;margin-bottom:0.25rem;}
      .flex-box-content{
      	 display: flex;flex-direction: column;padding-left: 0.25rem;
      }
</style>
