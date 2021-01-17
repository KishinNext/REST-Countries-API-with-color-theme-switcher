<template>
  <div class="rowchekload" v-if="pais.length === 0">
  Loading...
  </div>
  <div v-else>
    <div id="back_button">
        <router-link to="/" class="router_details">
              <img src="../images/arrow-left-solid.svg" alt="leftarrow" class="left_arrow">
              Back
        </router-link>
      </div>
      <div class="row_details" >
        <div class="col_1_details">
          <img :src="pais.flag" :alt="`bandera-${pais.nombre}`" class="img_detail">
        </div>  
        <div id="grid">
          <div id="a">
            <h1 >{{pais.name}}</h1>
          </div>
          <div id="b" class="col_2_1_details">
            <p>
                <b>Native Name:</b>
                {{pais.nativeName}}
            </p>
            <p>
                <b>Population:</b>
                {{formatPopulation(pais.population)}}
            </p>
            <p>
                <b>Region:</b>
                {{pais.region}}
            </p>
            <p>
                <b>Sub Region:</b>
                {{pais.subregion}}
            </p>
            <p>
                <b>Capital:</b>
                {{pais.capital}}
            </p>   
          </div>    
          <div id="c" class="col_2_2_details">
            <p v-for="i in pais.topLevelDomain" :key="i">
              <b>Top Level Domain:</b>
              {{i}}
            </p>  
            <p v-for="i in pais.currencies" :key="i">
              <b>Currencies:</b>
              {{ i.name}}
            </p>  

            <div class="languages">
              <b>Languages: </b>
              <p v-for="(i, index) in pais.languages" :key="i">
                {{index >= 1 ? "," + i.name: i.name}}
              </p> 
            </div>

          </div>
          <div id="e">
              <b>Border Countries:</b>
              <button v-for="i in borders" :key="i" class="button_borders" >
                <router-link :to="{ path: `/`}" class="router_details" >{{i}}</router-link>
              </button>  
          </div>
        </div>
        
      </div>
      <div class="footer">

      </div>
  </div>

</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import {getDirection} from '../hooks/getDirection'

export default {
    props:['nombre','mode','pais','borders'],
    setup(props){
        const store = useStore()


        onMounted(async () =>{
          await store.dispatch('getInfoCountry', props.nombre)
          await store.dispatch('getBorders')
        })
        
        const formatPopulation = (num) =>{
            return new Intl.NumberFormat("de-DE").format(num)
        }


        
        return {formatPopulation}
    }
}
</script>

<style>
.button_borders{
  color: inherit;
  margin: 8px;
  width: auto;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0.1px 0.1px 3px #969a9c;
  padding: 5px;
}
.dark .button_borders{
  color: inherit;
  margin: 8px;
  width: auto;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0.1px 0.1px 3px #111517;
  background-color: #2B3945;
}
.languages{
  display: flex;
}
.languages p{
  margin-left: 5px;
}
.footer{
  height: 300px;
}
#back_button{

  width: 100px;
  margin-left: 5%;
  margin-top: 50px;  
  text-decoration: none;
  box-shadow: 0.1px 0.1px 3px #969a9c;
  border-radius: 1px;
  
}
#back_button:hover{
    width: 100px;
  margin-left: 5%;
  margin-top: 50px;  
  text-decoration: none;
  box-shadow: 0.1px 0.1px 3px #111517;
  border-radius: 1px;
  transform: scale(1.05);
  transition: 0.3s linear;
}
.dark #back_button:hover{
    width: 100px;
  margin-left: 5%;
  margin-top: 50px;  
  text-decoration: none;
  box-shadow: 0.1px 0.1px 3px #111517;
  border-radius: 1px;
  transform: scale(1.05);
  transition: 0.3s linear;
}


.dark #back_button{

  width: 100px;
  margin-left: 5%;
  margin-top: 50px;  
  text-decoration: none;
  border-radius: 1px;
  background-color: hsl(209, 23%, 22%) ;
  box-shadow: 0.1px 0.1px 3px #242525;

}


#back_button .left_arrow{
  width: 16px;
  margin: 3px;
  fill: #222e3a;
}
.dark #back_button .left_arrow{
  width: 16px;
  margin: 3px;
  filter: invert(1);
}
.router_details{
  text-decoration: none;
  color: #222e3a;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}

.dark .router_details{
  text-decoration: none;
  color: white;
  background: inherit;

;
}

@media (max-width: 4000px) {
.row_details{
  height: 80%;
  width: 90%;
  padding: 0;
  margin-top: 40px;
  margin-left: 4%;
  display: flex;
  /* justify-content: space-between; */
  justify-content: self-start;
  flex-wrap:nowrap;
  flex-direction: row;

}
}

@media (max-width: 1200px) {
.row_details{
  height: 100%;
  width: 100%;

  margin-left: 0px;
  margin-top: 40px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  /* flex-wrap:nowrap; */


}
}


.col_1_details{
  width: 90%;
  
}
.img_detail{
  max-width: 100%;
  max-height: 100%;
  padding: 0px;
  margin: 0px;
  border: 15px solid white;
  border-radius: 10px; 
  object-fit: cover;
  
}
.dark .col_1_details .img_detail{

  border: 15px solid #222e3a;
  border-radius: 10px; 
}


@media (max-width: 4000px) {
  #grid{
    display: grid;
    width: 100%;
    margin-top: 60px;
    margin-left: 150px;
    grid-template-areas:
              "a a"
              "b c"
              "e e";
    grid-template-columns:50% 50%;
  }
  #a {
      grid-area: a;
      font-weight: 12px;
  }
  #b {
      grid-area: b;
      font-weight: 600;
      line-height: 30px;
  }
  #c {
      grid-area: c;
      font-weight: 600;
      line-height: 30px;
  }
  #e {
      grid-area: e;
      font-weight: 600;
      line-height: 30px;
  }
}


@media (max-width: 1200px) {
  #grid{
    display: grid;
    width: 100%;
    margin-top: 60px;
    margin-left: 20px;
    grid-template-areas:
              "a a"
              "b c"
              "e e";
    grid-template-columns:50% 50%;
  }
  #a {
      grid-area: a;
      font-weight: 12px;
  }
  #b {
      grid-area: b;
      font-weight: 600;
      line-height: 30px;
  }
  #c {
      grid-area: c;
      font-weight: 600;
      line-height: 30px;
  }
  #e {
      grid-area: e;
      font-weight: 600;
      line-height: 30px;
  }
}

@media (max-width: 400px) {
  #grid{
    display: grid;
    width: 100%;
    margin-top: 60px;
    margin-left: 20px;
    grid-template-areas:
              "a"
              "b"
              "c"
              "e";
    grid-template-columns:100%;
  }
  #a {
      grid-area: a;
      font-size: 12px;
      margin-bottom: 20px;
      
  }
  #b {
      grid-area: b;
      font-size: 15px;
      line-height: 25px;
      margin-bottom: 30px;
  }
  #c {
      grid-area: c;
      font-size: 15px;
      line-height: 25px;
      margin-bottom: 30px;
  }
  #e {
      grid-area: e;
      font-size: 15px;
      line-height: 25px;
  }
}


</style>