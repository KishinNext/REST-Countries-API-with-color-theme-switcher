<template>
    <header>
        <h4>
            <router-link to="/" class="router">
                Where in the world?
            </router-link>
        </h4>
        <Toggle :mode="mode"/>

    </header>
</template>

<script>
import Toggle from './Toggle.vue'
export default {
  components: { Toggle },
    props:['mode'],

}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 5% 30px;
    height: 20px;
    background: hsl(0, 0%, 98%);
    
}
.dark header{
    background: hsl(209, 23%, 22%);
    
}

header h4{
    font-weight: 800;
}

header h4 .router{
    color: inherit;
    background: inherit;
    text-decoration: inherit;
}
h4:hover{
    transform: scale(1.08);
    transition: 0.1s linear;
}
.toggle:hover{
    transform: scale(1.08);
    transition: 0.1s linear;
}

</style>