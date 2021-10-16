<template>
  <header id="topBar">
    <p style="color: #FFF; font-size:20px;">{{ store.state.barText }}</p>
  </header>
</template>

<script setup>
  import { useStore } from 'vuex'
  const store = useStore()
</script>

<style>
#topBar { 
display: flex;
height: 60px!important;
background: #00897b;
border-radius: 0px 0px 20px 20px;
margin: 0px 5px 10px 5px;
min-width: 300px;
justify-content: center;
align-content: center;
font-size: 18px;
}
</style>