<template>
    <div class="whoAmILayout">
        <div class="fullstackDeveloperDiv">
            <div class="fullstackDiv" alt="Fullstack">
                <div class="F1">F</div>
                <div class="U1">U</div>
                <div class="L1">L</div>
                <div class="L1-1">L</div>
                <div class="S1">S</div>
                <div class="T1">T</div>
                <div class="A1">A</div>
                <div class="C1">C</div>
                <div class="K1">K</div>
            </div>
            <div class="developerDiv" alt="Developer">
                <div class="D2">D</div>
                <div class="E2-0">E</div>
                <div class="V2">V</div>
                <div class="E2-1">E</div>
                <div class="L2">L</div>
                <div class="O2">O</div>
                <div class="P2">P</div>
                <div class="E2">E</div>
                <div class="R2">R</div>
            </div>
        </div>
        <div class="contentInformationWhoIAm" alt="Hello there! I'm a web developer based in Barcelona focused on coding people's dreams. Working with technologies like VueJS and ReactJS, researching and implementing the new ones. Aficionated to create video games in Unity with a huge story behind them but always prioritizing my second passion, the acoustic area.">
            Hello there user!<br>
            I'm a web developer based in Barcelona focused on coding people's dreams.<br>
            Working with technologies like VueJS and ReactJS, researching and implementing the new ones. Aficionated to create video games in Unity with a huge story behind them but always prioritizing my second passion, the acoustic area.
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
    .whoAmILayout {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #111111;
    }

    .fullstackDeveloperDiv {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .fullstackDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #ff0000;
    }

    .F1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        transition: 650ms;
    }
    
    .U1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.9%;
        transition: 650ms;
    }

    .L1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.6%;
        transition: 650ms;
    }

    .L1-1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.1%;
        transition: 650ms;
    }

    .S1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.5%;
        transition: 650ms;
    }

    .T1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.3%;
        transition: 650ms;
    }

    .A1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2.5%;
        transition: 650ms;
    }

    .C1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2%;
        transition: 650ms;
    }

    .K1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.3%;
        transition: 650ms;
    }

    .developerDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #ff0000;
        margin-top: -2.5%;
    }

    .D2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        transition: 650ms;
    }

    .E2-0 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.5%;
        transition: 650ms;
    }

    .V2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.1%;
        transition: 650ms;
    }

    .E2-1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2%;
        transition: 650ms;
    }

    .L2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.8%;
        transition: 650ms;
    }

    .O2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.8%;
        transition: 650ms;
    }

    .P2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.7%;
        transition: 650ms;
    }

    .E2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.5%;
        transition: 650ms;
    }

    .R2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.8%;
        transition: 650ms;
    }

    .contentInformationWhoIAm {
        display: flex;
        width: 80%;
        text-align: center;
        margin-top: 2%;
        justify-content: center;
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        color: #FFFFFF;
    }

    .F1:hover, .U1:hover, .L1:hover, .L1-1:hover, .S1:hover, .T1:hover, .A1:hover, .C1:hover, .K1:hover, .D2:hover, .E2-0:hover, .V2:hover, .E2-1:hover, .L2:hover, .O2:hover, .P2:hover, .E2:hover, .R2:hover {
        color: #FFFFFF;
    }

    /*Responsive conditions*/
    /*Mobiles sizes S, M and L. Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {
        .whoAmILayout {
            height: 200vh;
        }

        .contentInformationWhoIAm {
            font-size: 10.35vw;
            width: 90%;
            margin-top: auto;
            margin-bottom: 20%;
        }
    }

    /*Standard tablet's. Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {
        .contentInformationWhoIAm {
            font-size: 5.35vw;
            width: 90%;
            margin-top: auto;
            margin-bottom: 10%;
        }
    }

    /*Big tablet's and small laptop's/screen's. Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .contentInformationWhoIAm {
            font-size: 5.35vw;
            width: 90%;
            margin-top: auto;
            margin-bottom: 10%;
        }
    }

    /*Standard laptop's/screen's. Since 1025px to 1440px*/
    @media (min-width: 1025px) and (max-width: 1440px) {
        .contentInformationWhoIAm {
            font-size: 2.85vw;
            width: 90%;
            margin-top: auto;
            margin-bottom: 5%;
        }
    }
</style>