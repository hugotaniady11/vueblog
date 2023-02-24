<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
     <!-- Page Header-->
     <header class="masthead" style="background-image: url('./../img/post-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ post.title }}</h1>
                            <button 
                            style="padding: 2px" 
                            class="btn btn-danger" 
                            @click="handleDelete">
                                Delete
                            </button>
                                <span class="meta-post" v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Post Content-->
        <article class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <p>{{ post.body }}</p>
                    </div>
                </div>
            </div>
        </article>
      </div>
  <div v-else>
    <Loading />
</div>
  </div>
</template>

<script>
import getPost from '@/composable/getPost'
import Loading from '@/components/Loading.vue'
import { db, collection, doc, getDoc, deleteDoc } from "@/firebase/config"
import { useRouter } from 'vue-router'

export default {
    props: ['id'],
    components: {
        Loading
    },
    setup(props) {
        const router = useRouter()
        const { post, error, load } = getPost(props.id);

        load();

        const handleDelete = async () => {
            await deleteDoc(doc(collection(db, 'posts'), props.id));

            router.push({
            name: 'home'
        })
        }

        return { post, error, handleDelete }
    }
}
</script>

<style>

</style>