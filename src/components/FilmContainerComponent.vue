<template>
    <div class="container-card">
        <h1>MOVIES</h1>
        <div class="card" v-for="movie in movies" :key="movie.id">
            <p>Title: {{ movie.title }}</p>
            <p> Original title: {{ movie.original_title }}</p>
            <p> Language:
                <img class="flag" :src="getFlag(movie.original_language)" :alt="movie.original_language">
                {{ movie.original_language }}
            </p>
            <p> Vote: {{ movie.vote_average }}</p>
            <PosterPathComponent
            :image="movie.poster_path"
            alt="movie.title"
            />
        </div>
    </div>


</template>

<script>
import PosterPathComponent from './PosterPathComponent.vue'

export default {
    name: 'FilmContainerComponent',
    components:{
        PosterPathComponent
    },
    props: {
        movies: Array
    },
    methods: {
        getFlag(country) {
            switch (country) {
                case 'en': {
                    country = "gb";
                    break;
                }
                case 'ja': {
                    country = "jp";
                    break;
                }
                case 'zh': {
                    country = "cn";
                    break;
                }

            }
            return `https://flagicons.lipis.dev/flags/1x1/${country}.svg`;
        }
    }


}
</script>

<style lang="scss" scoped>
.card {
    border: 1px solid black;
}

.flag {
    max-width: 20px;
}
</style>