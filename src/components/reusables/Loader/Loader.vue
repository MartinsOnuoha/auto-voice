<template>
<div class="">
  <div class="loader"></div>
</div>
</template>

<style lang="scss" scoped>
  .loader {
    background-image: url('https://cdn.dribbble.com/users/391380/screenshots/5431062/icon.gif');
    background-position: center;
    background-size: contain;
    margin: 0 auto;
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 5px solid $purple-1;
  }
</style>
<script>
import { defineComponent } from 'vue';

const Loader = defineComponent({
  name: 'Loader',
});

export default Loader;
</script>
