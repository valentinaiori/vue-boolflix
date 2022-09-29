<template>
    <main>
        <div>
            <input type="text" v-model="query" /> 
            <button @click="search">Cerca</button>
        </div>

        <FilmContainerComponent :movies="[...this.movies, ...this.series]" />

    </main>



</template>

<script>
import axios from 'axios';
import { apiKey } from '@/env';
import FilmContainerComponent from './FilmContainerComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        FilmContainerComponent
    },

    data() {
        return {
            query: "",
            movies: [],
            series: [],
        };
    },
    methods: {
        search() {
            this.queryApiFilm(this.query);
            this.queryApiSeries(this.query);
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
</style>