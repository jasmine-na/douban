<template>
<div>
    <x-header :left-options="{showBack: false}">豆瓣电影</x-header>
    <tab :line-width=2>
               <tab-item selected class="vux-center"><router-link to="/movie">正在热映</router-link></tab-item>
               <tab-item class="vux-center">图书</tab-item>
               <tab-item class="vux-center">广播</tab-item>
               <tab-item class="vux-center">小组</tab-item>
      </tab>
    
</div>
</template>

<script>
import { XHeader,Tab, TabItem} from 'vux'

export default {
  components: {
     XHeader,Tab, TabItem
  },
  data () {
    return {
       
    }
  }
}
</script>
<style>
     .text-green{color: #00b600;}
     .text-blue{color:rgb(35, 132, 232);}
     .text-brown{color:rgb(159, 120, 96)}
     .text-orange{color:rgb(228, 168, 19)}
     .text-sky-blue{color:rgb(42, 184, 204)}
</style>