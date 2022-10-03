<template>
  <div>
    <font-awesome-icon v-for="index in max" :key="index" 
        :icon="[
            index <= stars ? 'fa-solid' : 'fa-regular',
            'fa-star'
        ]" />
  </div>
</template>

<script>
export default {
    name: 'StarsRatingComponent',
    data(){
        return{
            max: 5
        }
    },

    props: {
        vote: Number
    },

    computed:{
            stars(){
                return Math.ceil(this.vote / 10 * 5)
            }
        }

}
</script>

<style lang="scss" scoped>

</style>