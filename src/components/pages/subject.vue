<template>
                <div  class="tab-swiper vux-center content" v-if="subject">
                               <div class="movieType-title">
		                  			 <p><b>{{subject.title}}——详情</b></p>  
		                       </div>
		                       <div class="banner" >
		                       	         <div class="flex-box">
		                       	         <div>
					                    	<img :src="subject.images.large" width="200px">
					                    	</div>
					                    	<div class="flex-box-content">
					                    		  <p>{{subject.original_title}}</p>
					                    		  <p class="text-muted small-size">年份：{{subject.year}}年
					                    		 </p>
					                    		  <p class="small-size">主演：<span v-for="(cast,index) in subject.casts"> 
					                    		  	     <span v-if="index !=0">/</span>{{cast.name}}
					                    		  </span>
					                    		  </p>
					                    		  <p class="small-size">导演：<span v-for="director  in subject.directors">{{director.name}}</span></p>
					                    		  <p class="small-size">地区：<span v-for="countrie in subject.countries">{{countrie}}</span>
					                    		 
					                    		  </p>
					                    		  <p class="small-size">类型：
					                    		  	  <span v-for="genre in subject.genres">
					                    		  	  	   <badge :text="genre" class="m-r-1"></badge>
					                    		  	  </span>
					                    		  </p>
					                    	</div>
					                    	</div></div>
					                    	<p class="title">剧情简介</p>
					                    	<p class="small-size">{{subject.summary}}</p>
					                    	<p class="title">演员</p>
					                    	<flexbox :gutter="0">
										      <flexbox-item :span="1/5" v-for="cast in subject.casts"><div class="flex-demo"><img :src="cast.avatars.small">
					                    		      <p>{{cast.name}}</p></div></flexbox-item>
										    </flexbox>
                                             <p class="title">短评</p>
                                             {{comments}}
				                    	
		                       
                </div>
</template>>
<!-- <script type="text/ecmascript-6"> -->
<script>
import {Swiper,Badge,Loading,Flexbox, FlexboxItem} from 'vux';
export default {
	 data () {
	    return {
	          subject:null,
	          comments:null,
	          loadingText:"loading",
	          loading: true, //是否加载
	    }
	 },
	 components: {
	      Swiper,Badge,Flexbox, FlexboxItem,Loading
	 },
	 mounted: function() {
	 	 this.getSubject();
	 	 this.getComments();
     },
     methods: {
     	   async getSubject(){
     	   	      let data = await this.$http.get(`/v2/movie/subject/${this.$route.params.id}`);
     	   	      console.log(data)
	               if (data.status == 200) {
		              	this.subject=data.data;
		                this.loading=false;
	               }
	        },
	        async getComments(){
     	   	      let data = await this.$http.get(`/v2/movie/subject/${this.$route.params.id}/comments`);
	               if (data.status == 200) {
		              	this.comments=data.data;
		                this.loading=false;
	               }
	        }
     }
}
</script>
<style scoped>
    .vux-flexbox{flex-wrap: wrap;}
	.flex-box{flex-direction: row;height: 100%;
	}
	.title{padding: .5rem 0;border-bottom: 1px solid #eee;margin-bottom: .5rem}
</style>

