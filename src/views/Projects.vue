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
  <a class="work-link" href="">View more work</a>
</main>
</template>

<script>
import Hover from '../components/projects/Hover'
export default {
    components: {
        Hover
    },
    data() {
        return {
            
            clients: [
                { 
                service: "Brand Identity", 
                title: "Where Telco meets Child Protection", 
                client: "PLDT-SMART",
                img:"homeheader.jpg"
                }, 
                { 
                service: "Logo Design & Brand Identity", 
                title: "Where Global Traveller Meets Local Explorer", 
                client: "Good Stories Movement",
                img:"homeheader.jpg"
                }, 
            ],

            projects: [
                { 
                service: "Brand Identity", 
                title: "Where Telco meets Child Protection", 
                client: "PLDT-SMART",
                img:"homeheader.jpg"
                }, 
                { 
                service: "Logo Design & Brand Identity", 
                title: "Where Global Traveller Meets Local Explorer", 
                client: "Good Stories Movement",
                img:"homeheader.jpg"
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
}

/* link */
.work-link {
    display: inline-block;
    margin: 100px 0 400px;
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

    .work-link {
        display: inline-block;
        margin: 100px 0;
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