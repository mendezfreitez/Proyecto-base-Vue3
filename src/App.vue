<template>
  <div style="display: flex; flex-direction: row; height:100%!important;">
    <div id="derecha">
      <SideBar />
    </div>
    <div id="principal">
      <TopBar />
      <router-view />
      <FooterBar />
    </div>
  </div>
</template>

<script setup>
  import SideBar from './components/sidebar.vue'
  import TopBar from './components/topBar.vue'
  import FooterBar from './components/footer.vue'
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#derecha{
  background: transparent;
  height: 100%!important;
  width: 220px;
  transition: 0.5s;
}
#principal{
  padding: 0px 100px;
  background: transparent;
  height: 100%;
  flex: 1;
  overflow-y:scroll;
  /* transition:1s; */
  transition-delay: 0.5s;
  transition:ease-in-out 0.8s;
}
html, #app, body{
  margin: 0%;
  height: 100%!important;
  width: 100%!important;
  background:transparent;
}

@media (max-width:900px) {
  #principal{
    padding: 0px 50px;
  }
}
</style>
