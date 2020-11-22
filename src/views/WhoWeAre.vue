<template>
    <main id="who-content">
      <p class="who-statement"><strong>We are a change agency that cultivates creative solutions & sustainable strategies, always taking a global perspective rooted in local culture & tradition.</strong></p>

      <!-- Image here -->
      <div style="width: 100%; background:lightgrey; height: 432px;"></div>

      <section class="who-subheadings-1">
          <!-- Image -->
          <div style="width: 608px; background:lightgrey; height: 120px;"></div>
          <p class="who-sub1"><strong>We authentically connect you to the next generation of world leaders, dreamers, & thinkers to put positive purpose in your next endeavor.</strong></p>
      </section>

      <section class="who-subheadings-2">
          <p class="who-sub2"><strong>We advocate awareness, build brands, & create content (ABC’s) through research to redesign & redefine the way our world works.</strong></p>
          <!-- Image -->
          <div style="width: 608px; background:lightgrey; height: 120px;"></div>
      </section>

      <section class="who-images">
          <div style="height: 240px; border: 1px solid gray; background: lightgray"></div>
          <div style="height: 240px; border: 1px solid gray; background: lightgray"></div>
          <div style="height: 240px; border: 1px solid gray; background: lightgray"></div>
          <div style="height: 240px; border: 1px solid gray; background: lightgray"></div>
      </section>

      <p class="who-statement"><strong>We aim to foster the Filipino spirit of Bayanihan amongst our clients & communities, redefining how society operates through building a Barangay that stands for both people & planet.</strong></p>

      <section class="who-about who-about1 container">
          <h1 class="section-header">Sustainable strategies & creative consultancy for and by our generation</h1>
          <div class="who-about1__details">
              <AboutDetails detail="We stand for a switch in perspective to make way for our vision of a world where the economy, environment, and society act as a united entity for both people and planet." />
              <AboutDetails detail="Our mission is to cultivate collaboration and innovation amongst people using authentic research to redesign and redefine problem solving and storytelling, building brands that go beyond profit for positive impact, and sustainable change. "/>
          </div>
      </section>

      <section class="who-about who-about2 container">
          <h1 class="section-header">What we stand for</h1>
          <div class="who-cards">
              <AboutCard type="Organization" title="Kids for Kids PH" advocacy="For the Youth"/>
              <AboutCard type="Social Enterprise" title="Retaso" advocacy="For Regenerative Design"/>
              <AboutCard type="Movement" title="Kamalayan" advocacy="For Local Collaboration"/>
              <AboutCard type="Movement" title="HABILIN" advocacy="For Intergenerational Innovation"/>
          </div>
      </section>

      <section class="who-about who-about3 container">
          <h1 class="section-header">Coming Soon</h1>
          <div class="who-cards">
              <AboutCard type="Organization" title="Brand X" advocacy="For the Environment"/>
              <AboutCard type="Social Enterprise" title="Inyo" advocacy="For Circular Design"/>
          </div>
      </section>

      <section class="who-about who-about4 container">
          <h1 class="section-header">Communities We Have Worked With</h1>
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
import AboutDetails from '../components/whoweare/AboutDetails'
import AboutCard from '../components/whoweare/AboutCard'
import CommunityCard from '../components/whoweare/CommunityCard'

export default {
    name: "WhoWeAre",
    components: {
        AboutDetails,
        AboutCard,
        CommunityCard,
    },
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
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .who-images div {
        width: 100%;
    }

/* About */
    .who-about {
        margin-top: 120px;
    }
    .who-about1__details {
        display: flex;
        justify-content: space-around;
    }

    .who-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(480px, 1fr));
        grid-gap: 48px;
        justify-content: center;
    }

    .comm-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
        grid-gap: 24px;
        justify-content: center;
    }

    .who-about4 {
        margin-bottom: 88px;
    }


</style>