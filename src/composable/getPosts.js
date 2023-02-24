import { ref } from "vue"
import { db, collection, getDocs } from "@/firebase/config"

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

const load = async () => {
    try {
      const dataRef = collection(db, 'posts');
      const res = await getDocs(dataRef);
      posts.value = res.docs.map(doc => {
        return{
          ...doc.data(),
          id: doc.id 
        }
      })

    } catch(err) {
      error.value = err.message
    }
  }

  return { posts, error, load }

}

export default getPosts
