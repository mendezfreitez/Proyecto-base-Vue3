<template>
    <button @click="mostrarOcultar2" id="btnMenu">
        <i class="material-icons" style="color:#FFF;">{{ store.state.iconoBtnMenu }}</i>
    </button>
    <div :style="{'top':'-' + store.state.altoBar + 'px' }" id="sideBarComplete">

        <div id="sideBarList2">
            <ul id="lista2">
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

                <li class="listItem no-clikcable" style="background:#00897b!important; height:15px; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px!important;">
                    <div>
                        <div>
                        </div>
                    </div>
                    <a style="width:0px; height:0px; margin:0px;"></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import {ref, reactive} from 'vue';
    import {useStore} from 'vuex';
    import methods from '../assets/js/methods';

    let toggleAncho = ref(true);
    const store = useStore();
    const lista = reactive(store.state.listaSideBar);

    const mostrarOcultar2 = () => {
        if(store.state.altoBar === 0){
            store.commit("setAltoBar", 300);
            store.commit("setAnchoBar", 220);
            document.getElementById('derecha').style.width = '0px';
        }else{
            store.commit("setAltoBar", 0);
            store.commit("setAnchoBar", 0);
            document.getElementById('derecha').style.width = '220px';
        }
    }
</script>

<style>
#sideBarComplete{
    display:none;
    /* transition-delay: 0.3s; */
    transition:ease-in-out 0.4s;
}
#btnMenu {
    display: none;
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
#lista2 > li:hover, #lista2 > li > a:hover {
    color: #212121!important;
}
</style>