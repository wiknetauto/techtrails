<template>
    <div class="text-center mx-20 my-20 p-8 bg-white rounded">
        <h2 class="text-3xl text-myBlack"> {{ bodyTitle }} </h2>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['bodyTitle']
}
</script>
