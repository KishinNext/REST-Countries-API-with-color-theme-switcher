<template>
   <div class="row">
        <div class="col" v-for="pais in paises" :key="pais.name">
            <Card :pais="pais" :mode="mode"/>
        </div>
    </div> 
</template>

<script>
import { computed, onMounted } from 'vue'
import {useStore} from 'vuex'
import Card from './Card.vue'

export default {
    props:['mode'],
    components:{
        Card
    },
    setup(){
    
        const store = useStore()

        const paises = computed(() =>{
            return store.getters.sortCountries
        })
        onMounted(async () =>{
            await store.dispatch('getCountries')
        })
        return {paises}
    }
}
</script>

<style>

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