<template>
  <div>
    <router-link :to="{ name: 'ShowPost', params: {id: post.id}}">
      <h2 class="post-title">
        {{ post.title }}
      </h2>
      <p class="post-subtitle fw-bolder">
        {{ snippet }}
      </p>
    </router-link>
    <span
      class="small text-center text-muted fst-italic" 
      v-for="tag in post.tags" 
      :key="tag"
    >
      <router-link :to="{name: 'Tag', params: {tag: tag}}"> #{{ tag }} </router-link>
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props){
        const snippet = computed(() => {
            return props.post.body.substring(0,100) + "..."
        })

        return {snippet}
    },
    mounted() {
        console.log('...')
    }
}
</script>

<style>

</style>