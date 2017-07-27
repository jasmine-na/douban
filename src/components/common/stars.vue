<template>
               <div class="stars">
                        <div v-if="gray==5" class="text-muted small-size">暂无评分</div>
                        <div v-else><i class="iconfont icon-star text-yellow" v-for="item in full"></i>
	                    <i class="iconfont icon-half-star text-yellow" v-for="item in half"></i>
                        <i class="iconfont icon-star text-gray" v-for="item in gray"></i></div>
	                    
                </div>

</template>>
<!-- <script type="text/ecmascript-6"> -->
<script>
export default {
	 props: ['stars'], //组件通信
	 data () {
	    return { 
                 full:0, //全星
                 half:0, //半星
                 gray:5 //灰星
	    }
	 },
	 components: {
	 },
	 mounted: function() {
	 	   this.computeStar();
     },
     methods: {
     	   computeStar(){
                      var stars=this.stars;
				 	  this.full=parseInt(stars/10);
				 	  this.half=parseInt((stars%10)/5);
				 	  this.gray=5-this.full-this.half;
     	   }
     }
}
</script>
<style scoped>
</style>

