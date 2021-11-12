<template>
    <button class="horizontalSidebar" @click="mostrarOcultar" id="btnMenuHorizaontal" >
        <i class="material-icons" style="color:#FFF;">{{ store.state.iconoBtnMenu }}</i>
    </button>
    <aside :style="{'left':'-' + store.state.anchoBar + 'px' }" id="sidebar" class="horizontalSidebar">
        <ul id="sidelist">
            <li class="listItem" style="background:#00897b!important; border-top-right-radius:20px; height:60px!important;">
                <div>
                    <div style="height:45px!important; border-bottom-right-radius:20px; display: flex; aling-items: center!important; justify-content: center!important;">
                        <p id="titleMenu" style="margin-top:0px!important; padding-top:19px!important; display:inline-block; height:20px; font-size:18px;">MENÚ</p>
                    </div>
                </div>
                <a style="width:0px; height:0px; margin:0px;"></a>
            </li>

            <li :to="i.to" v-for="(i,index) in lista" :key="i.id" @click="methods.setColor(index + 1)" class="listItem">
                <router-link :to="i.to" style="text-decoration: none; color: none;">
                <div style="height:45px!important; width:25px!important; background:#00897b; float:left;">
                    <div class="colaItem" style="height:45px!important; width:20px!important; background:#00897b; float:right; border-top-left-radius:20px; border-bottom-left-radius: 20px;"></div>
                </div>
                <i class="material-icons notranslate" style="z-index:-1!important; font-size:24px; float:left!important; margin-top:10px;margin-left:0px; margin-right:10px!important;">{{ i.ico }}</i>
                <p style=" padding-top:14px; height:40px!important; margin: 0px!important; margin-left:15px!important; font-size:15px; background:transparent;!important;"> {{ i.nom }}</p>
                </router-link>
            </li>

            <li class="listItem no-clikcable" style="background:#00897b!important;">
                <div>
                    <div>
                    </div>
                </div>
                <a style="width:0px; height:0px; margin:0px;"></a>
            </li>
        </ul>
        
        <div class="asideBlock">
            <button class="btnCerrarSession" @click="logOut">Cerrar sessión</button>
        </div>
    </aside> 
</template>

<script setup>
    import { onMounted, reactive, ref } from 'vue';
    import { useStore } from 'vuex';
    import methods from '../assets/js/methods';
    import {useRouter} from 'vue-router'

    const router = useRouter();
    const store = useStore();

    let anchobar = ref(store.state.anchoBar);
    const lista = reactive(store.state.listaSideBar);

    const mostrarOcultar = () => {
        if(store.state.anchoBar === 220){
            store.commit("setAnchoBar", 0);
            store.commit("setAltoBar", 0);
            document.getElementById('derecha').style.width = '220px';
        }else{
            store.commit("setAnchoBar", 220);
            store.commit("setAltoBar", 300);
            document.getElementById('derecha').style.width = '0px';
        }
    }
    
   const logOut = () => {
      localStorage.removeItem('token');
      router.push('/login');
   } 
    
    onMounted(() => { methods.setColor(1) })
</script>

<style>
.asideBlock {
    height:100%;
    width:100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding-bottom: 10px;
    background:#00897b;
}
.material-icons {
    background: transparent!important;
}
.liCurvaAntes {
    height:30px!important;
    width:20px!important;
    position: absolute;
    top:-5px;
    right:0px!important;
    background: #00897b;
    border-bottom-right-radius: 20px;
}
.liCurvaDespues {
    height:30px!important;
    width:20px!important;
    position: absolute;
    bottom:-5px;
    right:0px!important;
    background:#00897b;
    border-top-right-radius: 20px;
}
#sidelist, #lista2 {
    margin: 0px;
    color:rgb(240, 255, 255);
    text-align: left;
    list-style:none;
    padding: 0px;
    background: transparent;
}
#sidelist > li, #lista2 > li {
    z-index:3!important;
    user-select: none;
    cursor: pointer;
    height:45px;
    vertical-align:middle!important;
}
#sidelist > li:hover, #sidelist > li > a:hover {
    color: #212121!important;
}
#sidebar{
    width: 220px;
    height: 100%;
    position: absolute;
    top:0; 
    left:0;
    transition: .4s;
    display: flex;
    flex-direction: column;
}
#titleMenu{
    color:rgb(240, 255, 255);
    background-color: #00897b;
    margin:0px;
    padding-top:15px;
    height:50px;
}
#btnMenuHorizaontal{
    height:45px;
    width:40px;
    padding-left: 3px!important;
    border-top-right-radius:25px;
    border-bottom-right-radius:25px;
    position: absolute;
    top: 7px;
    left: 0px;
    background:#10508a;
    z-index: 3;
    border: 0px;
}
a { 
    color: #FFF;
}
#lista2, #sideBarList2, #sideBarComplete{
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
.btnCerrarSession {
    width: 120px;
    height: 36px;
    border: 0px;
    border-radius: 7px;
    background: #263238;
    cursor: pointer;
    color: #FFF;
    
}
.btnCerrarSession:hover {
    background: #03e9f4;
    color: #FFF;
    /* border-radius: 7px; */
    box-shadow: 0 0 5px #03e9f4,
                0 0 25px #03e9f4,
                0 0 50px #03e9f4,
                0 0 100px #03e9f4;
}
</style>