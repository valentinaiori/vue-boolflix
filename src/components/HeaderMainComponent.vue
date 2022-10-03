<template>
    <header>
        <h1>BOOLFLIX</h1>
        <div>
            <input type="text" v-model="userQuery" @keyup.enter="changeUserQuery"/> 
            <button @click="changeUserQuery">Cerca</button>
        </div>  
    </header>
</template>

<script>
export default {
    name: 'HeaderMainComponent',
    data(){
        return{
            userQuery: ''
        }

    },

    methods:{
        changeUserQuery(){
            console.log(this.userQuery);
            this.$emit('settedQueryEvent', this.userQuery)
        }
    }


}
</script>

<style lang="scss" scoped>

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: black;
        height: 70px;
    }

    h1{
        color: red;
        font-size: 2.0rem;
    }


</style>