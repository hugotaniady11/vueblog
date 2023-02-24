import { ref } from "vue"
import { useRouter } from 'vue-router'
import { db, collection, getDocs, doc } from "@/firebase/config"
import { addDoc } from "firebase/firestore";


const createPost = () => {
    const router = useRouter()
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);

    const hanldeKeydown = () => {
        if(! tags.value.includes(tag.value)) {
            tag.value = tag.value.replace(/\s/g, '')
            tags.value.push(tag.value)
        }

        tag.value = ''
    }

    const handleSubmit = async() => {
        const post = {
            title: title.value,
            body: body.value,
            tags: tags.value
        };

        
        const res = collection(db, 'posts');
        await addDoc(res, post);

        

        router.push({
            name: 'home'
        })
    }

  return { title, body, tag, tags, hanldeKeydown, handleSubmit }

}

export default createPost
