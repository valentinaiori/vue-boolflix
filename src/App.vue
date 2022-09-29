<template>
  <div id="app">
    <div>
    <input type="text" v-model="query"> <button @click="search">Cerca</button>
</div>
<div class="container-card">
    <div class="card" v-for="movie in movies" :key="movie.id">
      <p>Title: {{ movie.title }}</p>
      <p> Original title: {{ movie.original_title }}</p>
      <p> Language: {{ movie.original_language }}</p>
      <p> Vote: {{ movie.vote_average }}</p>
    </div>
</div>
  </div>
  
</template>

<script>

import axios from 'axios';
import {apiKey} from '@/env';


export default {
  name: 'App',


  data(){
    return{
      query: '',
      movies: [],
    }

  },
  mounted(){
    this.queryApi('ritorno al fut')

  }, 
  methods: {
    search(){
      this.queryApi(this.query)
    }, 

    queryApi(textToSearch){
      axios.get( `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textToSearch}&language=it-IT`)
      .then((response)=>{
        console.log(response);
        if( response.status === 200){
          this.movies = response.data.results;
        }
      })
    }
  }

}
</script>

<style>

</style>