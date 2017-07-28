<template>
  <div class="header-fixed">
    <x-header :left-options="{showBack: false}">豆瓣电影</x-header>
    <tab :line-width=2>
      <tab-item selected class="vux-center">
        <router-link to="/movie">电影</router-link>
      </tab-item>
      <tab-item class="vux-center">图书</tab-item>
      <tab-item class="vux-center">广播</tab-item>
      <tab-item class="vux-center">小组</tab-item>
    </tab>
  </div>
</template>
<script>
import { XHeader, Tab, TabItem } from 'vux'

export default {
  components: {
    XHeader,
    Tab,
    TabItem
  },
  data() {
    return {

    }
  }
}

</script>
<style>


</style>
