<template>
  <main>
    <div class="services-landing">
        <img class='landing-logo' src="../assets/images/tayo-logo.png">
        <p>A change agency that innovates for <br /> transformational growth — where <br/> sustainability and creativity meet for positive change</p>
    </div>
    <div class="value-section">
        <div class="value-content">
            <h1>Our Value</h1>
            <p>We are the intersection of sustainability & creativity, and we use authentic connections with young people to include your company as part of our vision in promoting the spirit of Bayanihan within the economy, environment, & society of the Philippines and the new world. </p>
        </div>
        <img src="../assets/images/value-image.png">
    </div>
    <div class="what-we-offer-section">
        <!-- Can be componentised -->
        <div class="offer">
            <img src="../assets/images/Icon.png">
            <h2>Advocacy and Awareness</h2>
            <span>It’s up to us to create an ideal world that lives in harmony with the greater good, thus we’re here to amplify and generate new voices for change, working hand-in-hand with innovative thinkers and designers to create campaigns that matter, and are remembered. </span>
        </div>
        <div class="offer">
            <img src="../assets/images/Icon.png">
            <h2>Advocacy and Awareness</h2>
            <span>It’s up to us to create an ideal world that lives in harmony with the greater good, thus we’re here to amplify and generate new voices for change, working hand-in-hand with innovative thinkers and designers to create campaigns that matter, and are remembered. </span>
        </div>
        <div class="offer">
            <img src="../assets/images/Icon.png">
            <h2>Advocacy and Awareness</h2>
            <span>It’s up to us to create an ideal world that lives in harmony with the greater good, thus we’re here to amplify and generate new voices for change, working hand-in-hand with innovative thinkers and designers to create campaigns that matter, and are remembered. </span>
        </div>
    </div>
    <div class="and-more-section">
        <h1>...AND MORE</h1>
        <div class="more-offers">
            <div class="more-offer">
                <p>01</p>
                <span>We blah</span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
            <div class="more-offer">
                <p>01</p>
                <span></span>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
// import Navbar from "components/Navbar.vue";
// import Footer from "../src/components/Footer.vue";
export default {
  name: 'Services',
  components: {
    // Navbar,
    // Footer
  }
}
</script>

<style scoped>

/* GLOBAL */
h1 {
    color: #5AA3A9;
    font-weight: bold;
}

/* LANDING */
.services-landing {
    display: flex;
    background: url("../assets/images/services-bg.png") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: #FFFFFF;
}

.landing-logo {
    width: 272px;
    margin-bottom: 32px;
}

.services-landing p {
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
}

/* VALUE SECTION */ 
.value-section {
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
    margin-left: 10%;
}

.value-content {
    display: inline-block;
    width: 50%;
}

.value-content h1 {
    margin-bottom: 48px;
}

.value-content p {
    color: #333333;
}

.value-section img {
    display: inline-block;
    width: 40%;
}

/* WHAT WE OFFER SECTION */
.what-we-offer-section {
    /* display: flex; */
}

.offer {
    display: inline-flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
    margin: 0 64px;
}

.offer:first-child {
    display: flex;
    width: 40%;
    margin: 48px auto;
}

/* AND MORE SECTION */
.and-more-section {
    display: flex;
    width: 100vw;
    align-self: center;
    flex-direction: column;
    justify-self: center;
    margin-top: 48px;
}

.and-more-section h1 {
    display: flex;
    align-self: center;
}

.more-offers {
    margin: 0 30%;
    justify-content: space-around;
}

.more-offer {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
}

.more-offer p {
    display: flex;
    flex-direction: column;
}

.more-offer p {
    display: inline-block;
    font-weight: 700;
    font-size: 64px;
    margin: 24px;
}

/* RESPONSIVE  */

</style>