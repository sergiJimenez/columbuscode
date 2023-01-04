<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="mainColumbusTitle" id="theBeggining">
        <div class="divContact" ref="contactButton">
            <a href="#theEnd" class="contactMe" alt="Contact">Contact</a>
        </div>
        <div class="divImage" ref="imageLogo">
            <img class="imageLogo" src="../../assets/logo/white.png" alt="Columbus logotype">
        </div>
        <div class="divAnimation">
            <p class="scrollDown" ref="scrollDownText" alt="Scroll down">Scroll down</p>
            <!-- <div class="lineCircleDiv" ref="animationLineCircle">
                <div class="verticalLine" alt="Vertical line"></div>
                <div class="circle" alt="Circle"></div>
            </div> -->
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

    @font-face {
        font-family: 'SF-Pro-UltralightItalic';
        src: local('SF-Pro-Ultralight'), url('../../fonts/SF-Pro-Text-UltralightItalic.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    /*Main conditions to the maximum resolution*/
    .mainColumbusTitle {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-color: #111111;
        animation: fadeIn 2s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .divContact {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .contactMe {
        color: #FF0000;
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        text-decoration: none;
        transition: clip-path 1000ms ease;
        transition: 650ms; /* Resize */
        margin-top: 2.56%;
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
        min-height: 75vh;
    }

    .imageLogo {
        width: 14.8%;
        transition: 650ms; /* Resize */
        transition: transform 2.5s;
    }

    .imageLogo:hover {
        transform: scale(1.5);
    }

    .divAnimation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .scrollDown{
        color: #FFFFFF;
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        transition: 650ms; /* Resize */
    }

    .lineCircleDiv {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .verticalLine {  
        width: 2px;
        height: 76px;
        background-color: #FFFFFF;
        transition: 650ms; /* Resize */
    }

    .circle {
        position: absolute;
        background: #FFFFFF;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        animation: moveDown 6s ease-in-out alternate infinite;
        transition: 650ms; /* Resize */
    }

    /*Circle animation*/
    /* @keyframes moveDown {
        0%, 100% {
            bottom: 8%;
        }
        50% {
            bottom: 15%;
        }
    } */

    /*Responsive conditions*/
    /*Mobiles sizes S, M and L. Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {
        .divContact{
            justify-content: center;
        }
        
        .contactMe {
            margin-top: 5.56%;
            font-size: 10.35vw;
        }

        .imageLogo {
            width: 72.6%;
        }

        .divAnimation {
            margin-top: -35%;
        }

        .scrollDown {
            font-size: 10.35vw;
        }

        /*Responsive circle animation*/
        /* @keyframes moveDown {
            0%, 100% {
                bottom: 4vw;
            }
            50% {
                bottom: 25vw;
            }
        } */
    }

    /*Standard tablet's. Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 5.35vw;
        }

        .imageLogo {
            width: 52.6%;
        }

        .divAnimation {
            margin-top: -15%;
        }

        .scrollDown {
            font-size: 5.35vw;
        }
    }

    /*Big tablet's and small laptop's/screen's. Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 5.35vw;
        }

        .imageLogo {
            width: 42.6%;
        }

        .divAnimation {
            margin-top: -5%;
        }

        .scrollDown {
            font-size: 5.35vw;
            /* Reference to change: font-size: 3.85vw; */
        }
    }

    /*Standard laptop's/screen's. Since 1025px to 1440px*/
    @media (min-width: 1025px) and (max-width: 1440px) {
        .divContact {
            margin-right: 3.44%;
        }
        
        .contactMe {
            font-size: 2.85vw;
        }

        .imageLogo {
            width: 27.6%;
        }

        .divAnimation {
            margin-top: -5%;
        }

        .scrollDown {
            font-size: 2.85vw;
        }
    }

    /*Big laptop's/screen's. Since 1441px to 2560px*/
    @media (min-width: 1441px) and (max-width: 2560px) {
        .divContact {
            margin-right: 3.44%;
        }

        .divAnimation {
            margin-top: -8%;
        }
    }
</style>