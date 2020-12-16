<template>
  <main>
      <section class="project-intro">
          <p class="container project-name">Projects / Title of Featured Work, Client</p>
          <div class="carousel"></div>
      </section>
      
      <section class="project-information">
          <h3 class="project-info type cap">Type of Service</h3>
          <h1 class="project-info title cap">Title of Featured Work</h1>
          <h2 class="project-info client">Client</h2>
      </section>
      <section class="container project-involved">
          <h3 class="mini-text">Who was involved</h3>
          <p class="mini-text mini-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p class="mini-text mini-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <section class="container project-date">
          <h3 class="mini-text">Project Dates</h3>
          <p class="mini-text mini-par">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <section class="project-statement container">
          <div class="project-statement__content">
            <h1 class="project-statement__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</h1>
          </div>
      </section>
      <section class="container project-details">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">How It Began</h1>
                    <p class="project-detail__par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellat ipsa quis architecto. Maxime rem harum, nisi architecto veritatis porro deserunt fugiat corporis asperiores dolorem consequuntur quod, est amet dignissimos.</p>
                </div>
            </div>  
            <img class="project-image" :src="require(`../assets/img/wwa-projects/kfk/KFK_COVER.png`)" alt="Who Image">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">What We Were Successful With</h1>
                    <p class="project-detail__par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque eaque dolore harum aliquid, maxime, delectus repudiandae nemo facilis error quaerat nostrum expedita soluta totam laudantium ipsa vero, obcaecati non!</p>
                </div>
            </div>  
            <img class="project-image" :src="require(`../assets/img/wwa-projects/kfk/KFK_COVER.png`)" alt="Who Image">
        </section>
        <section class="project-quote container">
            <h1 class="quote-text">“Quote quote quote maybe if they want to put a quote or somethin”</h1>
            <p>– Name of Person, Position</p>
        </section>
        <aside class="medium-article">
            <button class="article-button">View Medium Article</button>
        </aside>
        <section class="related-work">

        </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    main {
        margin-top: 6rem;
    }

/* Global */
    .project-involved, .project-date, .medium-article {
        margin-bottom: 80px;
    }

    .cap {
        text-transform: uppercase;
    }

/* Project intro */

    .project-intro {
        height: 100vh;
    }

    .carousel {
        width: 100%;
        height: 80%;
        background: grey;
        margin-bottom: 255px;
    }



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
        margin-bottom: 140px;
    }

    .quote-text {
        margin-bottom: 30px;
    }

    /* Article Button */
    .medium-article {
       text-align: center;
    }

    .article-button {
        height: 64px;
        width: 208px;
        background: #EAA200;
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

        .article-button {
            height: 40px;
            width: 168px;
            background: #EAA200;
        }
    }


</style>