<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="mainColumbusTitle" id="theBeggining">
        <div class="divContact">
            <a href="#theEnd" class="contactMe" alt="Contact">Contact</a>
        </div>
        <div class="divImage">
            <img class="imageLogo" src="../assets/logo/white.png" alt="Columbus logotype">
        </div>
        <!-- <div class="divAnimation"> -->
            <!-- <p class="scrollDown" alt="Scroll down">Scroll down</p>
            <div class="verticalLine"></div>
            <div class="circle"></div> -->
        <!-- </div> -->
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
        background-color: #111111;
    }

    .divContact {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 1.56%;
    }

    .contactMe {
        color: #FF0000;
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
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
        letter-spacing: -2px;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 1000ms ease;
    }

    .divImage {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .imageLogo {
        width: 14.8%;
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

    /*Circle animation*/
    @keyframes moveDown { /* 72px of movement */
        0%, 100% {
            bottom: 152px;
        }
        50% {
            bottom: 214px;
        }
    }

    /*Contact Me conditions*/
    /*Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {
        .divContact{
            margin-top: 5.56%;
            justify-content: center;
        }
        
        .contactMe {
            font-size: 10.35vw;
        }
    }

    /*Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 5.35vw;
        }
    }

    /*Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 3.85vw;
        }
    }

    /*Since 1025px to 1440px*/
    @media (min-width: 1025px) and (max-width: 1440px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 2.85vw;
        }
    }

    /*Since 1441px to 2560px*/
    @media (min-width: 1441px) and (max-width: 2560px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 2.35vw;
        }
    }
    /*Contact Me conditions*/

    /*Logo conditions*/
    /*Since 280px to 374px*/
    @media (min-width: 280px) and (max-width: 376px) {
        .imageLogo {
            width: 72.6%;
            margin-top: -34%;
        }
    }

    @media (min-width: 376px) and (max-width: 426px) {
        .imageLogo {
            width: 72.6%;
            margin-top: -34%;
        }
    }
    /*Logo conditions*/
</style>