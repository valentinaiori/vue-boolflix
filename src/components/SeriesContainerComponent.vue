<template>
    <div>
        <h1>SERIES TV</h1>
    <div class="card-container">
        <div class="card" v-for="serie in series" :key="serie.id">
            <div class="poster-path">
                <PosterPathComponent :image="serie.poster_path" alt="serie.title"/>
            </div>
            <p>Name: {{ serie.name }}</p>
            <p>Original name: {{ serie.original_name }}</p>
            <p>Language:
                <img class="flag" :src="getFlag(serie.original_language)" :alt="serie.original_language">
                {{ serie.original_language }}
            </p>
            <StarsRatingComponent :vote="serie.vote_average"/>
            <p class="long-text"> {{ serie.overview}} </p>
        </div>
    </div>
</div>
</template>

<script>
import PosterPathComponent from './PosterPathComponent.vue';
import StarsRatingComponent from './StarsRatingComponent.vue'

export default {
    name: 'SeriesContainerComponent',
    components: {
        PosterPathComponent,
        StarsRatingComponent
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
        },
    } 
}

</script>

<style lang="scss" scoped>
.card-container{
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    >*{
        flex-shrink: 0;
    }
}

.card {
    border: 1px solid black;
    position: relative;
    height: 360px;
    width: 242px;
    margin-bottom: 50px;
    margin-right: 20px;


    img{
        width: 100%;
        object-fit: cover;
    }

    .long-text{
        max-height: 150px;
        overflow-y: auto;
    }
}

.poster-path{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.card:hover .poster-path{
    display: none;
}

.flag {
    max-width: 20px;
}
</style>