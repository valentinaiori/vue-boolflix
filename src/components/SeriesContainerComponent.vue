<template>
<div class="container-card">
    <div class="card" v-for="serie in series" :key="serie.id">
        <p>Title: {{ serie.name }}</p>
        <p>Original title: {{ serie.original_name }}</p>
        <p>Language: 
            <img class="flag" :src="getFlag(serie.original_language)" :alt="serie.original_language">
                {{ serie.original_language }}
        </p>
        <p>Vote: {{ serie.vote_avarage }}</p>
    </div>

</div>
</template>

<script>
export default {
    name: 'SeriesContainerComponent',
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