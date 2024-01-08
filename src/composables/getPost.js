import { ref } from "vue";

const getPost = (category, id) => {
    const post = ref(null);
    const error = ref(null);

    const load = async () => {
        try {
            let data = await fetch(
                "http://137.184.13.54:8080/" + category + id
            );

            if (!data.oko) {
                throw Error("Post not found");
            }
            post.value = await data.json();
        } catch (err) {
            error.value = err.message;
            console.log(error.value);
        }
    };

    return { post, error, load };
};
