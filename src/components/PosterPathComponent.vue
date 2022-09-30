<template>
  <img class="poster" :src="getImageUrl" alt="">
</template>

<script>
export default {
    name:'PosterPathComponent',
    props:{
        image: String,
        width: Number,
    },

    computed:{
        getImageUrl(){
            const width = 342;
            return 'https://image.tmdb.org/t/p/w' + width + this.image
        }
    }

}
</script>

<style lang="scss" scoped>
    .poster{
    max-width: 250px;
}

</style>