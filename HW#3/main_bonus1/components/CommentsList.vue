<template>
  <div class="comments-list">
    <div v-for="comment in comments" :key="comment.id" class="comments-wrapper">
      <div class="comment">
        <div class="comment-text">
          {{ comment.nickname }}:
          {{ comment.comment }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator';
export default @Component({
  name: 'CommentsList',
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
})

class CommentsList extends Vue {}

</script>

<style scoped>
  .comments-list{
    width: 100%;
    height: 50vh;
    border-radius: 30px;
    overflow: scroll;
    overflow-x: hidden;
  }

  .comment{
    width: 90%;
    height: 60px;
    background-color: #d2d2d2;
    border-radius: 30px;
    font-size: 20px;
    padding-left: 10px;
    margin-top: 20px;
  }

  .comments-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comment-text{
    margin-left: 15px;
    margin-top: 10px;
  }
</style>
