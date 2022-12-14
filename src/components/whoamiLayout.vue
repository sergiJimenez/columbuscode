<template>
    <div class="whoAmILayout">
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
        <div class="contentInformationWhoIAm">
            <div class="explainWhoAmI" alt="Hi! I'm a web developer based in Barcelona focused on coding people's dreams.">
                <b class="aboutMe" alt="About me">About me</b>
                 - Hi! I'm a web developer based in Barcelona focused on coding people's dreams.
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
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

    .whoAmILayout {
        display: flex;
        width: 100vw;
        height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #111111;
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
    }
    
    .U1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .L1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .L1-1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .S1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .T1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .A1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .C1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .K1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .developerDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #ff0000;
    }

    .D2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .E2-0 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .V2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .E2-1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .L2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .O2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .P2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .E2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .R2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .contentInformationWhoIAm {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .aboutMe {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        color: #FFFFFF;
        font-weight: normal;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
    }

    .explainWhoAmI {
        font-family: "SF-Pro-UltralightItalic";
        font-size: 2.35vw;
        letter-spacing: -2px;
        color: #FFFFFF;
    }
</style>