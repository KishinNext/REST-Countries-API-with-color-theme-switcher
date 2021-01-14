<template>
    <div class="app" :class="mode">
        <Header :mode="mode"/>
    <!-- <font-awesome-icon icon="home"/> -->
    </div>
</template>

<script>
import { ref , computed} from 'vue'
import Header from '../components/Header.vue'
import { useStore } from 'vuex'

export default {
    components:{
        Header
    },
    setup(){
        const store = useStore()

        const mode = computed(() =>{
            return store.state.mode
        })
        console.log(mode)
        return{mode}
    }
}

</script>

<style>
.app{

    background-color: white;
    color: hsl(207, 26%, 17%);

}
.dark{

    background-color:hsl(207, 26%, 17%);
    color: white;

}
</style>