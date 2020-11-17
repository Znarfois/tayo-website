<template>
  <main id="who-content">
      <p class="who-statement"><strong>{{ statement1 }}</strong></p>

      <!-- Image here -->
      <div style="width: 100%; background:lightgrey; height: 432px;"></div>

      <section class="who-subheadings-1">
          <!-- Image -->
          <div style="width: 608px; background:lightgrey; height: 120px;"></div>
          <p class="who-sub1"><strong>{{ sub1 }}</strong></p>
      </section>

      <section class="who-subheadings-2">
          <p class="who-sub2"><strong>{{ sub2 }}</strong></p>
          <!-- Image -->
          <div style="width: 608px; background:lightgrey; height: 120px;"></div>
      </section>

      <section class="who-images">
          <div style="height: 240px; width: 360px; border: 1px solid gray; background: lightgray"></div>
          <div style="height: 240px; width: 360px; border: 1px solid gray; background: lightgray"></div>
          <div style="height: 240px; width: 360px; border: 1px solid gray; background: lightgray"></div>
          <div style="height: 240px; width: 360px; border: 1px solid gray; background: lightgray"></div>
      </section>

      <p class="who-statement"><strong>{{ statement2 }}</strong></p>

      <section class="who-about who-about1">
          <h1 class="section-header">{{ about1 }}</h1>
          <div class="who-about1__details">
              <AboutDetails :detail="detail1" />
              <AboutDetails :detail="detail2"/>
          </div>
      </section>

      <section class="who-about who-about2">
          <h1 class="section-header">{{ about2 }}</h1>
          <div class="who-cards">
              <AboutCard type="Organization" title="Kids for Kids PH" advocacy="For the Youth"/>
              <AboutCard type="Social Enterprise" title="Retaso" advocacy="For Regenerative Design"/>
              <AboutCard type="Movement" title="Kamalayan" advocacy="For Local Collaboration"/>
              <AboutCard type="Movement" title="HABILIN" advocacy="For Intergenerational Innovation"/>
          </div>
      </section>

      <section class="who-about who-about3">
          <h1 class="section-header">{{ about3 }}</h1>
          <div class="who-cards">
              <AboutCard type="Organization" title="Brand X" advocacy="For the Environment"/>
              <AboutCard type="Social Enterprise" title="Inyo" advocacy="For Circular Design"/>
          </div>
      </section>

      <section class="who-about who-about4">
          <h1 class="section-header">{{ about4 }}</h1>
          <div class="comm-cards">
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
              <CommunityCard title="Community" partner="In partnership with UNICEF"/>
          </div>
      </section>


  </main>
</template>

<script>
import AboutDetails from './whoweare_sections/AboutDetails'
import AboutCard from './whoweare_sections/AboutCard'
import CommunityCard from './whoweare_sections/CommunityCard'

export default {
    name: 'WhoWeAreMain',
    components: {
        AboutDetails,
        AboutCard,
        CommunityCard,
    },
    data() {
        return {
            statement1: "We are a change agency that cultivates creative solutions & sustainable strategies, always taking a global perspective rooted in local culture & tradition.",
            sub1: "We authentically connect you to the next generation of world leaders, dreamers, & thinkers to put positive purpose in your next endeavor.",
            sub2: "We advocate awareness, build brands, & create content (ABC’s) through research to redesign & redefine the way our world works.",
            statement2: "We aim to foster the Filipino spirit of Bayanihan amongst our clients & communities, redefining how society operates through building a Barangay that stands for both people & planet.",
            about1: "Sustainable strategies & creative consultancy for and by our generation",
            detail1: "We stand for a switch in perspective to make way for our vision of a world where the economy, environment, and society act as a united entity for both people and planet. ",
            detail2: "Our mission is to cultivate collaboration and innovation amongst people using authentic research to redesign and redefine problem solving and storytelling, building brands that go beyond profit for positive impact, and sustainable change. ",
            about2: "What we stand for",
            about3: "Coming Soon",
            about4: "Communities We Have Worked With"
        }
    }
}
</script>

<style scoped>

/* Statement */
    .who-statement {
        text-align: center;
        max-width: 928px;
        margin: 3rem auto;
    }

/* Subheadings */
    .who-subheadings-1 {
        margin-top: 80px;
        display: flex;
        justify-content: flex-start;
    }

    .who-sub1 {
        max-width: 544px;
        margin-left: 24px;
    }

    .who-subheadings-2 {
        margin-top: 160px;
        display: flex;
        justify-content: flex-end;
    }

    .who-sub2 {
        max-width: 544px;
        margin-right: 24px;
    }

/* Images */
    .who-images {
        margin-top: 120px;
        display: flex;
        justify-content: center;
    }

/* About */
    .who-about {
        margin-top: 120px;
    }

    .who-about1 {
        max-width: 80%;
        margin: auto;
    }

    .who-about1__details {
        display: flex;
        justify-content: space-around;
    }

    .who-cards {
        display: grid;
        grid-template-columns: 480px 480px;
        grid-gap: 48px;
        justify-content: center;
    }

    .comm-cards {
        display: grid;
        grid-template-columns: 368px 368px 368px;
        grid-gap: 24px;
        justify-content: center;
    }

    .who-about4 {
        margin-bottom: 88px;
    }

</style>