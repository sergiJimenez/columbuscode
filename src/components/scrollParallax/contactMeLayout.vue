<template>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="contactMeLayout">
        <div class="titleDiv">
            <div v-for="contactData in contactDatas" :key="contactData.titleAPI" class="contactMeText" id="theEnd" alt="Contact me">
                {{ contactData.titleAPI }}
            </div>
        </div>
        <div>
            <form class="formDiv" action="https://formsubmit.co/acasualcolumbus@gmail.com" method="POST">
            <!-- Name --> <input v-for="contactData in contactDatas" :key="contactData.nameAPI" class="firstNameBox" v-model="nameAPI" :placeholder="contactData.nameAPI" alt="First name" type="text" name="name" required/>
            <!-- Email --> <input v-for="contactData in contactDatas" :key="contactData.emailAPI" class="emailBox" v-model="emailAPI" :placeholder="contactData.emailAPI" alt="E-mail" type="text" name="email" required/>
            <!-- Explaining --> <textarea v-for="contactData in contactDatas" :key="contactData.explainAPI" class="explainBox" v-model="explainAPI" :placeholder="contactData.explainAPI" alt="Explain me about your dreams..." type="textarea" rows="4" name="message" required></textarea>
            <div class="sendButtonDiv"> <!-- Submit Button --> 
                <button v-for="contactData in contactDatas" :key="contactData.sendButtonAPI" class="sendButton" alt="Send" type="submit">
                    {{ contactData.sendButtonAPI }}
                </button>
            </div> <!-- Let this <div> alone because the <p> has an error with padding and margin's -->
            <!-- This is a "Thank You page that we have to programming after. "<input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"/> -->
            </form>
        </div>
        <div class="bottomDiv">
            <div class="cityAndTime">
                <a href="https://www.google.es/maps/place/Barcelona/data=!4m2!3m1!1s0x12a49816718e30e5:0x44b0fb3d4f47660a?sa=X&ved=2ahUKEwjOjdzwto78AhWSTKQEHUNsACAQ8gF6BAgPEAE" class="gettingTime" v-for="contactData in contactDatas" :key="contactData.locationAPI" target="_blank" alt="Barcelona, ES">
                    {{ contactData.locationAPI }}
                </a>
                <div class="hourLocal">
                    {{ timestamp }}
                </div>
            </div>
            <div class="authorDiv">
                <div class="designContact" v-for="contactData in contactDatas" :key="contactData.designByAPI" alt="Design by">
                    {{ contactData.designByAPI }}
                    <a v-for="contactData in contactDatas" :key="contactData.byContactAPI" class="byContact" alt="Sergi Jiménez" href="#theBeggining">
                        {{ contactData.byContactAPI }}
                    </a>
                </div>
            </div>
        </div>
        <div class="githubDiv">
            <a class="github" v-for="contactData in contactDatas" :key="contactData.designByAPI" :href="contactData.linkGitHubAPI" target="_blank" alt="GitHub">
                GitHub
            </a>
        </div>
    </div>
</template>

<script>
    import urlData from "/src/multilanguage/contactMe.json";

    export default {
        data() {
            return {
                contactDatas: urlData,
                timestamp: ""
            }
        },
        methods: {
            getNow: function() {
                const today = new Date();
                const time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes();
                this.timestamp = time;
            }
        },
        async created() {
            setInterval(this.getNow, 1000);
        }
    }
</script>

