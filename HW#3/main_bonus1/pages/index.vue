<template>
   <div class="app">
     <PostComponent :img="'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F927%2F838%2Fa21.jpg'"></PostComponent>
   </div>
</template>

<script>
import PostComponent from '~/components/Post'
export default {
  name: 'IndexPage',
  components: { PostComponent }
}
</script>
