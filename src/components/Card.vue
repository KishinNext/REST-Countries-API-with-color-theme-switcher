<template>
<button class="button-card">
    <router-link to="/country" class="router">
        <div class="card">
            <div class="img">
                <img :src="pais.flag" :alt="`bandera-${pais.nombre}`" class="img"></div>
                <div class="text">
                    <h4 class="tittle">
                        {{pais.name}}
                    </h4>
                    <p>
                        <b>Popilation:</b>
                        {{formatPopulation(pais.population)}}</p>
                    <p>
                        <b>Region:</b>
                        {{pais.region}}</p>
                    <p>
                        <b>Capital:</b>
                        {{pais.capital}}</p>

                </div>
            </div>
        </router-link>
    </button>
</template>

<script>
export default {
    props:['pais', 'mode'],
    setup(){
        const formatPopulation = (num) =>{
            return new Intl.NumberFormat("de-DE").format(num)
        }
        return {formatPopulation}
    }
}
</script>

<style>


.button-card{
    background-color: inherit;
    color: inherit;
    border: 0;
    
}


.button-card .router {
    
    background-color: inherit;
    color: inherit;
    border: 0;
    text-align: left;
}

.card{
    width: 250px;
    height: auto;
    margin: 0px;
    padding:0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    
}

.dark .card{
    width: 250px;
    height: auto;
    margin: 0px;
    padding:0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 10px;
    background-color: hsl(209, 23%, 22%);
}
.text{
    margin-top: 15px;
    margin-bottom: 40px;
    margin-left: 20px;
}
.img{
    width: 250px;
    height: 150px;
    padding: 0px;
    margin: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
}
.card p{
    margin-top: 2px;
    font-size: 12px;
}
.card h4{
    margin-bottom: 18px;
}
.router{
    text-decoration: none;
}
</style>