<style scoped>
    ::placeholder {
        color: #8f8f8f;
    }

    /*Font families*/
    @font-face {
        font-family: 'SF-Pro-Ultralight';
        src: local('SF-Pro-Ultralight'), url('../../fonts/SF-Pro-Text-Ultralight.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }
    
    /*Main conditions to the maximum resolution*/
    .contactMeLayout {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background-color: #FFFFFF;
    }

    .titleDiv {
        display: flex;
        margin-left: 10%;
    }

    .contactMeText {
        color: #111111;
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw; 
        letter-spacing: -2px;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        margin-top: 5%;
    }

    .formDiv {
        display: flex;
        flex-direction: column;
        gap: 5vh;
        width: 80%;
        margin-top: 9%;
        margin-left: 10%;
        height: auto;
    }

    .firstNameBox {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        border: 0;
        outline: 0;
    }

    .emailBox {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        border: 0;
        outline: 0;
    }

    .explainBox {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        border: 0;
        outline: 0;
        resize: none;
    }

    .sendButtonDiv {
        display: flex;
        justify-content: center;
    }

    .sendButton {
        font-family: "SF-Pro-Ultralight";
        font-size: 2.35vw;
        letter-spacing: -2px;
        color: #FF0000;
        cursor: pointer;
        border: none;
        background-color: transparent;
        transition: clip-path 1000ms ease;
    }

    .sendButton:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .sendButton::before {
        position: absolute;
        content: attr(alt);
        color: #111111;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 1000ms ease;
    }

    .bottomDiv {
        display: flex;
        justify-content: space-between;
        margin-top: 5%;
    }

    .cityAndTime {
        display: flex;
        justify-content: flex-start;
        margin-left: 5%;
        gap: 2.5vw;
    }

    .gettingTime {
        font-family: "SF-Pro-Ultralight";
        font-size: 1.55vw;
        letter-spacing: -2px;
        font-weight: normal;
        text-decoration: none;
        color: #111111;
        transition: clip-path 1000ms ease;
    }

    .gettingTime:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .gettingTime::before {
        position: absolute;
        content: attr(alt);
        color: #FF0000;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 1000ms ease;
    }

    .hourLocal {
        font-family: "SF-Pro-Ultralight";
        font-size: 1.55vw;
        letter-spacing: -2px;
        font-weight: normal;
    }

    .authorDiv {
        display: flex;
        justify-content: flex-end;
        margin-right: 5%;
    }

    .designContact {
        font-family: "SF-Pro-Ultralight";
        font-size: 1.55vw;
        letter-spacing: -2px;
    }

    .byContact {
        color:#FF0000;
        font-family: "SF-Pro-Ultralight";
        font-weight: normal;
        font-size: 1.55vw;
        letter-spacing: -2px;
        text-decoration: none;
        transition: clip-path 1000ms ease;
    }

    .byContact:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .byContact::before {
        position: absolute;
        content: attr(alt);
        color: #111111;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 1000ms ease;
    }

    .githubDiv {
        display: flex;
        justify-content: center;
    }

    .github {
        font-family: "SF-Pro-Ultralight";
        color: #111111;
        font-size: 1.55vw;
        font-weight: normal;
        letter-spacing: -2px;
        text-decoration: none;
        transition: clip-path 1000ms ease;
    }

    .github:hover::before {
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    .github::before {
        position: absolute;
        content: attr(alt);
        color: #FF0000;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
        clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
        transition: clip-path 1000ms ease;
    }

    /*Responsive conditions*/
    /*Mobiles sizes S, M and L. Since 280px to 426px*/
    @media (min-width: 280px) and (max-width: 426px) {
        .titleDiv {
            margin-left: 5%;
        }

        .contactMeText {
            font-size: 10.35vw;
            margin-top: 5.56%;
        }

        .formDiv {
            width: 90%;
            margin-left: 5%;
        }

        .firstNameBox {
            font-size: 10.35vw;
        }

        .emailBox {
            font-size: 10.35vw;
        }

        .explainBox {
            font-size: 10.35vw;
        }

        .sendButton {
            font-size: 10.35vw;
        }

        .bottomDiv {
            flex-direction: column;
            margin-top: auto;
        }

        .cityAndTime {
            gap: 45vw;
        }

        .gettingTime {
            font-size: 6.35vw;
        }

        .hourLocal {
            font-size: 6.35vw;
        }

        .authorDiv {
            justify-content: flex-start;
        }
        
        .designContact {
            font-size: 6.55vw;
            margin-left: 5%;
        }

        .byContact {
            font-size: 6.55vw;
        }

        .githubDiv {
            justify-content: flex-start;
            margin-left: 5%;
            margin-bottom: 7.5%;
        }

        .github {
            font-size: 6.55vw;
        }
    }

    /*Standard tablet's. Since 427px to 768px*/
    @media (min-width: 427px) and (max-width: 768px) {
        .titleDiv {
            margin-left: 5%;
        }

        .contactMeText {
            font-size: 5.35vw;
            margin-top: 5.56%;
        }

        .formDiv {
            width: 90%;
            margin-left: 5%;
        }

        .firstNameBox {
            font-size: 5.35vw;
        }

        .emailBox {
            font-size: 5.35vw;
        }

        .explainBox {
            font-size: 5.35vw;
        }

        .sendButton {
            font-size: 5.35vw;
        }

        .bottomDiv {
            margin-top: auto;
        }

        .cityAndTime {
            gap: 2.5vw;
        }

        .gettingTime {
            font-size: 4.35vw;
        }

        .hourLocal {
            font-size: 4.35vw;
        }
        
        .designContact {
            font-size: 4.55vw;
            margin-left: -5%;
        }

        .byContact {
            font-size: 4.55vw;
        }

        .githubDiv {
            margin-bottom: 4%;
        }

        .github {
            margin-top: 2.5%;
            font-size: 4.55vw;
        }
    }

    /*Big tablet's and small laptop's/screen's. Since 769px to 1024px*/
    @media (min-width: 769px) and (max-width: 1024px) {
        .titleDiv {
            margin-left: 5%;
        }

        .contactMeText {
            font-size: 5.35vw;
            margin-top: 5.56%;
        }

        .formDiv {
            width: 90%;
            margin-left: 5%;
        }

        .firstNameBox {
            font-size: 5.35vw;
        }

        .emailBox {
            font-size: 5.35vw;
        }

        .explainBox {
            font-size: 5.35vw;
        }

        .sendButton {
            font-size: 5.35vw;
        }

        .bottomDiv {
            margin-top: auto;
        }

        .cityAndTime {
            gap: 2.5vw;
        }

        .gettingTime {
            font-size: 4.35vw;
        }

        .hourLocal {
            font-size: 4.35vw;
        }
        
        .designContact {
            font-size: 4.55vw;
            margin-left: -5%;
        }

        .byContact {
            font-size: 4.55vw;
        }

        .githubDiv {
            margin-bottom: 4%;
        }

        .github {
            margin-top: 2.5%;
            font-size: 4.55vw;
        }
    }

    /*Standard laptop's/screen's. Since 1025px to 1440px*/
    @media (min-width: 1025px) and (max-width: 1440px) {
        .titleDiv {
            margin-left: 5%;
        }

        .contactMeText {
            font-size: 2.85vw;
            margin-top: 5.56%;
        }

        .formDiv {
            width: 90%;
            margin-left: 5%;
        }

        .firstNameBox {
            font-size: 2.85vw;
        }

        .emailBox {
            font-size: 2.85vw;
        }

        .explainBox {
            font-size: 2.85vw;
        }

        .sendButton {
            font-size: 2.85vw;
        }

        .bottomDiv {
            margin-top: auto;
        }

        .cityAndTime {
            gap: 2.5vw;
        }

        .gettingTime {
            font-size: 1.55vw;
        }

        .hourLocal {
            font-size: 1.55vw;
        }
        
        .designContact {
            font-size: 1.55vw;
            margin-left: -5%;
        }

        .byContact {
            font-size: 1.55vw;
        }

        .githubDiv {
            margin-bottom: 2%;
        }

        .github {
            margin-top: 2.5%;
            font-size: 1.55vw;
        }
    }

    /*Big laptop's/screen's. Since 1441px to 2560px*/
    @media (min-width: 1441px) and (max-width: 2560px) {
        .bottomDiv {
            margin-top: auto;
        }
        
        .githubDiv {
            margin-bottom: 2%;
        }
    }
</style>