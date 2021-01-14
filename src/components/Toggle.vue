<template>
<div class="toggle">
    <label>
        
            <img class="moon" :src="chageImage" alt="MOON - MOON-LIGHT MOON-DARK">
            <span class="toggler-round">
                <button @click="selectMode(mode)">Dark Mode</button>
            </span>
    </label>

    </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
export default {
    props:['mode'],
    setup(props){
        const store = useStore()

        const chageImage =computed(() =>{
            if(props.mode === "dark"){
                return require("../images/moon-solid.svg")
            }else{
                return require("../images/moon-regular.svg")
            }
            
        })
        const selectMode = (mode) =>{
            store.dispatch('getColorMode', mode)
        }
        return {chageImage, selectMode}
    }
}
</script>

<style>

.toggle {
    text-align:center;
    padding:3px 0px;
    width: 100px;
    border-radius:4px;
    border: 0;
}


.toggle .moon{
    margin: 8px;
    height: 16px;
    width: 16px;

}

.dark .moon{
    margin: 8px;
    height: 16px;
    width: 16px;
    filter: invert(1);
    fill: white;
}

label{
    display: flex;
    flex-direction: row;
    justify-items: center;
    align-items: center;
}
.toggle span{
    
    padding:3px 0px;
    display:block;
    border-radius:4px;
    
}
button{
 
    background: inherit;
    border-color: inherit;
    font-weight: 300;
    font-size: 14px;
    border: none;
    outline:none;
    color: inherit;
}

button:active{
    color: inherit;
    border-color: inherit;
    background: inherit;
    font-weight: 300;
    font-size: 14px;
    border: none;
    outline:none;
}
/* .toggle input:hover + span {
    background-color:#efE0E0;
}

.toggle input:checked + span {
    background-color:#911;
    color:#fff;
}

.toggle input:checked:hover + span {
    background-color:#c11;
    color:#fff;
} */


</style>