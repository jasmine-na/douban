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
  data() {
    return {
      msg: 'Hello World!'
    }
  }
}

</script>
<style>


</style>
