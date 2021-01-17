<template>
    <div class="searchb">
        <img src="../images/search-solid.svg" alt="search" class="search_img">
        <input 
            type="text"
            id="regionb"
            placeholder="Search for a country..."
            v-model="texto"
            @keyup="formulario"

        >
    </div>
</template>

<script>
import { computed, onMounted, ref} from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const texto = ref('')

        const formulario = () => {
    
            store.dispatch('filtroName', texto.value)
        }

        return {texto, formulario}
    }
}
</script>

<style>
@media (max-width: 4000px) {
.searchb{
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    border-radius: 5px;
    box-shadow: 1px 0.1px 4px #8695a3;
    background-color:  white;
    padding: 0;
    border: none;

}
.dark .searchb{
    width: 35%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    border-radius: 5px;
    box-shadow: 1px 0.1px 4px #2f353a;
    background-color:  #2B3945;
    padding: 0;
    border: none;

}


#regionb{
    width: 89%;
    margin-left: 2%;
    padding: 0;
    border: none;
    height: 40px;
    color: #2B3945;
    background-color: white;
    outline:none;
}
.dark #regionb{
    width: 89%;
    margin-left: 2%;
    padding: 0;
    border: none;
    height: 40px;
    color: white;
    background-color:  #2B3945;
    outline:none;
 
}
.search_img{
    width: 5%;
    margin-left: 10%;
    margin-right: 5%;
}
.dark .search_img{
    width: 5%;
    margin-left: 10%;
    margin-right: 5%;
    filter: invert(1);

}
}


@media (max-width: 600px) {
.searchb{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    border-radius: 5px;
    box-shadow: 1px 0.1px 4px #8695a3;
    background-color:  white;
    padding: 0;
    border: none;

}
.dark .searchb{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;    
    border-radius: 5px;
    box-shadow: 1px 0.1px 4px #2f353a;
    background-color:  #2B3945;
    padding: 0;
    border: none;

}


#regionb{
    width: 89%;
    margin-left: 2%;
    padding: 0;
    border: none;
    height: 40px;
    color: #2B3945;
    background-color: white;
    outline:none;
}
.dark #regionb{
    width: 89%;
    margin-left: 2%;
    padding: 0;
    border: none;
    height: 40px;
    color: white;
    background-color:  #2B3945;
    outline:none;
 
}
.search_img{
    width: 5%;
    margin-left: 10%;
    margin-right: 5%;
}
.dark .search_img{
    width: 5%;
    margin-left: 10%;
    margin-right: 5%;
    filter: invert(1);

}
}



</style>