<template>
    <div class="card">
        <div class="poster-path">
            <PosterPathComponent :alt="title" :image="image" />
        </div>
        <div class="info">
            <p><strong>Titolo: </strong> {{title}}</p>
            <p><strong>Titolo Originale: </strong> {{originalTitle}}</p>
            <p><strong>Lingua: </strong>
                <img class="flag" :src="getFlag(language)" :alt="language">
            </p>
            <p><strong>Valutazione: </strong>
                <StarsRatingComponent :vote="vote"/>
            </p>

            <p class="long-text"><strong>Overview: </strong>{{overview}}</p>
        </div>

    </div>

</template>

<script>
import PosterPathComponent from './PosterPathComponent.vue';
import StarsRatingComponent from './StarsRatingComponent.vue';

export default {
    name: 'CardComponent',
    components: {
        PosterPathComponent,
        StarsRatingComponent
    },
    props: {
        title: String,
        originalTitle: String,
        vote: Number,
        language: String,
        image: String,
        overview: String
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

.info{
    padding-top: 15px;
    padding-left: 15px;
    padding-right: 15px;
}

.card {
    border: 1px solid black;
    position: relative;
    height: 360px;
    width: 242px;
    margin-bottom: 50px;
    margin-right: 20px;
    padding-left: 2px;


    img {
        width: 100%;
        object-fit: cover;
    }

    .long-text {
        max-height: 150px;
        overflow-y: auto;
    }
}

.poster-path {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.card:hover {
    background-color: black;
    color: white;
}

.card:hover .poster-path {
    display: none;
}

.flag {
    max-width: 20px;
}
</style>