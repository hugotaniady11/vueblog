<template>
  <div>
    <!-- <div class="post-list">
    <div v-for="post in posts" :key="post.id">
        <PostSingle :post="post" />
    </div>
  </div> -->

  <!-- Post preview-->
  <div v-for="post in posts" :key="post.id">
    <div 
    class="post-preview" 
    >
      <PostSingle :post="post" />  
    </div>
    <hr class="my-4" />
  </div>
  
  </div>
</template>

<script>
import { onMounted } from 'vue';
import PostSingle from './PostSingle.vue';
export default {
    props: ['posts'],
    components: {
        PostSingle
    }
}
</script>

<style>

</style>