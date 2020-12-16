<template>
  <main>
      <p class="container project-name">Projects / Title of Featured Work, Client</p>
      <div class="carousel">

      </div>
      <section class="project-information">
          <h3 class="project-info cap">Type of Service</h3>
          <h1 class="project-info cap">Title of Featured Work</h1>
          <h2 class="project-info">Client</h2>
      </section>
      <section class="container project-involved">
          <h3 class="header">Who was involved</h3>
          <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <section class="container project-date">
          <h3 class="header">Project Dates</h3>
          <p class="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </section>
      <section class="project-statement container">
          <div class="project-statement__content">
            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...</h1>
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

    .cap {
        text-transform: uppercase;
    }

    .carousel {
        width: 100%;
        height: 600px;
        background: grey;
        margin-bottom: 255px;
    }

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

    .header {
        margin-bottom: 1.2rem;
    }

    .par {
        margin-bottom: 1rem;
    }

    .project-involved, .project-date {
        margin-bottom: 80px;
    }

    .project-statement__content {
        width: 70%;
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

    .project-detail__par {
        margin-bottom: 50px;
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
        .project-detail__content {
            width: 90%;
        }

        .project-details {
            width: 100%;
        }

        .project-detail {
            width: 80%;
            margin: 3rem auto;
        }

    }


    @media screen and (max-width: 500px) {

        .project-image {
            height: 200px;
            object-fit: cover;
        }

        .project-detail__content {
            width: 90%;
            margin: 0 auto;
        }

        .project-detail {
            margin: 4rem auto;
            display: block;
            width: 100%;
        }

        .project-detail__header {
            font-size: 24px;
            line-height: 24px;
        }

        .project-detail__par {
            font-size: 16px;
            line-height: 32px;
        }
    }


</style>