<template>
  <div class="post">
    <img :src="img" alt="Post image" class="main-img">
    <Likes />
    <span class="comments-link">
      <a href="/comments" class="link">Comments</a>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PostComponent',
  props: {
    img: {
      type: String,
      required: true
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .post{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
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

  .main-img{
    max-width: 400px;
    border-radius: 30px;
    border: 5px solid #d2d2d2;
  }

  .comments-link{
    text-align: center;
  }

  .link{
    text-decoration: none;
    color: black;
  }
  .link:hover{
    text-decoration: underline;
    color: #4f4f4f;
  }
</style>
