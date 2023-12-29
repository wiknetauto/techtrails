<template>
    <div v-for="post in posts" :key="post.id" >
        <PostPreview :post="post" />
    </div>
</template>

<script>
import PostPreview from './PostPreview.vue';

export default {
    props: ['posts'],
    components: { PostPreview }
}
</script>
