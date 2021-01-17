import {onMounted, ref} from 'vue'

export function getDirection(i){
    const name = ref([])
    onMounted(async()=>{
        try {
            const res = await fetch('../../country.json')
            const db = await res.json()
            name.value = db.find(name => name.alpha3code === i)
            
            console.log(i, link)
            return link
          } catch (error) {
            console.log(error)
          }
    })

    return {name}
}