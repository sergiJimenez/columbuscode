<template>
    <div class="skillsLayout">
        <span alt="Skills">
            <p class="S0">S</p><p class="K">K</p><p class="I">I</p><p class="L0">L</p><p class="L1">L</p><p class="S1">S</p>
        </span>
        <div class="contentCodeLayout">
            <div class="contentCodeLayout-row-1">
                <div class="HTML">
                    <img class="htmlLogo" src="../assets/skills/HTML.png" alt="HTML image">
                    <p class="HTMLtext" alt="Html">HTML</p>
                </div>
                <div class="JS">
                    <img class="JSLogo" src="../assets/skills/JS.png" alt="JavaScript image">
                    <p class="JStext" alt="Javascript">JavaScript</p>
                </div>
                <div class="CSS">
                    <img class="CSSLogo" src="../assets/skills/css.png" alt="CSS image">
                    <p class="CSStext" alt="CSS">CSS</p>
                </div>
            </div>
            <div class="contentCodeLayout-row-2">
                <div class="JAVA">
                    <img class="JavaLogo" src="../assets/skills/Java.png" alt="Java image">
                    <p class="JAVAtext" alt="Java">Java</p>
                </div>
                <div class="VUE">
                    <img class="VUELogo" src="../assets/skills/VUE.png" alt="VUE image">
                    <p class="VUEtext" alt="Vue">VUE</p>
                </div>
                <div class="MYSQL">
                    <img class="MySQLLogo" src="../assets/skills/mysql.png" alt="MySQL image">
                    <p class="MYSQLtext" alt="Mysql">MySQL</p>
                </div>
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

    .skillsLayout {
        display: flex;
        width: 1920px;
        height: 1080px;
        background-color: #111111;
        color: #FFFFFF;
        /* overflow-x: hidden; */
    }

    .S0 {
        position: absolute;
        left: 487px;
        top: 3121px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .K {
        position: absolute;
        left: 655px;
        top: 3121px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .I {
        position: absolute;
        left: 851px;
        top: 3121px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .L0 {
        position: absolute;
        left: 910px;
        top: 3121px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .L1 {
        position: absolute;
        left: 1070px;
        top: 3121px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .S1 {
        position: absolute;
        left: 1241px;
        top: 3121px;
        font-family: "Adamas";
        font-size: 240px;
    }

    .contentCodeLayout {
        display: flex;
        flex-direction: column;
        margin-top: 540px;
        font-family: "SF-Pro-Ultralight";
        font-size: 40px;
        letter-spacing: -2px;
        font-weight: normal;
    }

    .contentCodeLayout-row-1 {
        display: flex;
        gap: 331px;
        margin-left: 440px; /* Provisional*/
        margin-top: 100px;
    }

    .htmlLogo {
        position: absolute;
        width: 213px;
        height: 213px;
        top: 3700px;
        left: 374px;
    }

    .JSLogo {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 3710px;
        left: 856px;
    }

    .CSSLogo {
        position: absolute;
        width: 195px;
        height: 195px;
        top: 3711px;
        left: 1310px;
    }

    .contentCodeLayout-row-2 {
        display: flex;
        gap: 403px;
        margin-top: 140px;
        margin-left: 440px; /* Provisional*/
    }

    .JavaLogo {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 3990px;
        left: 380px;
    }

    .VUELogo {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 3990px;
        left: 856px;
    }

    .MySQLLogo {
        position: absolute;
        width: 195px;
        height: 195px;
        top: 3990px;
        left: 1310px;
    }

    .MYSQLtext {
        margin-left: -35px;
    }
</style>