<template>
    <main id="who-content">
      <div class="who-content__intro">
            <p class="text-bold who-statement statement-1" data-aos="fade-up" data-aos-duration="1500">We are a community of friends who continuously cultivate creative solutions & sustainable strategies, always taking a global perspective rooted in local culture & tradition.</p>
            <img class="who-statement__img" src="@/assets/img/whoweare/WHOWEARE_1.png" alt="who-statement image" data-aos="fade-up" data-aos-duration="2000">
      </div>

      <section class="who-subheading who-subheadings-1" data-aos="fade-right" data-aos-duration="1500">
          <img class="who-subheadings__img" src="@/assets/img/whoweare/WHOWEARE_2.png" alt="who-statement image">
          <p class="text-bold who-sub who-sub1">We authentically connect you to the next generation of world leaders, dreamers, & thinkers to put positive purpose in your next endeavor.</p>
      </section>

      <section class="who-subheading  who-subheadings-2" data-aos="fade-left" data-aos-duration="1500">
          <p class="text-bold who-sub who-sub2">We advocate awareness, build brands, & create content (ABC’s) through research to redesign & redefine the way our world works.</p>
          <img class="who-subheadings__img" src="@/assets/img/whoweare/WHOWEARE_3.png" alt="who-statement image">
      </section>

      <section class="who-images">
        <img src="@/assets/img/whoweare/WHOWEARE_4.png" alt="" data-aos="fade-up" data-aos-duration="500">
        <img src="@/assets/img/whoweare/WHOWEARE_5.png" alt="" data-aos="fade-up" data-aos-duration="1000">
        <img src="@/assets/img/whoweare/WHOWEARE_6.png" alt="" data-aos="fade-up" data-aos-duration="1500">
        <img src="@/assets/img/whoweare/WHOWEARE_7.png" alt="" data-aos="fade-up" data-aos-duration="2000">
      </section>

        <div class="container">
            <p class="text-bold who-statement statement-2" data-aos="fade-up" data-aos-duration="1500">We aim to foster the Filipino spirit of Bayanihan amongst our clients & communities, redefining how society operates through building a Barangay that stands for both people & planet.</p>
        </div>

      <section class="who-about who-about1 container">
          <h1 class="section-header" data-aos="fade-up" data-aos-duration="1500">Sustainable strategies & creative consultancy for and by our generation</h1>
          <div class="who-about1__details" data-aos="fade-left" data-aos-duration="1000">
              <AboutDetails 
              detail="We stand for a switch in perspective to make way for our vision of a world where the economy, environment, and society act as a united entity for both people and planet." 
              hut="hut1.png"/>

              <img class="people-walking" src="@/assets/img/whoweare/walking.png" alt="">

              <AboutDetails 
              detail="Our mission is to cultivate collaboration and innovation amongst people using authentic research to redesign and redefine problem solving and storytelling, building brands that go beyond profit for positive impact, and sustainable change. " 
              hut="hut2.png"/>
          </div>
      </section>

      <section class="who-about who-about2 container">
          <h1 class="section-header" data-aos="fade-up" data-aos-duration="1500">What we stand for</h1>
          <div class="who-cards" data-aos="fade-up" data-aos-duration="1500">
              <AboutCard 
              type="Organization" 
              title="Kids for Kids PH" 
              advocacy="For the Youth" 
              color="#375998" 
              image="kfk/KFK_COVER.png"
              icon="kfk/KFK_ROUND.png"
              link="/whoweare/kidsforkids"
              :hasLink="true"
 
              />

              <AboutCard 
              type="Social Enterprise" 
              title="Retaso" 
              advocacy="For Regenerative Design" 
              color="#D463A1"
              image="retaso/RETASO_COVER.png"
              icon="retaso/RETASO_ROUND.png"
              link="/whoweare/retaso"
              :hasLink="true"
   
              />

              <AboutCard 
              type="Movement" 
              title="Kamalayan" 
              advocacy="For Local Collaboration" 
              color="#2D5F46"
              image="kamalayan/KAM_COVER.png"
              icon="kamalayan/KAMALAYAN_ROUND.png"
              link="/whoweare/kamalayan"
              :hasLink="true"


              />

              <AboutCard 
              type="Movement" 
              title="Habilin" 
              advocacy="For Intergenerational Innovation" 
              color="#F66324"
              image="habilin/HAB_COVER.png"
              icon="habilin/HABILIN_ROUND.png"
              link="/whoweare/habilin"
              :hasLink="true"
           
              />

          </div>
      </section>

      <section class="who-about who-about3 container">
          <h1 class="section-header" data-aos="fade-up" data-aos-duration="1500">Coming Soon</h1>
          <div class="who-cards" data-aos="fade-up" data-aos-duration="1500">
              <AboutCard 
              type="Organization" 
              title="Kubo" 
              advocacy="For the Environment" 
              image="kubo/KUBO_COVER.png"
              color="#EAA200"
              icon="kubo/KUBO_ROUND.png"
              :hasLink="false"
              />

              <AboutCard 
              type="Social Enterprise" 
              title="Inyo" 
              advocacy="For Circular Design" 
              image="inyo/INYO_COVER.png"
              color="#5AA3A9"
              icon="inyo/INYO_ROUND.png"
              :hasLink="false"
              />
              
          </div>
      </section>


  </main>
