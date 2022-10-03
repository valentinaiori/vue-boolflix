<template>
  <img class="poster" :src="getImageUrl" alt="alt" @error="setUnavailablePoster($event)">
</template>

<script>
export default {
    name:'PosterPathComponent',
    props:{
        image: String,
        width: Number,
        alt: String
    },

    computed:{
        getImageUrl(){
            const width = 342;
            return 'https://image.tmdb.org/t/p/w' + width + this.image
        }
    }, 

    methods: {
        setUnavailablePoster(event){
            event.target.src = 'https://www.metrorollerdoors.com.au/wp-content/uploads/2018/02/unavailable-image-300x225.jpg'
        }
    }

}
</script>

<style lang="scss" scoped>
    .poster{
    max-width: 240px;
}

</style>