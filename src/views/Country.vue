<template>
    <div class="app" :class="mode" >
        <Header :mode="mode"/>
        <Details :nombre="nombre" :pais="pais" :borders="borders" class="details"/>
        <!-- <ListCountries :mode="mode"/> -->
    
    </div>
</template>

<script>
import { ref , computed, onMounted} from 'vue'
import { useStore } from 'vuex'
import Header from '../components/Header.vue'
import Details from '../components/Details.vue'
import ListCountries from '../components/ListCountries.vue'

export default {
    props:['nombre'],
    components:{
        Header,
        Details,
        ListCountries
    },
    setup(props){
        const store = useStore()
        if(localStorage.getItem('mode')){
          store.state.mode = JSON.parse(localStorage.getItem('mode'))
        }

        const mode = computed(() =>{
            return store.state.mode
        })

        onMounted(async () =>{
          await store.dispatch('getInfoCountry', props.nombre)
          await store.dispatch('getBorders')
        })

        const pais = computed( () =>{
          return  store.state.infocountry
        })

        const borders = computed( () =>{
          return  store.state.border
        })
        return{mode, pais, borders}
    }
}

</script>

<style>

</style>