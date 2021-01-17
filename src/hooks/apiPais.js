import {onMounted, ref} from 'vue'

export function apiPais(country){
    const arrayData = ref([])

    onMounted(async()=>{
        try {
            
            const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
            const db = await res.json()
            arrayData.value =  db.find(pais => pais.name === country)
            
            
        } catch (error) {
            console.log(error)
        }
    })

    return {arrayData}
}