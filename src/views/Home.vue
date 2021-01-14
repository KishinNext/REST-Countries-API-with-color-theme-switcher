<template>
    <div class="app" :class="mode">
        <Header :mode="mode"/>
        <ListCountries :mode="mode"/>
    <!-- <font-awesome-icon icon="home"/> -->
    </div>
</template>

<script>
import { ref ,computed} from 'vue'
import { useStore } from 'vuex'
import Header from '../components/Header.vue'
import ListCountries from '../components/ListCountries.vue'
export default {
  components: { Header, ListCountries },
  setup(){
    const store = useStore()

    const mode = computed(() =>{
        
        return store.state.mode
    })

    return {mode}
  }
}
</script>

<style>

</style>