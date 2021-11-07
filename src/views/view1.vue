<template>
    <div id="header">
        <div class="col" style="margin-top:0px!important; height:80px;"></div>
    </div>
    <div id="container_4">
        <div class="col_4"></div>
    </div>
    <div id="header2">
        <div class="col"></div>
    </div>
    <div id="container_44">
        <div class="col_4"></div>
    </div>
    <div id="container_3">
        <div class="col_v3"></div>
        <div class="col_v3"></div>
    </div>
    <div id="container_2">
        <div class="col_v2"></div>
        <div class="col_v2"></div>
        <div class="col_v2"></div>
    </div>
  <div id="container_1">
      <div class="col_v1"></div>
      <div class="col_v1"></div>
      <div class="col_v1"></div>
      <div class="col_v1"></div>
  </div>
</template>

<script setup>
    import { useStore } from 'vuex';
    
    useStore().commit('setBarText', 'Mis Productos');
</script>

<style>
#header, #header2, #container_1, #container_2, #container_3, #container_4, #container_44 { 
    background: rgb(95, 190, 202);
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    /* margin: 1px 5px 1px 5px; */
    border: 1px solid #000;
    height: auto;
}
#container_1, #container_2, #container_3, #container_4, #container_44, #header, #header2 {
    justify-content:space-between;
    border-width: 0px;
    background:none;
}
.col, .col_v1, .col_v2, .col_v3, .col_v4 {
    min-width: 300px;
    border-radius: 15px;
    margin: 5px;
    flex:1;
}
.col {
    background: #90CAF9;
    height:100px;
}
.col_v1 {
    background: #FFD54F;
    height:300px;
    margin: 5px;
}
.col_v2 {
    background: #00BCD4;
    height:400px;
}
.col_v3 {
    background: #7986CB;
    height:400px;
}
.col_4 {
    background: #29B6F6;
    height:400px;
}
</style>