<template>
    <div class="gurmannView">
        <section class="comingSoon sequence fadeIn">
            <router-link to="/" class="textClass sequence glitch">  <!-- Hay que cambiar el div a un "a" o un "button" para que haga también de boton de regreso al portfolio -->
                Coming soon
            </router-link>
        </section>
    </div>
</template>

<style>
    /*Font families*/
    @font-face {
        font-family: 'SF-Pro-Ultralight';
        src: local('SF-Pro-Ultralight'), url('../../fonts/SF-Pro-Text-Ultralight.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }

    /*Main conditions to the maximum resolution*/
    .gurmannView {
        width: 100vw;
        height: 100vh;
        background-color: #111111;
        color: #FFFFFF;
    }

    .comingSoon {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 650ms; /* Resize */
        animation: fadeIn 2.5s;
        animation-delay: 0.5s;
        animation-fill-mode: both;
    }

    .textClass {
        display: inline-block;
        color: inherit;
        text-decoration: none;
        outline: none;
        font-size: 5.35vw;
        font-family: "SF-Pro-Ultralight", monospace;
        animation: glitch 5s infinite steps(50);
    }

    /*Animations*/
    @keyframes glitch {
        2% {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        4% {
            font-weight: 300;
            font-style: normal;
            text-decoration: underline;
            text-transform: none;
        }
        6% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: uppercase;
        }
        8% {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        10% {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        12% {
            font-weight: 300;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        14% {
            font-weight: 600;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        16% {
            font-weight: 100;
            font-style: normal;
            text-decoration: underline;
            text-transform: none;
        }
        18% {
            font-weight: 400;
            font-style: italic;
            text-decoration: none;
            text-transform: none;
        }
        20% {
            font-weight: 200;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        22% {
            font-weight: 700;
            font-style: italic;
            text-decoration: underline;
            text-transform: none;
        }
        24% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: capitalize;
        }
        26% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        28% {
            font-weight: 600;
            font-style: normal;
            text-decoration: line-through;
            text-transform: none;
        }
        30% {
            font-weight: 500;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        32% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        34% {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: capitalize;
        }
        36% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        38% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        40% {
            font-weight: 200;
            font-style: italic;
            text-decoration: none;
            text-transform: lowercase;
        }
        42% {
            font-weight: 300;
            font-style: italic;
            text-decoration: line-through;
            text-transform: none;
        }
        44% {
            font-weight: 400;
            font-style: italic;
            text-decoration: none;
            text-transform: none;
        }
        46% {
            font-weight: 400;
            font-style: italic;
            text-decoration: none;
            text-transform: none;
        }
        48% {
            font-weight: 400;
            font-style: normal;
            text-decoration: line-through;
            text-transform: none;
        }
        50% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: uppercase;
        }
        52% {
            font-weight: 100;
            font-style: italic;
            text-decoration: none;
            text-transform: lowercase;
        }
        54% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        56% {
            font-weight: 500;
            font-style: normal;
            text-decoration: line-through;
            text-transform: none;
        }
        58% {
            font-weight: 200;
            font-style: normal;
            text-decoration: underline;
            text-transform: none;
        }
        60% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        62% {
            font-weight: 500;
            font-style: italic;
            text-decoration: none;
            text-transform: none;
        }
        64% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        66% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        68% {
            font-weight: 300;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        70% {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        72% {
            font-weight: 400;
            font-style: italic;
            text-decoration: underline;
            text-transform: capitalize;
        }
        74% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        76% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        78% {
            font-weight: 600;
            font-style: italic;
            text-decoration: none;
            text-transform: none;
        }
        80% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        82% {
            font-weight: 400;
            font-style: italic;
            text-decoration: none;
            text-transform: uppercase;
        }
        84% {
            font-weight: 300;
            font-style: normal;
            text-decoration: line-through;
            text-transform: none;
        }
        86% {
            font-weight: 100;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        88% {
            font-weight: 500;
            font-style: italic;
            text-decoration: none;
            text-transform: none;
        }
        90% {
            font-weight: 400;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        92% {
            font-weight: 200;
            font-style: normal;
            text-decoration: none;
            text-transform: lowercase;
        }
        94% {
            font-weight: 200;
            font-style: normal;
            text-decoration: none;
            text-transform: none;
        }
        96% {
            font-weight: 300;
            font-style: normal;
            text-decoration: underline;
            text-transform: none;
        }
        98% {
            font-weight: 700;
            font-style: normal;
            text-decoration: none;
            text-transform: uppercase;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    /*Responsive conditions*/
    /*Mobiles sizes S, M and L. Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {
        .textClass {
            font-size: 10.35vw;
        }
    }

    /*Standard tablet's. Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {
        .textClass {
            font-size: 7.35vw;
        }
    }

    /*Big tablet's and small laptop's/screen's. Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .textClass {
            font-size: 6.75vw;
        }
    }

    /*Standard laptop's/screen's. Since 1025px to 1440px*/
    @media (min-width: 1025px) and (max-width: 1440px) {
        .textClass {
            font-size: 5.35vw;
        }
    }

    /*Big laptop's/screen's. Since 1441px to 2560px*/
    /* @media (min-width: 1441px) and (max-width: 2560px) {
        
    } */
</style>