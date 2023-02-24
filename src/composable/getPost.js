import { ref } from "vue"
import { db, collection, doc, getDoc } from "@/firebase/config"

const getPost = (id) => {
  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const dataRef = doc(collection(db, 'posts'), id);
      const res = await getDoc(dataRef);

      if (!res.exists()) {
        throw new Error("Post not found")
      } 

      post.value = {
        ...res.data(),
        id: res.id,
      }

    } catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load }
}

export default getPost