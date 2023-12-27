<template>
    <div :class="img" class="relative h-80 w-auto bg-cover bg-center">
        <div class="absolute inset-12 flex items-center justify-start">
            <div class="ml-4">
                <h1 class="text-6xl text-myCream font-bold">{{ pageTitle }}</h1>
                <p class="text-3xl text-myTan font-bold">{{ titleTag }}</p>
                <!-- in search of happy path -->
                <!-- pursuing happy path -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['pageTitle', 'titleTag', 'img'],
    setup(props) {
        const pageTitle = props.pageTitle
        const titleTag = props.titleTag
        const img = props.img
        return {pageTitle, titleTag, img}
    }
}
</script>
