<template>
    <header>
        <div>
            <h1>BOOLFLIX</h1>
        </div>
        <div>
            <input type="text" v-model="userQuery" /> 
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
        background-color: black;
        height: 100px;
        display: flex;
        align-items: center;
    }

    h1{
        color: red;
        font-size: 2.0rem;
    }


</style>