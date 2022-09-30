<template>
    <main>
        <HeaderMainComponent @settedQueryEvent="runSearch"/>
        <FilmContainerComponent :movies="this.movies" />
        <SeriesContainerComponent :series="this.series" />

    </main>



</template>

<script>
import axios from 'axios';
import { apiKey } from '@/env';
import HeaderMainComponent from '@/components/HeaderMainComponent.vue';
import FilmContainerComponent from './FilmContainerComponent.vue';
import SeriesContainerComponent from './SeriesContainerComponent.vue';

export default {
    name: 'MainComponent',
    components: {
        HeaderMainComponent,
        FilmContainerComponent,
        SeriesContainerComponent,
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

        runSearch(queryFromEvent){
            console.log('setQuery',queryFromEvent)
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

</style>