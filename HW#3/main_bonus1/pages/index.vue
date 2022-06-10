<template>
  <div class="app">
    <PostComponent :img="'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'" />
  </div>
</template>

<script>
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';
import PostComponent from '~/components/Post';

export default @Component({
  components: { PostComponent }
})

class IndexPage extends Vue {}
</script>
