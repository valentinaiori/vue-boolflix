<template>
    <div class="container-card">
        <h1>SERIES TV</h1>
        <div class="card" v-for="serie in series" :key="serie.id">
            <p>Name: {{ serie.name }}</p>
            <p>Original name: {{ serie.original_name }}</p>
            <p>Language:
                <img class="flag" :src="getFlag(serie.original_language)" :alt="serie.original_language">
                {{ serie.original_language }}
            </p>
            <p>Vote: {{ serie.vote_avarage }}</p>
            <PosterPathComponent 
            :image="serie.poster_path"
            alt="serie.title"
            />
        </div>

    </div>
</template>

<script>
import PosterPathComponent from './PosterPathComponent.vue'

export default {
    name: 'SeriesContainerComponent',
    components:{
        PosterPathComponent
    },
    props: {
        series: Array
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