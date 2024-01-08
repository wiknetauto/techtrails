import { ref } from "vue";

const getPosts = (category) => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            console.log(category);
            let data = await fetch("http://137.184.13.54:8080/" + category);
            console.log(data.ok);
            if (!data.ok) {
                throw Error("no data available");
            }
            posts.value = await data.json();
        } catch (err) {
            error.value = err.MessageChannel;
            console.log(error.value);
        }
        console.log(posts.value);
    };

    return { posts, error, load };
};

export default getPosts;
