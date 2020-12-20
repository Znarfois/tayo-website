<template>
  <main>
      <section class="project-intro">
          <p class="container project-name">Projects / {{ title }}</p>
          <!-- <Carousel :slideshow="slideshow"/> -->
      </section>
      
      <section class="project-information">
          <h3 class="project-info type cap">{{ service }}</h3>
          <h1 class="project-info title cap">{{ title }}</h1>
          <h2 class="project-info client">{{ client }}</h2>
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
            <img class="project-image" :src="image1" alt="image1">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">What We Were Successful With</h1>
                    <p class="multi-par project-detail__par">{{ successful }}</p>
                </div>
            </div>  
            <img class="project-image" :src="image2" alt="image2">
        </section>
        <section class="project-quote container" v-if="quote">
            <h1 class="quote-text">“{{ quote }}”</h1>
            <p>– {{ quote_author }}</p>
        </section>
        <section class="related-work">
            <h3 class="related-work__header cap">Related Work</h3>
            <div class="related-work__cards">
                <Hover v-for="card in cards" :image="card.image" :service="card.service" :title="card.title" :client="card.client" :key="card.id" :id="card.project_id" :sub="card.subsidiary"/>
            </div>
        </section>
  </main>
</template>

<script>
import Hover from '../components/Hover'
import db from '../components/firebaseinit'
// import Carousel from '../components/Carousel'
import firebase from 'firebase/app';

export default {
    components: {
        Hover,
        // Carousel
    },

    data() {
        return {
            project_id: null,
            service: null,
            title: null,
            client: null,
            statement: null,
            began: null,
            successful: null,
            quote: null,
            quote_author: null,
            date: null, 

            // Statement images
            image1: null, 
            image2: null, 

            // Carousel images
            cover: null,
            // carousel1: null,
            // carousel2: null,
            // carousel3: null,
            // carousel4: null,
            // carousel5: null,

            // Hover Cards
            cards: [],
        }
    },
    computed: {
        slideshow() {
            let initialList = [ this.cover,
                                this.carousel1, 
                                this.carousel2, 
                                this.carousel3, 
                                this.carousel4, 
                                this.carousel5 ] 
            return initialList
                        .map(img => String(img))
                        .filter(img => img != "null")
        }
    },
    created() {
        // get content
        this.getContent()

        // get all images
        this.getImages()

        // create related hover cards
        this.getHover()
            
    },
    methods: {

        // Get content from firebase
        getContent() {
            db.collection('projects').where('project_id', '==', Number(this.$route.params.project_id)).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {

                    this.id = doc.id
                    this.project_id = doc.data().project_id
                    this.service = doc.data().service
                    this.title = doc.data().title
                    this.client= doc.data().client
                    this.statement = doc.data().statement

                    const textBegan = doc.data().began
                    const spacedBegan = textBegan.replace(/\\n/g,"\n")
                    this.began = spacedBegan

                    const textSuccessful = doc.data().successful
                    const spacedSuccessful = textSuccessful.replace(/\\n/g,"\n")
                    this.successful = spacedSuccessful

                    const textDate = doc.data().date
                    if (textDate) {
                        const spacedDate = textDate.replace(/\\n/g,"\n")
                        this.date = spacedDate
                    }
                    

                    this.quote = doc.data().quote
                    this.quote_author = doc.data().quote_author
                })
            })
        },

        // Get images from firebase
        getImages() {
            const reference = firebase.storage().refFromURL('gs://tayo-c846e.appspot.com/');
                    let image1 = reference.child('projects/' + this.$route.params.project_id + '/1.png');
                    let image2 = reference.child('projects/' + this.$route.params.project_id + '/2.png');
                    // let carousel1 = reference.child('projects/' + this.$route.params.project_id + '/carousel_1.png');
                    // let carousel2 = reference.child('projects/' + this.$route.params.project_id + '/carousel_2.png');
                    // let carousel3 = reference.child('projects/' + this.$route.params.project_id + '/carousel_3.png');
                    // let carousel4 = reference.child('projects/' + this.$route.params.project_id + '/carousel_4.png');
                    // let carousel5 = reference.child('projects/' + this.$route.params.project_id + '/carousel_5.png');
                    let cover = reference.child('projects/' + this.$route.params.project_id + '/cover.png');

                    image1.getDownloadURL().then((url)=> {
                        this.image1 = url;
                    })
                    image2.getDownloadURL().then((url)=> {
                        this.image2 = url;
                    })

                    // if (carousel1) {
                    //     carousel1.getDownloadURL().then((url)=> {
                    //     this.carousel1 = url;
                    // })
                    // }
                    
                    // if (carousel2) {
                    //     carousel2.getDownloadURL().then((url)=> {
                    //     this.carousel2 = url;
                    // })
                    // }
                    
                    // if (carousel3) {
                    //     carousel3.getDownloadURL().then((url)=> {
                    //     this.carousel3 = url;
                    // })
                    // }
                    
                    // if (carousel4) {
                    //     carousel4.getDownloadURL().then((url)=> {
                    //     this.carousel4 = url;
                    // })
                    // }
                    
                    // if (carousel5) {
                    //     carousel5.getDownloadURL().then((url)=> {
                    //     this.carousel5 = url;
                    // })
                    // }
                
                    cover.getDownloadURL().then((url)=> {
                        this.cover = url;
                    })
        
        },

        // get related hover cards
        getHover() {
            db.collection('projects')
                    .where('subsidiary', '==', this.$route.params.subsidiary)
                    .where('project_id', '!=', Number(this.$route.params.project_id)).get()
                    .then(snapshot => snapshot.forEach(doc => {

                    const reference = firebase.storage().refFromURL('gs://tayo-c846e.appspot.com/');
                    let projectRef = reference.child('projects/' + String(doc.data().project_id) + '/cover.png');

                    projectRef.getDownloadURL().then((url)=> {
                        const data = {
                            id: doc.id,
                            project_id: doc.data().project_id,
                            service: doc.data().service,
                            title: doc.data().title,  
                            client: doc.data().client,
                            image: url,
                            subsidiary: doc.data().subsidiary
                        }
                        this.cards.push(data)
                    })
                }
            ))
        }
    }
    
}
</script>

<style scoped>
    main {
        margin-top: 6rem;
    }

/* Global */
    .project-date {
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

/* Project Info */

    .project-name {
        margin-bottom: 36px;
    }

    .project-information {
        text-align: center;
        width: 80%;
        margin: 0 auto 70px;
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
        height: 400px;
        width: 100%;
        object-fit: cover;
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
        grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
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

        .project-date, .medium-article {
            margin-bottom: 60px;
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

        .project-date, .medium-article {
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

        .related-work__cards {
            grid-template-columns: 1fr;
        }
    }


</style>

