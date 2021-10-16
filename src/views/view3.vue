<template>
    <div id="header">
        <div class="col" style="margin-top:0px!important; height:180px;"></div>
    </div>
    <div id="container_4">
        <div class="col_4"></div>
    </div>
    <div id="container_3">
        <div class="col_v3"></div>
        <div class="col_v3b"></div>
    </div>
    <div id="container_2">
        <div class="col_v2"></div>
        <div class="col_v2"></div>
        <div class="col_v2"></div>
    </div>
    <div id="container_3b">
        <div class="col_v3b"></div>
        <div class="col_v3"></div>
    </div>
  <div id="container_1">
      <div class="col_v1"></div>
      <div class="col_v1"></div>
      <div class="col_v1"></div>
      <div class="col_v1"></div>
  </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    useStore().commit('setBarText', 'Mis Clientes');
</script>

<style>
#header, #header2, #container_1, #container_2, #container_3, #container_3b, #container_4, #container_44 { 
    background: rgb(95, 190, 202);
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    /* margin: 1px 5px 1px 5px; */
    border: 1px solid #000;
    height: auto;
}
#container_1, #container_2, #container_3, #container_3b, #container_4, #container_44, #header, #header2 {
    justify-content:space-between;
    border-width: 0px;
    background:none;
}
.col {
    flex:1;
    background: #90CAF9;
    margin: 5px;
    height:100px;
    min-width: 300px;
    border-radius: 15px;
}
.col_v1 {
    flex:1;
    background: #FFD54F;
    height:300px;
    margin: 5px;
    min-width: 300px;
    border-radius: 15px;
}
.col_v2 {
    flex:1;
    margin: 5px;
    background: #00BCD4;
    height:400px;
    min-width: 300px;
    border-radius: 15px;
}
.col_v3 {
    flex:0.65;
    margin: 5px;
    background: #7986CB;
    height:450px;
    min-width: 300px;
    border-radius: 15px;
}
.col_v3b {
    flex:0.35;
    margin: 5px;
    background: #7986CB;
    height:450px;
    min-width: 300px;
    border-radius: 15px;
}
.col_4 {
    flex:1;
    background: #29B6F6;
    margin: 5px;
    min-width: 300px;
    height:500px;
    border-radius: 15px;
}

@media (max-width:1300px) {
    .col_v3, .col_v3b {
        flex:1;
    }
}
</style>