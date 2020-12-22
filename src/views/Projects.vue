<template>

<main class="projects">
  <section class="projects-header">
      <div class="project-header__content">
          <video controls poster="@/assets/img/tayo-video-thumbnail.png">
            <source src="https://firebasestorage.googleapis.com/v0/b/tayo-c846e.appspot.com/o/tayo-videos%2Ftayo_video.mp4?alt=media&token=862af318-74f2-40d7-9330-7329d43eaba3" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <h2>We want the world not just to survive, but to thrive.</h2>
      </div>
  </section>
  <section class="client-work m-top">
      <h3 class="client-work__header header-margin">Client Work</h3>
      <div class="project-list">
          <Hover v-for="client in clients" :image="client.image" :service="client.service" :title="client.title" :client="client.client"  :key="client.id" :id="client.project_id" :sub="client.subsidiary"/>
      </div>
  </section>
  <section class="tayo-projects m-top">
      <h3 class="tayo-projects__header header-margin">Tayo Projects</h3>
      <div class="project-list">
          <Hover v-for="project in projects" :image="project.image" :service="project.service" :title="project.title" :client="project.client"  :key="project.id" :id="project.project_id" :sub="project.subsidiary"/>
      </div>
  </section>
</main>

</template>

<script>
import Hover from '../components/Hover'
import db from '../components/firebaseinit'
import firebase from 'firebase/app';
export default {
    components: {
        Hover
    },
    data() {
        return {
            clients: [],
            projects: [],
        }
    },
    created() {
        // Get Client Projects
        db.collection('projects').orderBy('project_id').where('type', '==', 'Client Work').get()
        .then(snapshot => snapshot.forEach(doc => {

                const reference = firebase.storage().refFromURL('gs://tayo-c846e.appspot.com/');
                let projectRef = reference.child('projects/' + doc.data().project_id + '/cover.png');

                projectRef.getDownloadURL().then((url)=> {
                    const data = {
                        id: doc.id,
                        project_id: doc.data().project_id,
                        service: doc.data().service,
                        title: doc.data().title,  
                        client: doc.data().client,
                        subsidiary: doc.data().subsidiary,
                        image: url,
                    }

                    this.clients.push(data)
                })
            }
        ))

        // Get Tayo Projects
        db.collection('projects').where('type', '==', 'Tayo Project').get()
        .then(snapshot => snapshot.forEach(doc => {

                const reference = firebase.storage().refFromURL('gs://tayo-c846e.appspot.com/');
                let projectRef = reference.child('projects/' + doc.data().project_id + '/cover.png');

                projectRef.getDownloadURL().then((url)=> {
                    const data = {
                        id: doc.id,
                        project_id: doc.data().project_id,
                        service: doc.data().service,
                        title: doc.data().title,  
                        client: doc.data().client,
                        subsidiary: doc.data().subsidiary,
                        image: url,

                    }
                    this.projects.push(data)
                })
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
    margin-top: 3rem;
}

.project-header__content h2 {
    width: 60%;
}

.project-header__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
}

video {
    width: 60%;
    margin-bottom: 2rem;
}

video:focus {
    outline: none;
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
}

@media screen and (orientation: landscape) and (max-width: 767px){
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

    h2 {
        font-size: 20px;
        line-height: 30px;
    }

    video {
        width: 100%;
    }   
}

@media screen and (max-width: 320px) {
     h2, h3 {
        font-size: 16px;
        line-height: 24px;
    }
}





</style>