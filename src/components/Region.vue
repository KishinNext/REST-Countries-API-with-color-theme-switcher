<template>
    
    <!-- <h3 class="text-center">Filtrar por continente</h3>
         <div  role="group" aria-label="Basic example">
         <button type="button" @click="filtro('Americas')">AM</button>
         <button type="button" @click="filtro('Europe')">EU</button>
         <button type="button" @click="filtro('Asia')">AS</button>
         <button type="button" @click="filtro('Oceania')">OC</button>
         <button type="button" @click="filtro('Africa')">AF</button>
         <button type="button" @click="filtro('')"  >ALL</button>
        
    </div> -->
    <select name="region" id="region" @change="filtro($event)">

        <option value="" aria-placeholder="Please Choose One" class="default">Filter by Region</option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Africa">Africa</option>


        <!-- <option value="">All</option> -->
    </select> 

</template>

<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()

        const filtro = (region) =>{
            // console.log(region.target.value)
            return store.dispatch('filtropais', region.target.value)
        }
        
     
        return {filtro}
    }
}
</script>

<style>
@media (max-width: 4000px){
#region{
    width: 18%;
    height: 40px;
    color: #2B3945;
    border-radius: none;
    box-shadow: 1px 0.1px 4px #8695a3;
    padding: 0;
    border: none;

}
#region:hover{
    width: 18%;
    height: 40px;
    color: #2B3945;
    border-radius: none;
    box-shadow: 1px 0.1px 4px #8695a3;
    padding: 0;
    border: none;
    transition: 0.5s;
    transform: scale(1.03);

}
.dark #region{
    width: 18%;
    height: 40px;
    color: white;
    border-radius: none;
    box-shadow: 1px 0.1px 4px #232c35;
    background-color: #2B3945;
    transition: 0.5s;
    padding: 0;
    border: none;
}
}

@media (max-width: 600px){
#region{
    width: 50%;
    height: 40px;
    color: #2B3945;
    border-radius: none;
    box-shadow: 1px 0.1px 4px #8695a3;
    margin-top: 15px;
    padding: 0;
    border: none;

}
#region:hover{
    width: 50%;
    height: 40px;
    color: #2B3945;
    border-radius: none;
    box-shadow: 1px 0.1px 4px #8695a3;
    padding: 0;
    border: none;
    transition: 0.5s;
    transform: scale(1.03);

}
.dark #region{
    width: 50%;
    height: 40px;
    color: white;
    border-radius: none;
    box-shadow: 1px 0.1px 4px #232c35;
    background-color: #2B3945;
    transition: 0.5s;
    padding: 0;
    border: none;
}
}
::-webkit-input-placeholder {
   text-align: left;
   color: #2B3945;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;
   color: #2B3945;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;
   color: #2B3945;  
}

:-ms-input-placeholder {  
   text-align: center; 
   color: #2B3945;
}


.dark ::-webkit-input-placeholder {
   text-align: center;
   color: white;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;
   color: #2B3945;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;
   color: #2B3945;  
}

:-ms-input-placeholder {  
   text-align: center; 
   color: #2B3945;
}

</style>