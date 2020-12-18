<template>
<main class="projects">
  <section class="projects-header">
      <div class="project-header__content">
          <img class="header-image" src="../assets/img/homeheader.jpg" alt="Project Heading">
          <h2>We want the world not just to survive, but to thrive.</h2>
      </div>
  </section>
  <section class="client-work m-top">
      <h3 class="client-work__header header-margin">Client Work</h3>
      <div class="project-list">
          <Hover v-for="(client, i) in clients" :service="client.service" :title="client.title" :client="client.client" :img="client.img" :key="i"/>
      </div>
  </section>
  <section class="tayo-projects m-top">
      <h3 class="tayo-projects__header header-margin">Tayo Projects</h3>
      <div class="project-list">
          <Hover v-for="(project, i) in projects" :service="project.service" :title="project.title" :client="project.client" :img="project.img" :key="i"/>
      </div>
  </section>
</main>
</template>

<script>
import Hover from '../components/Hover'
export default {
    components: {
        Hover
    },
    data() {
        return {
            
            clients: [
                // SMART
                { 
                service: "Brand Identity", 
                title: "Where Telco meets Child Protection", 
                client: "PLDT-SMART",
                img: "smart/smart_cover.png"
                }, 

                // GSM
                { 
                service: "Logo Design & Brand Identity", 
                title: "Where Global Traveller Meets Local Explorer", 
                client: "Good Stories Movement",
                img: "gsm/gsm_cover.png"
                },

                // MUSEO
                { 
                service: "Brand Identity, Events Planning", 
                title: "Where Children's Rights Meet the Digital Light", 
                client: "Museo Pambata",
                img: "museo/museo_cover.png"
                },

                // BAKES
                { 
                service: "Campaign", 
                title: "Where quarantine bakes meets a community for change", 
                client: "Home cooks, Instagram Foodies, & local food startups",
                img: "bakes/bakes_cover.png"
                },

                // KWENTUHAN
                { 
                title: "#KwentuhanTayo 2020", 
                img: "smart/smart_cover.png"
                },

                // TREES
                { 
                service: "Graphic Design", 
                title: "Where Native Trees Meet you & me", 
                client: "Philippine Parks & Biodiversity & Philippine Native Tree Enthusiasts",
                img: "smart/smart_cover.png"
                },
            ],

            projects: [

                // TAKBO
                { 
                title: "Takbo", 
                client: "Home cooks, Instagram Foodies, & local food startups",
                img: "takbo/takbo_cover.png"
                },

                // GUIUAN
                { 
                title: "Sirugan ha Guiuan",
                client: "In collaboration with UNICEF Philippines for the benefit of Yolanda Victims",
                img: "guiuan/guiuan_cover.png"
                },

                // OUTWORK
                { 
                title: "Outreach Work", 
                client: "For the benefit of various communities",
                img: "outwork/ow_cover.jpg"
                },
                
                // IMMERSION
                { 
                title: "Immersions for Identity",
                client: "In collaboration with Organizations in Sagada & Siargao",
                img: "immersion/immersions_cover.jpg"
                },

                // KAKAMPI
                { 
                title: "Kakampi Klub", 
                client: "For the benefit of OSAEC",
                img: "kakampi/kakampi_cover.png"
                },

                // PPL & PLANET
                { 
                title: "For People & Planet", 
                client: "In collaboration with Bye Bye Plastic Bags Philippines",
                img: "pplplanet/FP&P_COVER.png"
                },

                // TYPHOON
                { 
                title: "Typhoon Relief", 
                client: "In collaboration with For the Future for the benefit of Typhoon Quinta, Rolly, & Ulysses victims",
                img: "typhoon/typhoon_cover.png"
                },

                // K2016
                { 
                title: "KAMALAYAN 2016",
                img: "k2016/kam2016_cover.png"
                },

                // K2017
                { 
                title: "KAMALAYAN 2017",
                img: "k2017/kam2017_cover.png"
                },

                // K2018
                { 
                title: "KAMALAYAN 2018",
                img: "k2018/kam2018_cover.png"
                },

                // LAYA
                { 
                title: "LAYA 2019", 
                client: "Avida",
                img: "laya/laya_cover.jpg"
                },

                // K2019
                { 
                title: "KAMALAYAN 2019", 
                img: "k2019/kam2019_cover.png"
                },

                // K X WWF
                { 
                title: "WWF x KAMALAYAN", 
                client: "WWF",
                img: "kxwwf/wwfxkam_cover.jpg"
                },

                // SYL
                { 
                title: "#SupportYourLocals", 
                img: "syl/SYL_cover.png"
                },

                // H2018
                { 
                title: "HABILIN 2018", 
                img: "h2018/habilin2018_cover.png"
                },

                // CMW
                { 
                title: "Changemakers Workshop", 
                img: "cmw/cmw_cover.png"
                },

                // PREF
                { 
                title: "ENVIRONMENTAL EDUCATION PREFERENDUM", 
                img: "pref/pref_cover.png"
                },

                // USCM
                { 
                title: "UNSUBTLE CHANGEMAKING", 
                img: "uscm/habfbgrp_cover.png"
                },

                // LAUNCH
                { 
                title: "Retaso Launch @ Adidas x Parley (2019)", 
                img: "launch/adidas_cover.jpg"
                },

                // AURA
                { 
                title: "Aura sa Artesania (2019)",
                img: "aura/artesania_cover.jpg"
                },

                // K2019
                { 
                title: "Kamalayan 2019 Collection",
                img: "k2019xretaso/retasoxkam_cover.jpg"
                },

            ]
        }
    }
}
</script>

<style scoped>
a {
    color: black
}

a:visited {
    color: black;
}

.m-top {
    margin-top: 200px;
}

.header-margin {
    margin-bottom: 50px
}

.projects {
    text-align: center;
    font-weight: 700;
}

.projects-header {
    height: 100vh;
}

.project-header__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
}

.header-image {
    width: 80%;
    margin-bottom: 2rem;
}

/* Projects */

.project-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-auto-rows: 352px;
    margin-bottom: 100px;
}



@media screen and (min-width: 1367px) {
    .header-image {
        height: 408px;
    }
}

@media screen and (max-width: 1024px) {
    .header-image {
        width: 90%;
    }

    .project-header__content {
        justify-content: flex-start;
        margin-top: 150px
    }

}

@media screen and (orientation: landscape) and (max-width: 767px){
    .projects-header {
        height: 600px;
    }

    h2 {
        font-size: 16px;
        line-height: 24px;
    }
}

@media screen and (max-width: 500px) {
    .header-image {
        width: 100%;
    }

    .project-list {
        grid-template-columns: 1fr;
    }

    h2, h3 {
        font-size: 16px;
        line-height: 24px;
    }
}





</style>