<template>
               <div  class="tab-swiper vux-center content">
                    <div  v-if="movies" v-for="item in movies">
		                       <div v-if="currentPage==1">
		                        <div class="movieType-title">
			                  			 <p><b>{{item.data.title}}——列表</b></p>
			                     </div>
			                   <div class="line"></div>
			                   </div>
		                  	    <div class="flex-box"  v-for="move in item.data.subjects">
			                    	<img :src="move.images.medium" width="100px;">
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
					    <div>
					      <loading v-model="loading" :text="loadingText"></loading>
					    </div>
					    <div v-if="!more">没有更多了</div>
                </div>
</template>>
<!-- <script type="text/ecmascript-6"> -->
<script>
import {Swiper,Badge,Loading} from 'vux';
export default {
	 data () {
	    return {
	          movies:[],
	          loadingText:"loading",
	          loading: true, //是否加载
              pageSize: 5, //每页条数
              currentPage: 1,//当前页
              more:true//更多
	    }
	 },
	 components: {
	      Swiper,Badge,Loading
	 },
	 mounted: function() {
	 	 window.addEventListener('scroll', this.handleScroll);
	 	 this.getMovies();
     },
     methods: {
     	   async getMovies(){
     	   	      let start=(this.currentPage-1)*this.pageSize;
     	   	      let data = await this.$http.get(`/v2/movie/${this.$route.params.type}?start=${start}&count=${this.pageSize}`);
	               if (data.status == 200) {
		              	if(data.data.subjects.length>=0){
		             	   this.movies=this.movies.concat(data);
		              	}else{
	                       this.more=false;
		                }
		                this.loading=false;
	                }
	        },
	        handleScroll (e) {
			     if(document.body.scrollTop >= document.body.scrollHeight - window.screen.height && !this.loading) {
						this.loading=true;
						this.currentPage++;
						this.getMovies();
				     }
		    }
     }
}
</script>

