<template>
  <main>
      <section class="project-intro">
          <p class="container project-name">Projects / Title of Featured Work, Client</p>
          <!-- <Carousel :slideshow="slideshow"/> -->
      </section>
      
      <section class="project-information">
          <h3 class="project-info type cap">{{ service }}</h3>
          <h1 class="project-info title cap">{{ title }}</h1>
          <h2 class="project-info client">{{ client }}</h2>
      </section>
      <section v-if="person" class="container project-involved">
          <h3 class="mini-text">Who was involved</h3>
          <p class="multi-par mini-text mini-par" v-for="person in persons" :key="person">{{ person }}</p>
      </section>
      <section v-if="date" class="container project-date">
          <h3 class="mini-text">Project Dates</h3>
          <p class="multi-par mini-text mini-par">{{ date }}</p>
      </section>
      <section class="project-statement container">
          <div class="project-statement__content">
            <h1 class="project-statement__text">{{ statement }}</h1>
          </div>
      </section>
      <section class="container project-details">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">How It Began</h1>
                    <p class="multi-par project-detail__par">{{ began }}</p>
                </div>
            </div>  
            <!-- <img class="project-image" :src="require(`../assets/img/template-projects/${image1}`)" alt="image1"> -->
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">What We Were Successful With</h1>
                    <p class="multi-par project-detail__par">{{ successful }}</p>
                </div>
            </div>  
            <!-- <img class="project-image" :src="require(`../assets/img/template-projects/${image2}`)" alt="image2"> -->
        </section>
        <section class="project-quote container">
            <h1 class="quote-text">“{{ quote }}”</h1>
            <p>– {{ author }}</p>
        </section>
        <section class="related-work">
            <h3 class="related-work__header cap">Related Work</h3>
            <div class="related-work__cards">
                <!-- <Hover service="Service" title="Title" client="Client" img="cmw/cmw_cover.png"/>
                <Hover service="Service" title="Title" client="Client" img="cmw/cmw_cover.png"/>
                <Hover service="Service" title="Title" client="Client" img="cmw/cmw_cover.png"/> -->
            </div>
        </section>
  </main>
</template>

<script>
// import Hover from '../components/Hover'
import db from '../components/firebaseinit'
// import Carousel from '../components/Carousel'
export default {
    components: {
        // Hover,
        // Carousel
    },

    data() {
        return {
            project_id: null,
            service: null,
            title: null,
            client: null,
            statemen: null,
            began: null,
            successful: null,
            quote: null,
            author: null,
            persons: null, 
            date: null, 
        }
    },
    created() {
        db.collection('projects').where('project_id', '==', this.$route.params.project_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    this.id = doc.id
                    this.project_id = doc.data().project_id
                    this.service = doc.data().service
                    this.title = doc.data().title
                    this.client= doc.data().client
                    this.statement = doc.data().statement
                    const textBegan = doc.data().began
                    const spaced = textBegan.replace(/\\n/g,"\n")
                    this.began = spaced
                    this.successful = doc.data().successful
                    this.quote = doc.data().quote
                    this.author = doc.data().author
                    this.persons = doc.data().persons
                    this.date = doc.data().date
                })
            })
    }
}
</script>

<style scoped>
    main {
        margin-top: 6rem;
    }

/* Global */
    .project-involved, .project-date {
        margin-bottom: 80px;
    }

    .cap {
        text-transform: uppercase;
    }

    .multi-par {
        margin-bottom: 50px;
        white-space: pre-wrap;
    }

/* Project intro */

    .project-intro {
        margin-bottom: 200px;
    }

    /* .carousel {
        width: 100%;
        height: 80%;
        background: grey;
        margin-bottom: 255px;
    } */

/* Project Info */

    .project-name {
        margin-bottom: 36px;
    }

    .project-information {
        text-align: center;
        margin-bottom: 70px;
    }

    .project-info {
        line-height: 1;
        padding-bottom: 30px;
    }

    .project-statement__content {
        width: 70%;
    }

    .mini-text {
        margin-bottom: 1rem;
    }

    .title {
        color: #EAA200;
    }


    /* Project details */
    .project-details {
        margin-bottom: 180px;
    }

    .project-detail {
        margin: 7rem auto;
        display: flex;
        justify-content: flex-end;
    }

    .project-detail__content {
        width: 65%;
        padding-right: 100px;
    }

    .project-detail__header {
        margin-bottom: 1rem;
    }

    .project-image {
        width: 100%;
    }

    /* Quote */
    .project-quote {
        width: 50%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 100px;
    }

    .quote-text {
        margin-bottom: 30px;
    }

/* Related work */

    .related-work {
        margin-bottom: 80px;
    }

    .related-work__header {
        text-align: center;
        margin-bottom: 60px;
    }

    .related-work__cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 352px;
    }


    @media screen and (max-width: 1024px) {
        .mini-text {
            margin-bottom: 4px;
        }

        .carousel {
            width: 100%;
            height: 60%;
            background: grey;
            margin-bottom: 255px;
        }

        .project-detail__content {
            width: 100%;
            padding-right: 0;
        }

        .project-details {
            width: 100%;
            margin-bottom: 3rem;
        }

        .project-detail {
            width: 80%;
            margin: 3rem auto;
        }

        .project-quote {
            width: 80%;
            margin-bottom: 140px;
        }

        .project-statement__text {
            font-size: 24px;
            line-height: 32px;
        }

        .project-involved, .project-date, .medium-article {
            margin-bottom: 60px;
        }
    }

    @media screen and (max-width: 767px) {
        .related-work__cards {
            display: block;
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media screen and (max-width: 500px) {

        .project-image {
            height: 200px;
            object-fit: cover;
        }

        .project-information {
            margin-bottom: 40px;
        }

        .project-info {
            padding-bottom: 25px;
        }

        .project-involved, .project-date, .medium-article {
            margin-bottom: 40px;
        }

        .mini-text {
            font-size: 16px;
            margin: 0;
        }

        .mini-par {
            font-size: 12px;
            margin: 0;
            line-height: 24px;
        }

        .project-detail__content {
            margin: 0 auto;
        }

        .project-detail {
            margin: 4rem auto;
            display: block;
        }

        .project-detail__header {
            font-size: 24px;
            line-height: 24px;
        }

        .project-detail__par {
            
            font-size: 16px;
            line-height: 32px;
        }

        .project-statement__content {
            width: 100%;
        }

        .project-statement__text {
            font-size: 16px;
            line-height: 24px;
        }

        .project-quote {
            margin-bottom: 50px;
        }

        .type, .client {
            font-size: 16px;
        }

        .title {
            font-size: 24px;
        }

        .project-quote {
            width: 80%;
        }

        .quote-text {
            font-size: 24px;
            line-height: 32px;
        }
    }


</style>