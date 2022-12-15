<template>
    <div class="mainEsloganLayout" alt="Coding dreams">
        <div class="codingDiv" alt="Coding">
            <div class="C1">C</div>
            <div class="O1">O</div>
            <div class="D1">D</div>
            <div class="I1">I</div>
            <div class="N1">N</div>
            <div class="G1">G</div>
        </div>
        <div class="dreamsDiv" alt="Dreams">
            <div class="D2">D</div>
            <div class="R2">R</div>
            <div class="E2">E</div>
            <div class="A2">A</div>
            <div class="M2">M</div>
            <div class="S2">S</div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    @font-face {
        font-family: 'Adamas';
        src: local('Adamas'), url('../fonts/Adamas-Regular.otf') format('opentype');
    }

    /*Main conditions to the maximum resolution*/
    .mainEsloganLayout {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #111111;
        color: #FFFFFF;
    }

    .codingDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .C1 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }

    .O1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.7%;
    }

    .D1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.7%;
    }

    .I1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.7%;
    }

    .N1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.7%;
    }

    .G1 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -2%;
    }

    .dreamsDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: -2.5%;
    }

    .D2 {
        font-family: "Adamas";
        font-size: 12.5vw;
    }
    
    .R2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.6%;
    }
    .E2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.2%;
    }

    .A2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.4%;
    }

    .M2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -0.6%;
    }

    .S2 {
        font-family: "Adamas";
        font-size: 12.5vw;
        margin-left: -1.3%;
    }

    /*Responsive conditions*/
    /*Mobiles sizes S, M and L. Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {
        .C1 {
            font-size: 19.5vw;
        }

        .O1 {
            font-size: 19.5vw;
            margin-left: -0.9%;
        }

        .D1 {
            font-size: 19.5vw;
            margin-left: -2.8%;
        }

        .I1 {
            font-size: 19.5vw;
            margin-left: -2.6%;
        }

        .N1 {
            font-size: 19.5vw;
            margin-left: -2.7%;
        }

        .G1 {
            font-size: 19.5vw;
            margin-left: -3.1%;
        }

        .dreamsDiv {
            margin-top: -4.26%;
            margin-left: 3%;
        }

        .D2 {
            font-size: 19.5vw;
        }
        
        .R2 {
            font-size: 19.5vw;
            margin-left: -2.4%;
        }
        .E2 {
            font-size: 19.5vw;
            margin-left: -1.9%;
        }

        .A2 {
            font-size: 19.5vw;
            margin-left: -0.4%;
        }

        .M2 {
            font-size: 19.5vw;
            margin-left: -0.9%;
        }

        .S2 {
            font-size: 19.5vw;
            margin-left: -2%;
        }
    }
    
    /*Standard tablet's. Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {
        .C1 {
            font-size: 19.5vw;
        }

        .O1 {
            font-size: 19.5vw;
            margin-left: -0.9%;
        }

        .D1 {
            font-size: 19.5vw;
            margin-left: -2.8%;
        }

        .I1 {
            font-size: 19.5vw;
            margin-left: -2.6%;
        }

        .N1 {
            font-size: 19.5vw;
            margin-left: -2.7%;
        }

        .G1 {
            font-size: 19.5vw;
            margin-left: -3.1%;
        }

        .dreamsDiv {
            margin-top: -3.8%;
        }

        .D2 {
            font-size: 19.5vw;
        }
        
        .R2 {
            font-size: 19.5vw;
            margin-left: -2.4%;
        }
        .E2 {
            font-size: 19.5vw;
            margin-left: -1.9%;
        }

        .A2 {
            font-size: 19.5vw;
            margin-left: -0.4%;
        }

        .M2 {
            font-size: 19.5vw;
            margin-left: -0.9%;
        }

        .S2 {
            font-size: 19.5vw;
            margin-left: -2%;
        }
    }

    /*Big tablet's and small laptop's/screen's. Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .C1 {
            font-size: 19.5vw;
        }

        .O1 {
            font-size: 19.5vw;
            margin-left: -0.9%;
        }

        .D1 {
            font-size: 19.5vw;
            margin-left: -2.8%;
        }

        .I1 {
            font-size: 19.5vw;
            margin-left: -2.6%;
        }

        .N1 {
            font-size: 19.5vw;
            margin-left: -2.7%;
        }

        .G1 {
            font-size: 19.5vw;
            margin-left: -3.1%;
        }

        .dreamsDiv {
            margin-top: -3.8%;
        }

        .D2 {
            font-size: 19.5vw;
        }
        
        .R2 {
            font-size: 19.5vw;
            margin-left: -2.4%;
        }
        .E2 {
            font-size: 19.5vw;
            margin-left: -1.9%;
        }

        .A2 {
            font-size: 19.5vw;
            margin-left: -0.4%;
        }

        .M2 {
            font-size: 19.5vw;
            margin-left: -0.9%;
        }

        .S2 {
            font-size: 19.5vw;
            margin-left: -2%;
        }
    }
</style>