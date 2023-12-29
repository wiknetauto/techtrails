<template>
    <Header :pageTitle="pageTitle" :titleTag="titleTag" :img="img" />

    <Body bodyTitle="Recent Articles">
        <div v-if="error">
            <p> {{ error }} </p>
        </div>
        <div v-else>
            <div v-if="posts.length">
                <PostList :posts="posts" />
            </div>
            <div v-else>
                <p class="text-center my-20 text-2xl">Loading...</p>
            </div>
        </div>
    </Body>
</template>

<script>
import { ref } from 'vue';
import Header from '../components/Header.vue'
import Body from '../components/Body.vue'
import PostList from '../components/PostList.vue'
import getPosts from "../composables/getPosts"

export default {
    components: { Header, PostList, Body },
    setup() {
        const pageTitle = ref('Azure Blog')
        const titleTag = ref('...following cloud trails')
        const img = ref('bg-home')
        const category = "azure"

        const { posts, error, load } = getPosts(category)
        load()

        return {pageTitle, titleTag, img, posts, error}
    }
}
</script>
