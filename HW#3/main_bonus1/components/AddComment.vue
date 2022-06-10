<template>
  <form class="add-comment" @submit.prevent>
    <input placeholder="Nickname" type="text" v-model="nickname">
    <textarea placeholder="Comment" v-model="comment"></textarea>
    <div>
      <input type="submit" value="Add Comment" @click="addComment">
      <input type="reset" value="Cancel">
    </div>
  </form>
</template>

<script>
import { Component } from "nuxt-property-decorator"
import Vue from 'vue'

export default @Component
class AddComment extends Vue {
  data () {
    return {
      nickname: '',
      comment: ''
    }
  }

  addComment () {
    this.$emit('addCommentEvent', {
      id: Date.now(),
      nickname: this.nickname,
      comment: this.comment
    })
    this.nickname = ''
    this.comment = ''
  }
}
</script>

<style scoped>
  .add-comment{
    height: 30vh;
    width: 350px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
  }
  input[type="text"]{
    width: 300px;
    height: 30px;
    padding-left: 10px;
    border-radius: 30px;
    border: 2px solid #9a9a9a;

    font-size: 12px;
    font-family: Arial;
    font-weight: bold;
  }
  textarea{
    resize: none;
    font-size: 12px;
    font-family: Arial;
    font-weight: bold;
    border: 2px solid #9a9a9a;
    width: 300px;
    height: 30px;
  }
  input[type="submit"], input[type="reset"]{
    width: 100px;
    height: 30px;
    border: none;
    background-color: #d2d2d2;
    border-radius: 30px;

    font-size: 12px;
    font-family: Arial;
    font-weight: bold;
  }

  input[type="submit"]:hover, input[type="reset"]:hover{
    background-color: #bbbbbb;
    cursor: pointer;
  }
</style>
