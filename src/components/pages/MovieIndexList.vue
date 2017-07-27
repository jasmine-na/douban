<template>
               <div class="moviesList">
	               <div v-if="movies">
		                    <div class="movieType-title">
		                  			 <p><b>{{movies.data.title}}</b></p>  
		                  			 <router-link :to="{ name: 'list', params: { type: movies.name}}">更多</router-link>
		                    </div>
	                        <div class="line"></div>
	                        <flexbox :gutter="0" wrap="wrap">
								      <flexbox-item >
									      <div style="width:33.3%;float: left" class="flex-demo" v-for="movie in movies.data.subjects">
									          <router-link :to="{ name: 'subject', params: { id: movie.id}}">
									                   <img :src="movie.images.medium">
									          </router-link>
										      <p class="text">{{movie.rating.average}}分 {{movie.original_title}}</p>
										     
										      <p class="mask"></p>
									      </div>
								      </flexbox-item>
						    </flexbox>
	                </div>
	                
                </div>

</template>>
<!-- <script type="text/ecmascript-6"> -->
<script>

import {Flexbox, FlexboxItem,Swiper,Badge} from 'vux';
export default {
	 props: ['movies'], //组件通信
	 data () {
	    return { 
	    }
	 },
	 components: {
	      Flexbox, FlexboxItem,Swiper,Badge
	 },
	 mounted: function() {
	 	  
     },
     methods: {
     }
}
</script>
<style scoped>
</style>

