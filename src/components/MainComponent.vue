<template>
    <main>
        <HeaderMainComponent @settedQueryEvent="runSearch" />
        <div class="container">
            <h1>Film</h1>
            <div class="card-container">
                <CardComponent v-for="movie in movies" :key="movie.id" 
                    :title="movie.title"
                    :originalTitle="movie.original_title" 
                    :vote="movie.vote_average" 
                    :language="movie.original_language"
                    :image="movie.poster_path" 
                    :overview="movie.overview" />
            </div>

            <h1>Serie TV</h1>
            <div class="card-container">
                <CardComponent v-for="serie in series" :key="serie.id" 
                    :title="serie.name"
                    :originalTitle="serie.original_name" 
                    :vote="serie.vote_average" 
                    :language="serie.original_language"
                    :image="serie.poster_path" 
                    :overview="serie.overview" />
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import { apiKey } from '@/env';
import HeaderMainComponent from '@/components/HeaderMainComponent.vue';
import CardComponent from './CardComponent.vue'

export default {
    name: 'MainComponent',
    components: {
        HeaderMainComponent,
        CardComponent,
    },

    data() {
        return {
            movies: [],
            series: [],
        };
    },
    methods: {
        search(queryFromEvent) {
            this.queryApiFilm(queryFromEvent);
            this.queryApiSeries(queryFromEvent);
        },

        runSearch(queryFromEvent) {
            console.log('setQuery', queryFromEvent)
            this.search(queryFromEvent)
        },

        queryApiFilm(textToSearch) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textToSearch}&language=it-IT`)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        this.movies = response.data.results;
                    }
                });
        },
        
        queryApiSeries(textToSearch) {
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it_IT&query=${textToSearch}`)
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        this.series = response.data.results;

                    }
                });
        },


    },
}
</script>

<style lang="scss" scoped>
main {
    background-color: #505050;
}

h1 {
    margin-top: 30px;
    margin-bottom: 30px;
    color: white;
    padding-left: 10px;
}

.card-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;

    >* {
        flex-shrink: 0;
    }
}
</style>