<template>
    <div class="container-card">
        <div class="card" v-for="movie in movies" :key="movie.id">
            <p>Title: {{ movie.title }}</p>
            <p> Original title: {{ movie.original_title }}</p>
            <p> Language:
                <img class="flag" :src="getFlag(movie.original_language)" :alt="movie.original_language">
                {{ movie.original_language }}
            </p>
            <p> Vote: {{ movie.vote_average }}</p>
        </div>
    </div>


</template>

<script>
export default {
    name: 'FilmContainerComponent',
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