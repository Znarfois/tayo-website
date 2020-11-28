<template>
  <header id="home-header">
      <div class="header-content">
        <img class="header-logo" src="@/assets/img/tayo-logo.png" alt="">
        <h3>A change agency that innovates for transformational growth — where sustainability and creativity meet for positive change</h3>
        <div>
            <button class="header-button button-request"><strong>Request for Porfolio</strong></button>
            <button class="header-button button-contact"><strong>Contact Us</strong></button>
        </div>
      </div>
  </header>

  <main id="home-content">
<!-- Mission Section -->
      <article id="mission" class="container">
        <h1 class="mission-header section-header">TAYO: For and by our generation</h1>
        <div class="mission-content">
            <p class="mission-statement">Our mission is to <span class='mission-statement__strong'>cultivate collaboration & innovation</span> amongst people.</p>
            <p class="mission-details"> We collaborate to innovate brands to disrupt and change the world, through design and sustainable strategies. We integrate culture in innovating purpose, evolve with the times, and collaborate to innovate — all for the benefit of the people and the planet. <strong>Generations are evolving, and you should too. Innovate your brand for the futures to come.</strong></p>
        </div>
    </article>

<!-- Stats Section -->
    <section id="home-stats">
      <div class="home-stats__content container">
        <HomeStat num="21" subj="clients & partners" />
        <HomeStat num="24,433" subj="cumulative media reach" />
        <HomeStat num="16" subj="beneficiaries" />
      </div>
    </section>

<!-- Offer Sections -->
      <section id="offers">
      <h1 class="offering-header section-header">What We Offer</h1>
      <div class="offers-content container"> 
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
            <h1 class="section-header clients-header">Our Clients</h1>
            <p class="body-2 clients-subheading">TAYO Sustainable Strategies & Creative Consultancy caters to different NGOs, companies, and startups that are looking to take the next big step in sustainability and creativity for positive change.</p>
            <ClientList title="TAYO Clients:" :images="['D&G', 'Smart']"/>
            <ClientList title="Our Partners Prior to TAYO:" 
            :images="[
                    'Adspin', 
                    'Avida', 
                    'Ayala-Malls', 
                    'Bayanihan-Para-Sa-Magsasaka',
                    'BBPB',
                    'Called-To-Rescue',
                    'Eco-Explorations',
                    'For-the-Future',
                    'Kids-Who-Farm',
                    'Lokal-Lab',
                    'Marine-Wildlife-Watch-of-the Philippines',
                    'MUNI-PH',
                    'Museo-Pambata',
                    'Oceana',
                    'Reef-Check',
                    'Taya-Pinas',
                    'UN-SDSN-Youth',
                    'UNICEF-Philippines',
                    'Where-To-Next',
                    'WWF']"/>
        </div>
    </section>
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
        background: no-repeat center/cover url('../assets/img/homeheader.png');
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        text-align: center;
        padding: 10rem 0;
    }

    #home-header h3 {
        color: white;
        margin: auto;
        margin-top: 32px;
        width: 664px;
    }

    .header-content {
        width: 80%;
    }

    .header-logo {
        width: 360px;
    }

    .header-button {
        height: 64px;
        width: 208px;
        margin: 32px 16px;
    }

    .button-request {
        background: #F2E5D2;
        color: black;
    }
    
    .button-contact {
        background: #EAA200;
    }

    @media (max-width: 320px) {
        header {
            padding: 0;
        }
        
        .header-logo {
            width: 120px;
        }

        .header-content {
            width: 100%;
        }

        #home-header h3 {
            font-size: 16px;
            line-height: 24px;
            width: 288px;
            margin-bottom: 23px;
        }

        .header-button {
            font-size: 16px;
            line-height: 24px;
            width: 168px;
            height: 40px;
            margin: 0;
            margin-bottom: 16px;
        }
    }



 /* Mission */
    #mission {
        margin-bottom: 150px;
    }

    .mission-content {
        display: flex;
        justify-content: space-around;
    }

    .mission-statement {
        max-width: 450px;
        font-size: 2rem;
        line-height: 48px;
    }

    .mission-statement__strong {
        color: #375998;
        font-weight: 700;
    }

    .mission-details {
        max-width: 568px;
    }

    @media (max-width: 320px) {
        #mission {
            max-width: 90%;
            margin-bottom: 0;
            margin: 70px auto;

        }

        .mission-content {
            display: block;
        }
        
        .mission-statement, .mission-details {
            font-size: 1rem;
            line-height: 32px;
        }

        .mission-statement {
            margin-bottom: 20px;
            width: 240px;
        }
    }

    /* Stats */
    #home-stats {
        background: #F9F4EE;
        padding: 40px 0;
    }

    .home-stats__content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    @media (max-width: 320px){
        #home-stats {
            height: 340px;
            padding: 30px 0;
        }

        .home-stats__content {
            flex-direction: column;
        }
    }

    /* Offers */
    .offers-content {
        display: flex;
        justify-content: space-around;
    }

    @media (max-width: 320px) {
        #offers {
            max-width: 90%;
            margin: 70px auto;
        }

        .offers-content {
            max-width: 100%;
        }

        .offering-header {
            text-align: center;
        }


        .offers-content {
            flex-direction: column;
        }
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
        max-width: 510px;
        text-align: center;
        margin: auto;
        margin-bottom: 2rem;
    }

    @media (max-width: 320px) {
            #clients .clients-header {
                text-align: center;
            }
            #clients .clients-sections {
                max-width: 90%;
                margin: auto;
            }

            .clients-subheading {
                margin: auto;
                margin-right: 5px;
                margin-left: 5px;
                margin-bottom: 40px;
            }
        }

</style>