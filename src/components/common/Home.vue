<template>
  <div>
       <v-head></v-head>
       <router-view></router-view>
  </div>
</template>

<script>
import vHead from './Header.vue';

export default {
    components: {
      vHead
    },
    data () {
      return {
        msg: 'Hello World!'
      }
    }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
