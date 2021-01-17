<template>
    <div class="container" v-if="numeberscards <= 3">
     
        <div class="row" v-if="paises.length !== 0">
                <div class="col" v-for="pais in paises" :key="pais.name" >
                        <Card :pais="pais"/>
                </div>
            </div> 
            <div v-else class="else"> 
                    <p><b>Oops, the country doesn't exist in this world, dimension and reality... o perhaps for this specific region<br>
                            Search for something else</b> </p>
            </div>

    </div>
    <div v-else>
        <div class="row" v-if="paises.length !== 0">
                <div class="col" v-for="pais in paises" :key="pais.name" >
                        <Card :pais="pais"/>
                </div>
            </div> 
            <div v-else class="else"> 
                    <p><b>Oops, the country doesn't exist in this world, dimension and reality... o perhaps for this specific region<br>
                            Search for something else</b> </p>
            </div>
    </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import Card from './Card.vue'


export default {

    components:{
        Card
    },
    setup(){
    
        const store = useStore()

        const paises = computed(() =>{
            return store.getters.topPaisesPoblacion
        })

        const numeberscards = computed(() =>{
            return store.state.longrow
        })
        onMounted(async () =>{
            await store.dispatch('getCountries')
        })


        
        return {paises, numeberscards}
    }
}
</script>

<style>
.container{
    height: 100vh;
}
.else{
    display: flex;
    justify-content: center;
    margin-top: 20%;
    height: 100vh;
    
}
.row{
    
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;

    
}
.row .col{
    margin-top: 60px;
    margin-right: 50px;
    margin-left: 50px;
    box-shadow: 0.1px 0.1px 10px hsl(212, 26%, 13%);
    border-radius: 10px;
 
}

.col:hover{
    transform: scale(1.03); 
    transition: 0.2s linear;
}
</style>