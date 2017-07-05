<template>

	            <div v-if="movies">
	                    <div class="movieType-title">{{movies.title}}</div>
                        <div class="line"></div>
                  	    <div class="flex-box" v-for="move in movies.subjects">
	                    	<img :src="move.images.medium">
	                    	<div class="flex-box-content">
	                    		  <p>{{move.original_title}}</p>
	                    		  <p class="text-muted small-size">{{move.year}}年/<span class="text-blue small-size">{{move.rating.average}}分</span>
	                    		 </p>
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
                </div>
</template>>
<!-- <script type="text/ecmascript-6"> -->
<script>
import {Swiper,Badge} from 'vux';
export default {
	 props: ['movies'], //组件通信
	 data () {
	    return {
	       
	    }
	 },
	 components: {
	      Swiper,Badge
	 },
	 mounted: function() {
     },
     methods: {
     }
}
</script>
<style type="text/css">
  .movieType-title{margin-top: 1rem}
  .weui-search-bar__box{border:1px solid #eee;border-radius: 6px;}
</style>

