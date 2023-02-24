<template>
  <div>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('./../img/contact-bg.jpg')">
            <div class="container position-relative px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="page-heading">
                            <h1>Create New Blog</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Main Content-->
        <main class="mb-4">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="my-5">
                            <form @submit.prevent="handleSubmit">
                                <div class="form-floating">
                                    <input class="form-control" type="text" placeholder="Title Blog" v-model="title"/>
                                    <label for="name">Title Blog</label>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Enter Body Blog" style="height: 12rem" v-model="body"></textarea>
                                    <label for="message">Body Blog</label>
                                </div>
                                <div class="form-floating">
                                    <input class="form-control" type="text" placeholder="Input Tags" v-model="tag" @keydown.enter.prevent="hanldeKeydown"/>
                                    <label for="name">Input Tags</label>
                                </div>
                                <span v-for="tag in tags" :key="tag"> #{{ tag }}</span>
                                <br />
                                <button class="btn btn-primary text-uppercase" type="submit">Create</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  </div>
  

</template>

<script>
import createPost from '@/composable/createPost';
export default {
    name: 'CreatePost',
  components: {
    createPost,
},
    setup() {
        const { title, body, tag, tags, hanldeKeydown, handleSubmit } = createPost()

        return { title, body, tag, tags, hanldeKeydown, handleSubmit }
        
    }

}
</script>

<style>

</style>