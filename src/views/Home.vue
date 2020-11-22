<template>
  <Header :isHome="true" background="homeheader.png"/>
  <main id="home-content">
<!-- Mission Section -->
      <article id="mission">
        <h1 class="mission-header section-header">TAYO: For and by our generation</h1>
        <div class="mission-content">
            <p class="mission-statement">We collaborate to innovate brands to disrupt and change the world, through design and sustainable strategies. We integrate culture in innovating purpose, evolve with the times, and collaborate to innovate — all for the benefit of the people and the planet. <strong>Generations are evolving, and you should too. Innovate your brand for the futures to come.</strong></p>
            <p class="mission-details">Our mission is to <span class='mission-statement__strong'>cultivate collaboration & innovation</span> amongst people.</p>
        </div>
    </article>

<!-- Stats Section -->
    <section id="home-stats">
      <div class="home-stats__content">
        <HomeStat num="21" subj="clients & partners" />
        <HomeStat num="24,433" subj="cumulative media reach" />
        <HomeStat num="16" subj="beneficiaries" />
      </div>
    </section>

<!-- Offer Sections -->
      <section id="offers">
      <h1 class="offering-header section-header">What We Offer</h1>
      <div class="offers-content"> 
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
        <div class="clients-sections">
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
import Header from '../components/Header'
import HomeStat from '../components/home/HomeStat'
import HomeOffer from '../components/home/HomeOffer'
import ClientList from '../components/home/ClientList'

export default {
    name: "Home",
    components: {
        Header,
        HomeOffer,
        HomeStat,
        ClientList
    }
}

</script>

<style scoped>
 /* Mission */
    #mission {
        margin: auto;
        margin-bottom: 150px;
        max-width: 80%;
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
        max-width: 80%;
        height: 100%;
        margin: auto;
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
        max-width: 80%;
        display: flex;
        justify-content: space-around;
        margin: auto;
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

    #clients .clients-sections {
        max-width: 80%;
        margin: auto;
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