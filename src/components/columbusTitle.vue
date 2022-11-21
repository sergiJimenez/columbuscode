<template>
    <div class="mainColumbusTitle">
        <a href="#fastWay" class="contactMe" alt="Contact">Contact</a>
        <img class="imageLogo" src="../assets/logo/white.png" alt="Columbus logotype">
        <p class="scrollDown" alt="Scroll down">Scroll down</p>
        <div class="verticalLine"></div>
        <div class="circle"></div>
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
        src: local('SF-Pro-Ultralight'), url('../fonts/SF-Pro-Text-UltralightItalic.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    .mainColumbusTitle{
        display: flex;
        width: 1920px;
        height: 1080px;
        background-color: #111111;
        color: #FFFFFF;
    }

    .contactMe {
        position: absolute;
        left: 1662px;
        top: 30px;
        color: #FF0000;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        text-decoration: none;
        transition: clip-path 275ms ease;
    }

    .contactMe:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .contactMe::before {
        position: absolute;
        content: attr(alt);
        color: #FFFFFF;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 275ms ease;
    }

    .imageLogo {
        position: absolute;
        width: 284px;
        height: 284px;
        top: 355px;
        left: 824px;
    }

    .scrollDown{
        position: absolute;
        left: 850px;
        top: 703px;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
    }

    .verticalLine{  
        position: absolute;
        width: 2px;
        height:76px;
        left: 960px;
        bottom: 153px;
        background-color: #FFFFFF;
    }

    .circle{
        position: absolute;
        width:16px;
        height:16px;
        left: 953px;
        bottom: 152px;
        background:#FFFFFF;
        border-radius:50px;
        animation: moveDown 6s ease-in-out alternate infinite;
    }

    @keyframes moveDown { /* 72px of movement */
        0%, 100% {
            bottom: 152px;
        }
        50% {
            bottom: 214px;
        }
    }
</style>