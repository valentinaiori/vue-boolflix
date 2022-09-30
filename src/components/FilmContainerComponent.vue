<template>
    <div>
        <h1>MOVIES</h1>
        <div class="container-card">
            <div class="card" v-for="movie in movies" :key="movie.id">
                <p>Title: {{ movie.title }}</p>
                <p> Original title: {{ movie.original_title }}</p>
                <p> Language:
                    <img class="flag" :src="getFlag(movie.original_language)" :alt="movie.original_language">
                    {{ movie.original_language }}
                </p>
                <p> Vote: {{ movie.vote_average }}</p>
                <PosterPathComponent :image="movie.poster_path" alt="movie.title" />
            </div>
        </div>

    </div>
</template>

<script>
import PosterPathComponent from './PosterPathComponent.vue'

export default {
    name: 'FilmContainerComponent', 
    components: {
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
        }, 

        getIntegerVote(n){
            let vote = Math.floor(n/2)
            if(vote === 0){
                vote = 1
            }
           return vote
        } 
    }
}
</script>

<style lang="scss" scoped>

.container-card {
    display: flex;
    flex-wrap: wrap;
}

.card {
    border: 1px solid black;
    width: 251px;
    height: 455px;
    margin-bottom: 50px;
    flex-direction: row;
    width: calc(100% / 5);
}

.flag {
    max-width: 20px;
}

</style>