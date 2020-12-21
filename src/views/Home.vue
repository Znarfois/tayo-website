<template>
<main>
    <header id="home-header">
      <div class="header-content">
        <img class="header-logo" src="@/assets/img/tayo-logo.png" alt="Tayo logo">
        <img class="header-logo-desktop" src="@/assets/img/headerlogo.png" alt="Tayo logo" data-aos="fade" data-aos-duration="1500">
        <div class="header-buttons">
            <button class="header-button button-request" data-aos="fade-up" data-aos-duration="1500"><strong>Request for Porfolio</strong></button>
            <button class="header-button button-contact" data-aos="fade-up" data-aos-duration="2000"><strong>Contact Us</strong></button>
        </div>
      </div>
  </header>

  <main id="home-content">
<!-- Mission Section -->
      <article id="mission" class="container">
        <h1 class="mission-header section-header" data-aos="fade-up" data-aos-duration="1500">We are a change agency that innovates design for both people and planet. </h1>
        <div class="mission-content">
            <img class="mission-illus" src="@/assets/img/homeillustration.png" alt="" data-aos="fade-up" data-aos-duration="2000">
            <p class="mission-details"  data-aos="fade-up" data-aos-duration="2500">Generations are progressing, and you should too. We are here to help people move forward through design and sustainable strategies, by collaborating to disrupt and change the world. We integrate culture in innovating purpose, evolving with the times, and fostering a community that goes beyond for people and planet. </p>
        </div>
    </article>

<!-- Stats Section -->
    <section id="home-stats">
      <div class="home-stats__content container">
        <HomeStat num="21" subj="clients & partners" data-aos="fade-up" data-aos-duration="1500"/>
        <HomeStat num="47,707" subj="cumulative media reach" data-aos="fade-up" data-aos-duration="2000"/>
        <HomeStat num="16" subj="beneficiaries" data-aos="fade-up" data-aos-duration="2500"/>
      </div>
    </section>

<!-- Offer Sections -->
      <section id="offers" >
      <h1 class="offering-header section-header" data-aos="fade-up" data-aos-duration="1500">What We Offer</h1>
      <div class="offers-content container" data-aos="fade-left" data-aos-duration="2000"> 
          <HomeOffer 
          image="service_a.png" 
          title="Advocacy & Awareness" 
          :services="[
                'CSR', 
                'Campaign Creation', 
                'Basic Sustainable Strategies & Policies', 
                'Social & Environmental Initiatives'
                ]" />
          <HomeOffer 
          image="service_b.png" 
          title="Branding & Design Solutions" 
          :services="[
                'Brand Identity, Strategy, Management',
                'UX Research, Design, & Web Development',
                'Photography & Videography',
                'Content Creation & Strategy',
                'Art Direction',
                'Graphic Design']"/>
          <HomeOffer 
          image="service_c.png" 
          title="Communications & Executions" 
          :services="[
                'Events (Online & Physical)',
                'Workshops (Online & Physical)',
                'Productions and Stage Management',
                'Marketing & Communications Strategies',
            ]"/>
      </div>
  </section>

<!-- Clients page -->
  <section id="clients">
        <div class="clients-sections container">
            <h1 class="section-header clients-header"  data-aos="fade-up" data-aos-duration="1500">Our Community</h1>
            <p class="body-2 clients-subheading"  data-aos="fade-up" data-aos-duration="2000">We believe that everyone we work with has become a part of a community for change, hence, we call them our <strong>Barangay</strong> - a Filipino term for community or kinship. We cater to different individuals, startups, companies, and NGOs that are looking to take the next big step for positive change.</p>
            <ClientList 
             data-aos="fade-up" data-aos-duration="2500"
            :images="[
                    'UNICEF-Philippines',
                    'WWF',
                    'For-the-Future',
                    'Museo-Pambata',
                    'Stages-Sessions',
                    'Bayanihan-Para-Sa-Magsasaka',
                    'Philippine-Parks',
                    'MUNI-PH',
                    'GSM',
                    'Digital-Spin',
                    'Avida',
                    'PLDT-Smart',
                    'Lokal-Lab',
                    'Youthtopia',
                    'Where-To-Next',
                    'Tamaraw-Society',
                    'Tukod',
                    'Adidas',
                    'Kids-Who-Farm',
                    'Called-To-Rescue',
                    'Eco-Explorations',
                    'BBPB',
                    'SDSN',
                    'Taya-Pinas',
                    'Green-Sun']"/>
        </div>
    </section>
  </main>
