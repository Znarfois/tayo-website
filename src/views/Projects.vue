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
          <Hover v-for="(client) in clients" :service="client.service" :title="client.title" :client="client.client" :img="client.img" :key="client.project_id" :id="client.project_id"/>
      </div>
  </section>
  <section class="tayo-projects m-top">
      <h3 class="tayo-projects__header header-margin">Tayo Projects</h3>
      <div class="project-list">
          <Hover v-for="(project) in projects" :service="project.service" :title="project.title" :client="project.client" :img="project.img" :key="project.project_id" :id="project.project_id"/>
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
                project_id: "1",
                service: "Brand Identity", 
                title: "Where Telco meets Child Protection", 
                client: "PLDT-SMART",
                img: "smart/smart_cover.png",
                }, 

                // GSM
                { 
                project_id: "2",
                service: "Logo Design & Brand Identity", 
                title: "Where Global Traveller Meets Local Explorer", 
                client: "Good Stories Movement",
                img: "gsm/gsm_cover.png"
                },

                // MUSEO
                { 
                project_id: "3",
                service: "Brand Identity, Events Planning", 
                title: "Where Children's Rights Meet the Digital Light", 
                client: "Museo Pambata",
                img: "museo/museo_cover.png"
                },

                // BAKES
                { 
                project_id: "4",
                service: "Campaign", 
                title: "Where quarantine bakes meets a community for change", 
                client: "Home cooks, Instagram Foodies, & local food startups",
                img: "bakes/bakes_cover.png"
                },

                // KWENTUHAN
                { 
                project_id: "5",
                title: "#KwentuhanTayo 2020", 
                img: "smart/smart_cover.png"
                },

                // TREES
                { 
                project_id: "6",
                service: "Graphic Design", 
                title: "Where Native Trees Meet you & me", 
                client: "Philippine Parks & Biodiversity & Philippine Native Tree Enthusiasts",
                img: "smart/smart_cover.png"
                },
            ],

            projects: [

                // TAKBO
                { 
                project_id: "7",
                title: "Takbo", 
                client: "Home cooks, Instagram Foodies, & local food startups",
                img: "takbo/takbo_cover.png"
                },

                // GUIUAN
                { 
                project_id: "8",
                title: "Sirugan ha Guiuan",
                client: "In collaboration with UNICEF Philippines for the benefit of Yolanda Victims",
                img: "guiuan/guiuan_cover.png"
                },

                // OUTWORK
                { 
                project_id: "9",
                title: "Outreach Work", 
                client: "For the benefit of various communities",
                img: "outwork/ow_cover.jpg"
                },
                
                // IMMERSION
                { 
                project_id: "10",
                title: "Immersions for Identity",
                client: "In collaboration with Organizations in Sagada & Siargao",
                img: "immersion/immersions_cover.jpg"
                },

                // KAKAMPI
                { 
                project_id: "11",
                title: "Kakampi Klub", 
                client: "For the benefit of OSAEC",
                img: "kakampi/kakampi_cover.png"
                },

                // PPL & PLANET
                { 
                project_id: "12",
                title: "For People & Planet", 
                client: "In collaboration with Bye Bye Plastic Bags Philippines",
                img: "pplplanet/FP&P_COVER.png"
                },

                // TYPHOON
                { 
                project_id: "13",
                title: "Typhoon Relief", 
                client: "In collaboration with For the Future for the benefit of Typhoon Quinta, Rolly, & Ulysses victims",
                img: "typhoon/typhoon_cover.png"
                },

                // K2016
                { 
                project_id: "14",
                title: "KAMALAYAN 2016",
                img: "k2016/kam2016_cover.png"
                },

                // K2017
                { 
                project_id: "15",
                title: "KAMALAYAN 2017",
                img: "k2017/kam2017_cover.png"
                },

                // K2018
                { 
                project_id: "16",
                title: "KAMALAYAN 2018",
                img: "k2018/kam2018_cover.png"
                },

                // LAYA
                { 
                project_id: "17",
                title: "LAYA 2019", 
                client: "Avida",
                img: "laya/laya_cover.jpg"
                },

                // K2019
                { 
                project_id: "18",
                title: "KAMALAYAN 2019", 
                img: "k2019/kam2019_cover.png"
                },

                // K X WWF
                { 
                project_id: "19",
                title: "WWF x KAMALAYAN", 
                client: "WWF",
                img: "kxwwf/wwfxkam_cover.jpg"
                },

                // SYL
                { 
                project_id: "20",
                title: "#SupportYourLocals", 
                img: "syl/SYL_cover.png"
                },

                // H2018
                { 
                project_id: "21",
                title: "HABILIN 2018", 
                img: "h2018/habilin2018_cover.png"
                },

                // CMW
                { 
                project_id: "22",
                title: "Changemakers Workshop", 
                img: "cmw/cmw_cover.png"
                },

                // PREF
                { 
                project_id: "23",
                title: "ENVIRONMENTAL EDUCATION PREFERENDUM", 
                img: "pref/pref_cover.png"
                },

                // USCM
                { 
                project_id: "24",
                title: "UNSUBTLE CHANGEMAKING", 
                img: "uscm/habfbgrp_cover.png"
                },

                // LAUNCH
                { 
                project_id: "25",
                title: "Retaso Launch @ Adidas x Parley (2019)", 
                img: "launch/adidas_cover.jpg"
                },

                // AURA
                { 
                project_id: "26",
                title: "Aura sa Artesania (2019)",
                img: "aura/artesania_cover.jpg"
                },

                // K2019
                { 
                project_id: "27",
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