</template>

<script>
import AboutDetails from '../components/whoweare/AboutDetails'
import AboutCard from '../components/whoweare/AboutCard'

export default {
    name: "WhoWeAre",
    components: {
        AboutDetails,
        AboutCard,
    },
}
</script>

<style scoped>

/* Statement */
    .who-content__intro {
        display: flex;
        flex-direction: column;
        margin-top: 60px;
    }


    .who-statement {
        text-align: center;
        max-width: 928px;
        margin: 3rem auto;
        font-weight: 700;
    }

    .who-statement__img {
        width: 100%; 
        height: 432px;
        object-fit: cover;
    }

/* Subheadings */
    .who-subheadings-1 {
        margin-top: 80px;
        display: flex;
        justify-content: flex-start;
    }

    .who-subheadings__img {
        width: 608px;
        height: 120px;
    }

    .who-sub {
        width: 544px;
    }

    .who-sub1 {
        margin-left: 24px;
    }

    .who-subheadings-2 {
        margin-top: 160px;
        display: flex;
        justify-content: flex-end;
    }

    .who-sub2 {
        margin-right: 24px;
    }

/* Images */
    .who-images {
        margin-top: 120px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .who-images img {
        width: 100%;
    }

/* About */
    .who-about {
        margin-top: 120px;
    }
    .who-about1__details {
        display: flex;
        justify-content: space-around;
        position: relative;
    }

    .people-walking {
        position: absolute;
        width: 277px;
        top: 50px;
    }

    .who-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, 490px);
        grid-gap: 48px;
        justify-content: center;
    }

    .who-about3 {
        margin-bottom: 88px;
    }


/* Media Queries */

@media screen and (max-width: 1250px) {

    .container {
        width: 90%;
    }

    /* Subheadings */
    .who-subheadings__img {
        display: none;
    }

    .who-subheading {
        width: 90%;
        margin: 3rem auto;
    }

    .who-subheadings-1, .who-subheadings-2 {
        display: block;
    }

    .people-walking {
        display: none;
    }

    .who-sub {
        width: 70%;
    }

    .who-sub1, .who-sub2 {
        margin: 0;
    }

    /* Images */
    .who-images {
        margin: 0;
    }


    /* Statement */

    .statement-1 {
        width: 85%;
    }

    .statement-2 {
        text-align: left;
        width: 70%;
        margin: 3rem 0;
    }

    /* About */
    .who-about1__details {
        flex-direction: column;
        align-items: center;
    }
}


@media screen and (max-width: 767px) {
    .who-cards{
        grid-template-columns: 1fr;
    }

    .who-detail {
        margin-bottom: 3rem;
    }

    .card {
        margin-top: 24px;
    }

    /* Images */
    
    .who-images {
        margin: 3rem 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .who-about {
        margin: 5rem auto 3rem;
    }
}

/* Responsive */
@media screen and (max-width: 500px) {
    .text-bold {
        font-weight: 400;
    }

/* Statement */

    .who-statement {
        order: 2;
        margin: 0 auto;
        font-weight: 400;
        text-align: left;
    }
    
    .statement-1 {
        width: 90%;
    }

    .statement-2 {
        width: 100%;
    }

    .who-statement__img {
        order: 1;
        margin: 3rem 0;
        height: 200px;
    }


/* Subheadings */

    .who-sub {
        width: 100%;
    }

}



</style>