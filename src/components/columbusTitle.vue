<template>
    <meta name="columbusTitle" content="width=device-width, initial-scale=1.0">
    <div class="mainColumbusTitle" id="theBeggining">
        <a href="#theEnd" class="contactMe" alt="Contact">Contact</a>
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

    .mainColumbusTitle {
        width: 100%;
        height: 100%;
    }

    .contactMe {
        position: absolute;
        width: 100%;
        margin: 1.56% 0% 0% 86.58%;
        color: #FF0000;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        text-decoration: none;
        transition: clip-path 1000ms ease;
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
        transition: clip-path 1000ms ease;
    }

    .imageLogo {
        position: absolute;
        width: 284px;
        height: 284px;
        margin: 20% 0% 0% 43%;
        /* top: 355px; */
        /* left: 824px; */
        transition: transform 2.5s;
    }

    .imageLogo:hover {
        transform: scale(1.5);
    }

    .scrollDown{
        position: absolute;
        color: #FFFFFF;
        /* width: 100%; */
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

    /* iPhone 12 Pro Dimensions */
    /* @media only screen and (min-width: 390px) {
        .mainColumbusTitle {
            width: 100%;
            height: 100%;
            background-color: #111111;
        }
    } */
</style>