<template>
    <div class="projectsLayout">
        <span alt="Projects">
            <p class="P">P</p><p class="R">R</p><p class="O">O</p><p class="J">J</p><p class="E">E</p><p class="C">C</p><p class="T">T</p><p class="S">S</p>
        </span>
        <div class="contentProjectsLayout-row1">
            <div class="circleProjects1" @click="showModal = true">
                <img class="gameProyect" src="../assets/projects/gameCircle.png" alt="Proyect game image">
            </div>
            <div class="circleProjects2">
                <a href="https://drive.google.com/file/d/1p749ypm_JggZg9olWOAOhgyFse9Z6f-k/view?usp=sharing" target="_blank">
                    <img class="ManualIdentidadCorporativa" src="../../public/white.png" alt="Corporate identity manual image">
                </a>
            </div>
            <div class="contentProject-row-0">
                <p class="titleProject1" alt="Gurmann Adventure's">Gurmann Adventure's</p>
                <p class="titleProject2" alt="Corporate identity manual">Corporate Identity Manual</p>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <Teleport to="#modal">
        <Transition name="modal">
            <div class="modal-bg" v-if="showModal">
                <div class="modal">
                    <video id="videoInteractivo" ref="video" @click="play()" autobuffer controls>
                        <source id="mp4" src="../assets/VideoInteractivo.mp4" type="video/mp4"/>
                    </video>
                    <div class="buttonManage">
                        <!-- <button class="modal-play-button" @click="play()"><img src="../../public/play-solid.svg"></button> -->
                        <button class="modal-pause-button" @click="pause()"><img src="../../public/pause-solid.svg"></button>
                        <button class="modal-inicio-button" @click="inicio()">Inicio</button>
                        <button class="modal-controles-button" @click="controles()">Controles</button>
                        <button class="modal-puntuacion-button" @click="puntuacion()">Puntuación</button>
                        <button class="modal-laMuerte-button" @click="laMuerte()">La muerte</button>
                    </div>
                    <button class="modal-close-button" @click="showModal = false">
                        <img class="modal-close-button" src="../../public/x-solid.svg">
                    </button>
                </div>
            </div>
        </Transition>
    </Teleport>
    
</template>

<script>
export default {
    name: 'projectsLayout',
    data (){
        return {
            showModal: false,
        }
    },
    methods: {
        play() {
            let requestData = document.getElementById("videoInteractivo");
            requestData.play();
        },
        pause() {
            let requestData = document.getElementById("videoInteractivo");
            requestData.pause();
        },
        inicio() {
            let requestData = document.getElementById("videoInteractivo");
            requestData.currentTime = 0;
            requestData.play();
        },
        controles() {
            let requestData = document.getElementById("videoInteractivo");
            requestData.currentTime = 12;
            requestData.play();
        },
        puntuacion() {
            let requestData = document.getElementById("videoInteractivo");
            requestData.currentTime = 22;
            requestData.play();
        },
        laMuerte() {
            let requestData = document.getElementById("videoInteractivo");
            requestData.currentTime = 39;
            requestData.play();
        }
    }
}
</script>

<style scoped>
    .contentProject-row-0 {
        display: flex;
        flex-direction: row;
        margin-top: 810px;
        margin-left: 284px;
        font-family: "SF-Pro-Ultralight";
        font-size: 40px;
        letter-spacing: -2px;
        font-weight: normal;
        gap: 598px;
    }

    .modal-bg {
        overflow-y: hidden;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal {
        overflow-y: hidden;
        position: relative;
        background: #FFFFFF;
        padding: 0px 100px;
        border-radius: 25px;
        box-shadow: 0px 10px 5px 2px rgba(0, 0, 0, 0.1);
    }

    .modal-close-button {
        position: absolute;
        height: 30px;
        width: 40px;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        cursor: pointer; 
    }

    .modal-pause-button {
        position: absolute;
        height: 30px;
        width: 40px;
        top: 726px;
        right: 620px;
        background: none;
        border: none;
        cursor: pointer; 
    }

    .modal-inicio-button {
        position: absolute;
        height: 30px;
        width: 40px;
        top: 729px;
        right: 1056px;
        background: none;
        border: none;
        cursor: pointer;
        font-family: "SF-Pro-Ultralight";
        font-size: 30px;
        letter-spacing: -2px;
        color: #111111;
    }

    .modal-controles-button {
        position: absolute;
        height: 30px;
        width: 40px;
        top: 729px;
        right: 841px;
        background: none;
        border: none;
        cursor: pointer;
        font-family: "SF-Pro-Ultralight";
        font-size: 30px;
        letter-spacing: -2px;
        color: #111111;
    }

    .modal-puntuacion-button {
        position: absolute;
        height: 30px;
        width: 40px;
        top: 729px;
        right: 480px;
        background: none;
        border: none;
        cursor: pointer;
        font-family: "SF-Pro-Ultralight";
        font-size: 30px;
        letter-spacing: -2px;
        color: #111111;
    }

    .modal-laMuerte-button {
        position: absolute;
        height: 30px;
        width: 170px;
        top: 729px;
        right: 145px;
        background: none;
        border: none;
        cursor: pointer;
        font-family: "SF-Pro-Ultralight";
        font-size: 30px;
        letter-spacing: -2px;
        color: #111111;
    }

    .modal-enter-active,
    .modal-leave-active {
        transition: all 0.15s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
        transform: scale(1.1);
    }

    video::-webkit-media-controls {
        display: none;
    }

    #videoInteractivo {
        width: 1080px;
        height: 800px;
    }

    @font-face {
        font-family: 'Adamas';
        src: local('Adamas'), url('../fonts/Adamas-Regular.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }
    
    .projectsLayout {
        display: flex;
        width: 1920px;
        height: 1080px;
        background-color: #111111;
        color: #FFFFFF;
    }

    .P {
        position: absolute;
        left: 287px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .R {
        position: absolute;
        left: 467px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .O {
        position: absolute;
        left: 654px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .J {
        position: absolute;
        left: 798px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .E {
        position: absolute;
        left: 947px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .C {
        position: absolute;
        left: 1100px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .T {
        position: absolute;
        left: 1293px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .S {
        position: absolute;
        left: 1441px;
        top: 4176px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .circleProjects1 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 295px;
        border-radius:200px;
    }

    .gameProyect {
        position: absolute;
        width:345px;
        height:345px;
        border-radius:200px;
        cursor: pointer;
    }
    
    .circleProjects2 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 1280px;
        border-radius:200px;
    }

    .ManualIdentidadCorporativa {
        position: absolute;
        width:450px;
        height:450px;
        margin-top: -53px;
        margin-left: -46px;
        cursor: pointer;
    }
</style>