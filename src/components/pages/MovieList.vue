<template>
               <div class="moviesList">
	               <div v-if="movies">
		                    <div class="movieType-title">
		                  			 <p><b>{{movies.data.title}}</b></p>  
		                  			 <router-link :to="{ name: 'list', params: { type: movies.name}}">更多</router-link>
		                    </div>
	                        <div class="line"></div>
	                        <flexbox :gutter="0" wrap="wrap">
						      <flexbox-item :span="1/3" v-for="movie in movies.data.subjects"><div class="flex-demo">
						       <router-link :to="{ name: 'subject', params: { id: movie.id}}"><img :src="movie.images.medium"></router-link>
						      <p class="text">{{movie.original_title}}</p>
						      <p class="mask"></p>
						      </div></flexbox-item>
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
      .moviesList{display: flex;flex: row;flex-wrap: wrap;}
      .flex-column{flex-direction: column;display: flex;flex-wrap: wrap;}
      .flex-row{flex-direction: row;display: flex;flex-wrap: wrap;}
      .flex-demo{height: 160px;position: relative;display: flex;align-items:flex-end;}
      .vux-flexbox{}
      .flex-demo p{width: 100px;position: absolute;bottom: 0;height: 20px}
      .flex-demo p.mask{background: #000;opacity: 0.6;z-index: 1;}
      .flex-demo p.text{white-space: nowrap;overflow: hidden;font-size: 0.75rem;color: #fff;text-overflow: ellipsis;padding:0  0.25rem;  box-sizing: border-box;z-index: 2}
      
</style>

