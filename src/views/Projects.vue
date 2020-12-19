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
          <Hover v-for="client in clients" :image="client.image" :service="client.service" :title="client.title" :client="client.client"  :key="client.id" :id="client.project_id"/>
      </div>
  </section>
  <section class="tayo-projects m-top">
      <h3 class="tayo-projects__header header-margin">Tayo Projects</h3>
      <div class="project-list">

      </div>
      <p v-for="client in clients" :key="client">{{ client.image }}</p>
  </section>
</main>
</template>

<script>
import Hover from '../components/Hover'
import db from '../components/firebaseinit'
import firebase from 'firebase';
export default {
    components: {
        Hover
    },
    data() {
        return {
            clients: [],
        }
    },
    created() {
        // Get Client Projects
        db.collection('projects').where('type', '==', 'Client Project').get()
        .then(snapshot => snapshot.forEach(
            doc => {

                const reference = firebase.storage().refFromURL('gs://tayo-c846e.appspot.com/');
                let projectRef = reference.child(String('projects/' + doc.data().project_id + '/cover.png'));

                projectRef.getDownloadURL().then((url)=> {
                    data.image = url;
                })

                const data = {
                    id: doc.id,
                    project_id: doc.data().project_id,
                    service: doc.data().service,
                    title: doc.data().title, 
                    client: doc.data().client,
                    image: ''
                }

                this.clients.push(data)
                console.log(this.clients)
            }
        ))
    },
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