<template>
  <div style="display: flex; flex-direction: row; height:100%!important;">
    <!-- <ButtonSideBar /> -->
    <div v-if="store.state.visibleBar" id="derecha">
      <SideBar />
    </div>

    <SideBarComplete />

    <div id="principal">
      <TopBar />
      <router-view />
      <FooterBar />
    </div>
  </div>
</template>

<script setup>
  import SideBar from './components/sidebar.vue'
  import SideBarComplete from './components/sideBar2'
  import TopBar from './components/topBar.vue'
  // import ButtonSideBar from './components/buttonSideBar.vue'
  import FooterBar from './components/footer.vue'
  import {useStore} from 'vuex'
  const store = useStore();
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
  padding: 0px 40px 0px 50px;
  background: transparent;
  height: 100%;
  flex: 1;
  overflow-y:scroll;
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
  /* #principal{
    padding: 0px 20px 0px 30px;
  } */
  #derecha, #btnMenu{
    display: none;
  }
  #btnMenu {
    display: block;
  }
  #sideBarComplete{
    display: flex!important;
    flex-direction: column;
    position:fixed;
    width: auto;
    left: 0px;
    right: 0px;
    top:0px;
    padding: 0px 20px 10px 20px;
    height: auto;
  }
  #sidelist2{
    padding-bottom: 10px;
    background: #00897b;
  }
  .listItem:last-child{
    border-radius: 0px 0px 15px 15px!important;
  }
}
</style>
