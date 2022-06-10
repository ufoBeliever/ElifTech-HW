<template>
  <div class="app">
    <a href="/" class="back-button">ᐊ</a>
    <AddComment @addCommentEvent="addNewComment" />
    <comments-list :comments="comments" />
  </div>
</template>

<script>
import { Component } from 'nuxt-property-decorator';
import Vue from 'vue';

export default @Component
class CommentsPage extends Vue {
  data () {
    return {
      comments: []
    };
  }

  addNewComment (comment) {
    this.comments.push(comment);
  }
}
</script>

<style scoped>
  .app{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 15px;
    max-width: 700px;
    height: 85vh;
    background-color: #efefef;
    border-radius: 40px;
    border: 10px solid #d2d2d2;
    margin: 0 auto;

    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
  }
  .back-button{
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #d2d2d2;

    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
    padding-left: 10px;
    text-decoration: none;
    color: black;
  }
  .back-button:hover{
    background-color: #bbbbbb;
    cursor: pointer;
  }
</style>
