<template>
	          <div class="tab-swiper vux-center content">
	                  <ul>
	                  	<li v-for="item in movies">
	                  	    <div class="flex-box">
		                    	<img :src="item.images.medium">
		                    	<div class="flex-box-content">
		                    		  <p>{{item.original_title}}</p>
		                    		  <p class="text-muted">{{item.year}}</p>
		                    		  <p>{{item.rating.average}}分</p>
		                    		  <p>
		                    		  	  <span v-for="genre in item.genres">
		                    		  	  	   <badge :text="genre" class="m-r-1"></badge>
		                    		  	  </span>
		                    		  </p>
		                    	</div>
	                    	</div>
	                    	<div class="line"></div>
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
	             	   console.log(this.movies);
	             }
	        }
     }
}
</script>
<style>
        ul{padding: 0;}
        ul,li{list-style: none}
        .flex-box{display: flex;flex-direction:row;flex-wrap: nowrap;justify-content: flex-start;margin:1rem 0;}
        .flex-box-content{
       	 display: flex;flex-direction: column;padding-left: 0.5rem;
        }
        .bg-warning {
		    background-color: #ffc107
		}
		.bg-error {
		    background-color: #f44336
		}
		.bg-primary {
		    background-color: #26a2ff
		}
		.bg-success {
		    background-color: #4caf50
		}
		.text-muted{color: #666;}
		.m-r-1{margin-right:0.5rem;}
		.line{border-top:1px solid #eee;height: 1px;margin:1rem 0;}
		.content{padding-top: 90px;overflow:auto;}
		

</style>
