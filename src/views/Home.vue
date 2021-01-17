<template>
<div class="app" :class="mode">
    <Header :mode="mode"/>
    <div class="search_main">
        <Buscador/>
        <Region/>
    </div>
    <ListCountries :mode="mode" class="ListCountries"/>
    <!-- <font-awesome-icon icon="home"/> -->
    <div class="footer">
      
    </div>
</div>
</template>

<script>
import { ref ,computed} from 'vue'
import { useStore } from 'vuex'
import Header from '../components/Header.vue'
import ListCountries from '../components/ListCountries.vue'
import Buscador from '../components/Buscador.vue'
import Region from '../components/Region.vue'
export default {
  components: { Header, ListCountries, Buscador, Region },
  setup(){
    const store = useStore()
    // console.log(JSON.parse(localStorage.getItem('mode')))

    if(localStorage.getItem('mode')){
      store.state.mode = JSON.parse(localStorage.getItem('mode'))
    }

    const mode = computed(() =>{

        return store.state.mode
    })
    return {mode}
  


    
  }
}
</script>

<style>
.footer{
  height: 90%;
}

@media (max-width: 2000px) {
    .search_main{
    display: flex;
    justify-content: space-between;
    margin: 3% 5% 0 5%;
  }

}
@media (max-width: 600px) {
    .search_main{
    display: flex;
    flex-direction: column;
    margin: 3% 5% 0 5%;
  }
}
</style>