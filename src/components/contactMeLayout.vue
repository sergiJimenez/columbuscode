<template>
    <div class="contactMeLayout">
        <p v-for="contactData in contactDatas" :key="contactData.titleAPI" class="contactMeText" id="theEnd" alt="Contact me">
            {{ contactData.titleAPI }}
        </p>
        <input v-for="contactData in contactDatas" :key="contactData.nameAPI" class="firstNameBox" v-model="nameAPI" :placeholder="contactData.nameAPI" alt="First name"/>
        <input v-for="contactData in contactDatas" :key="contactData.secondNameAPI" class="secondNameBox" v-model="secondNameAPI" :placeholder="contactData.secondNameAPI" alt="Second name"/>
        <input v-for="contactData in contactDatas" :key="contactData.emailAPI" class="emailBox" v-model="emailAPI" :placeholder="contactData.emailAPI" alt="E-mail"/>
        <input v-for="contactData in contactDatas" :key="contactData.explainAPI" class="explainBox" v-model="explainAPI" :placeholder="contactData.explainAPI" alt="Explain me about your dreams..."/>
        <div v-for="contactData in contactDatas" :key="contactData.locationAPI" class="gettingTime" alt="Barcelona, España">
            {{ contactData.locationAPI }}<b class="hourLocal">{{ timestamp }}</b>
        </div>
        <p v-for="contactData in contactDatas" :key="contactData.sendButtonAPI" class="sendButton" alt="Send">
            {{ contactData.sendButtonAPI }}
        </p>
        <div>
            <a v-for="contactData in contactDatas" :key="contactData.designByAPI" :href="contactData.linkGitHubAPI" class="github"  target="_blank" alt="GitHub">GitHub</a>
        </div>
        <p v-for="contactData in contactDatas" :key="contactData.designByAPI" class="designContact" alt="Design by">
            {{ contactData.designByAPI }}<a v-for="contactData in contactDatas" :key="contactData.byContactAPI" class="byContact" alt="Sergi Jiménez" href="#theBeggining">{{ contactData.byContactAPI }}</a>
        </p>
    </div>
</template>

<script>
    import urlData from "/contactMe.json";

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
                const time = today.getHours() + ":" + today.getMinutes();
                const dateTime = time;
                this.timestamp = dateTime;
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

    @font-face {
        font-family: 'SF-Pro-Ultralight';
        src: local('SF-Pro-Ultralight'), url('../fonts/SF-Pro-Text-Ultralight.otf') format('opentype');
        font-style: normal;
        font-weight: normal;
    }
    .contactMeLayout {
        display: flex;
        width: 1920px;
        height: 1080px;
        background-color: #FFFFFF;
    }

    .contactMeText {
        position: absolute;
        left: 167px;
        top: 5461px;
        color: #111111;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        text-decoration: line-through;
        text-decoration-thickness: 1px;
    }

    .firstNameBox {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        width: 1564px;
        height: 72;
        top: 5648px;
        left: 167px;
        border: 0;
        outline: 0;
    }

    .secondNameBox {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        width: 1564px;
        height: 72;
        top: 5756px;
        left: 167px;
        border: 0;
        outline: 0;
    }

    .emailBox {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        width: 1564px;
        height: 72;
        top: 5864px;
        left: 167px;
        border: 0;
        outline: 0;
    }

    .explainBox {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        width: 1564px;
        height: 72;
        top: 5974px;
        left: 167px;
        border: 0;
        outline: 0;
    }

    .gettingTime {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 30px;
        letter-spacing: -2px;
        top: 6389px;
        left: 78px;
    }

    .hourLocal {
        margin-left: 111px;
        font-weight: normal;
    }

    .sendButton{
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 45px;
        letter-spacing: -2px;
        top: 6139px;
        left: 960px;
        color: #FF0000;
        cursor: pointer;
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

    .github {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        color: #111111;
        font-size: 30px;
        letter-spacing: -2px;
        top: 6389px;
        left: 966px;
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

    .designContact {
        position: absolute;
        font-family: "SF-Pro-Ultralight";
        font-size: 30px;
        letter-spacing: -2px;
        top: 6359px;
        left: 1543px;
    }

    .byContact {
        color:#FF0000;
        font-weight: normal;
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
</style>