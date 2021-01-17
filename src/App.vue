

<template>
    <!-- <div id="nav"> <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> </div> } -->
    
    <router-view/>

</template>

<script>

export default {

}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', sans-serif;
    transition: background-color .3s linear;
}

.app{
    height: 100%;
    background-color: white;
    color: hsl(207, 26%, 17%);

}
.dark{

    height: 100%;
    background-color:hsl(207, 26%, 17%);
    color: white;

}

</style>
