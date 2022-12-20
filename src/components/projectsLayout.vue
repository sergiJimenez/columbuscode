<template>
    <div class="projectsLayout">
        <div alt="titleProjects">
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
                    <img class="gameImage" src="../assets/projects/gameCircle.png" alt="Proyect game image">
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
    
    .projectsLayout {
        display: flex;
        width: 1920px;
        height: 1080px;
        background-color: #111111;
        color: #FFFFFF;
    }

    /* .titleProjects {

    } */

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

    /* .contentProjects {

    } */

    /* .project1 {

    } */

    .circleProjects1 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 295px;
        border-radius:200px;
    }

    /* .gameImage {

    } */

    /* .titleProject1 {

    } */

    /* .project2 {

    } */
    
    .circleProjects2 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 1280px;
        border-radius:200px;
    }

    /* .titleProject2 {

    } */
</style>