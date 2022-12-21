<template>
    <div class="projectsLayout">
        <div class="titleProjects">
            <div class="P">P</div>
            <div class="R">R</div>
            <div class="O">O</div>
            <div class="J">J</div>
            <div class="E">E</div>
            <div class="C">C</div>
            <div class="T">T</div>
            <div class="S">S</div>
        </div>
        <div class="contentProjects">
            <div class="project1">
                <div class="circleProjects1">
                    <img class="gameImage" src="../assets/projects/gameCircle.png" alt="Game image">
                </div>
                <p class="titleProject1" alt="Gurmann Adventure's">
                    Gurmann Adventure's
                </p>
            </div>
            <div class="project2">
                <div class="circleProjects2">
                    <img class="">
                </div>
            </div>
            <p class="titleProject2" alt="Corporate identity manual">
                Corporate Identity Manual
            </p>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    /*Font families*/
    @font-face {
        font-family: 'Adamas';
        src: local('Adamas'), url('../fonts/Adamas-Regular.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: 'SF-Pro-Ultralight';
        src: local('SF-Pro-Ultralight'), url('../fonts/SF-Pro-Text-Ultralight.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: 'SF-Pro-UltralightItalic';
        src: local('SF-Pro-UltralightItalic'), url('../fonts/SF-Pro-Text-UltralightItalic.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    /*Main conditions to the maximum resolution*/
    .projectsLayout {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #111111;
    }

    .titleProjects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #FFFFFF;
        margin-top: 3%;
        margin-bottom: auto;
    }

    .P {
        font-family: "Adamas";
        font-size: 12.5vw;
        transition: 650ms;
    }

    .R {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.2%;
        transition: 650ms;
    }

    .O {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.3%;
        transition: 650ms;
    }

    .J {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2.7%;
        transition: 650ms;
    }

    .E {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2.2%;
        transition: 650ms;
    }

    .C {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2.2%;
        transition: 650ms;
    }

    .T {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.7%;
        transition: 650ms;
    }

    .S {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.2%;
        transition: 650ms;
    }

    .P:hover, .R:hover, .O:hover, .J:hover, .E:hover, .C:hover, .T:hover, .S:hover {
        color: #ff0000;
    }

    .contentProjects {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #FFFFFF;
        margin-top: 3%;
        margin-bottom: auto;
    }

    .project1 {

    }

    /* .circleProjects1 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 295px;
        border-radius:200px;
    } */

    /* .gameImage {

    } */

    /* .titleProject1 {

    } */

    /* .project2 {

    } */
    
    /* .circleProjects2 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 1280px;
        border-radius:200px;
    } */

    /* .titleProject2 {

    } */
</style>