</main>
</template>

<script>
import HomeStat from '../components/home/HomeStat'
import HomeOffer from '../components/home/HomeOffer'
import ClientList from '../components/home/ClientList'

export default {
    components: {
        HomeOffer,
        HomeStat,
        ClientList
    }
}

</script>

<style scoped>
/* Header */
    #home-header {
        background: no-repeat right center/cover fixed url('../assets/img/homeheader.jpg');
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        text-align: center;
        padding: 5rem 0;
    }


    .header-content {
        width: 90%;
        margin-top: 8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .header-logo {
        display: none;
    }

    .header-logo-desktop {
        width: 100%;
        margin-bottom: 100px;
    }

    .header-button {
        height: 64px;
        width: 208px;
        margin: 32px 16px;
    }

    .button-request {
        background: none;
        border: 2px solid #fafafa;
        color: #fafafa;
    }
    
    .button-contact {
        background: #EAA200;
    }



 /* Mission */
    #mission {
        margin-bottom: 150px;
    }

    .mission-content {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .mission-illus {
        width: 30%;
    }

    .mission-details {
        width: 568px;
    }


    /* Stats */
    #home-stats {
        padding: 40px 0;
    }

    .home-stats__content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }


    /* Offers */
    .offers-content {
        display: flex;
        justify-content: space-around;
    }

    /* Clients */
    #clients {
        margin-bottom: 120px;
    }

    #clients .clients-header {
        padding: 0;
        margin-bottom: 10px;
    }

    .clients-subheading {
        max-width: 580px;
        text-align: center;
        margin: auto;
        margin-bottom: 4rem;
    }

/* Tablet */
@media screen and (max-width: 1300px) {
    p {
        font-size: 16px;
        line-height: 32px;
    }


    .section-header {
        margin-bottom: 32px;
    }

    /* header */

    .header-content {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    .header-logo {
        display: block;
        width: 50%;
        margin: 0 auto 50px;
    }   

    .header-logo-desktop {
        display: none;
    }

    /* Mission */

    .mission-details {
        width: auto;
    }

    .mission-illus {
        width: 80%;
        margin: 1rem auto 2rem;
        display: block;
    }

    .mission-content {
        display: block;
    }

    /* Offers */

    #offers {
            max-width: 90%;
            margin: 70px auto;
        }

        .offers-content {
            max-width: 100%;
        }


        .offers-content {
            flex-direction: column;
        }
}

@media screen and (orientation: landscape) and (max-width: 1300px) {
    .header-logo {
        width: 35%;
    }
}


/* Phone */
@media screen and (max-width: 767px){
    /* Header */
        #home-header {
            padding: 0;
        }

        .section-header {
            text-align: center;
        }


        .header-buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .header-button {
            font-size: 16px;
            line-height: 24px;
            width: 168px;
            height: 40px;
            margin: 0;
            margin-bottom: 16px;
        }

        /* Mission */
        #mission {
            max-width: 90%;
            margin-bottom: 0;
            margin: 70px auto;
        }

        /* Stats */
        #home-stats {
            height: 420px;
            padding: 10px 0;
        }

        .home-stats__content {
            flex-direction: column;
            height: 100%;
        }

        /* Offers */
        .offering-header {
            text-align: center;
        }

        /* Clients */
         #clients .clients-header {
            text-align: center;
        }

        #clients .clients-sections {
            max-width: 90%;
            margin: auto;
        }

        .clients-subheading {
            margin: 0 5px 40px;
        }
}

@media screen and (orientation: landscape) and (max-width: 767px){
    #home-header {
        height: 600px;
    }
}

</style>