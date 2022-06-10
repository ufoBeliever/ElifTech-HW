<template>
  <div class="likes">
    <button
      class="button"
      @click="like"
    >
      👍
    </button>

    {{ likes }}

    <button
      class="button"
      @click="dislike"
    >
      👎
    </button>
  </div>
</template>

<script>
export default {
  name: 'LikesComponent',
  data () {
    return {
      likes: 0
    }
  },
  methods: {
    like () {
      this.likes++
    },
    dislike () {
      if (!this.likes) {
        return
      }
      this.likes--
    }
  }
}
</script>

<style scoped>
  .button{
    width: 60px;
    height: 60px;
    border: none;
    background-color: #d2d2d2;
    border-radius: 30px;

    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
  }

  .button:hover{
    background-color: #bbbbbb;
    cursor: pointer;
  }
</style>
