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
                <!-- <div class="circleProjects1">
                    <img class="gameImage" src="../assets/projects/gameCircle.png" alt="Game image">
                </div> -->
                <div class="titleProject1" alt="Falcon Project">
                    Falcon Project
                </div>
            </div>
            <div class="project2">
                <!-- <div class="circleProjects2">
                    <img class="">
                </div> -->
                <div class="titleProject2" alt="Gurmann's Adventure">
                    Gurmann's Adventure
                </div>
            </div>
            <div class="project3">
                <div class="titleProject3">
                    WhereToEatIn
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    /*Font families*/
    @font-face {
        font-family: 'Adamas';
        src: local('Adamas'), url('../../fonts/Adamas-Regular.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: 'SF-Pro-Ultralight';
        src: local('SF-Pro-Ultralight'), url('../../fonts/SF-Pro-Text-Ultralight.otf') format('opentype');
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
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

    .titleProject1 {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: center;
        margin-top: 2%;
        letter-spacing: -2px;
    }

    .project2 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    
    /* .circleProjects2 {
        position: absolute;
        width:345px;
        height:345px;
        margin-top: 480px;
        margin-left: 1280px;
        border-radius:200px;
    } */

    .titleProject2 {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: center;
        margin-top: 2%;
        letter-spacing: -2px;
    }

    .project3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .titleProject3 {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        display: flex;
        width: 100%;
        text-align: center;
        justify-content: center;
        margin-top: 2%;
        letter-spacing: -2px;
    }

    .P:hover, .R:hover, .O:hover, .J:hover, .E:hover, .C:hover, .T:hover, .S:hover {
        color: #ff0000;
    }

    /*Responsive conditions*/
    /*Mobiles sizes S, M and L. Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {

    }

    /*Standard tablet's. Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {

    }

    /*Big tablet's and small laptop's/screen's. Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {

    }

    /*Standard laptop's/screen's. Since 1025px to 1440px*/
    @media (min-width: 1025px) and (max-width: 1440px) {

    }

    /*Big laptop's/screen's. Since 1441px to 2560px*/
    @media (min-width: 1441px) and (max-width: 2560px) {
        
    }
</style>