<template>
  <main>
    <div class="services-landing">
        <img class='landing-logo' src="../assets/images/tayo-logo.png">
        <p>A change agency that innovates for <br /> transformational growth — where <br/> sustainability and creativity meet for positive change</p>
    </div>
    <div class="value-section">
        <h1>OUR VALUE</h1>
        <div class="value-content">
            <p>We are the intersection of sustainability & creativity, and we use authentic connections with young people to include your company as part of our vision in promoting the spirit of Bayanihan within the economy, environment, & society of the Philippines and the new world. </p>
            <img src="../assets/images/value-image.png">
        </div>
    </div>
    <div class="what-we-offer-section">
        <h1>THINGS WE CAN DO</h1>
        <!-- Can be componentised -->
        <div class='offers'>
            <div class="offer">
                <img src="../assets/images/Icon.png">
                <h2>Advocacy and Awareness</h2>
                <span>It’s up to us to create an ideal world that lives in harmony with the greater good, thus we’re here to amplify and generate new voices for change, working hand-in-hand with innovative thinkers and designers to create campaigns that matter, and are remembered.</span>
            </div>
            <div class="offer">
                <img src="../assets/images/Icon.png">
                <h2>Branding & Design Solutions</h2>
                <span>Storytelling is our favorite thing to do. We bring art and creativity at the forefront of innovative publications, events, and initiatives that bring people together
for a purpose. </span>
            </div>
            <div class="offer">
                <img src="../assets/images/Icon.png">
                <h2>Communications & Executions</h2>
                <span>We love to work just as much as we love to tell stories. Whether it be on ground or on screen, we aim to bring the same transformational experiences that impact the community through collaboration for good.</span>
            </div>
        </div>
    </div>
    <div class="and-more-section">
        <h1>...AND MORE</h1>
        <div class="more-offers">
            <div class="more-offer">
                <p>01</p>
                <span>We have a wide network, making our friends your friends</span>
            </div>
            <div class="more-offer">
                <p>02</p>
                <span>We have connections to everyone, especially the youth</span>
            </div>
            <div class="more-offer">
                <p>03</p>
                <span>Because our generation is the future, we care</span>
            </div>
            <div class="more-offer">
                <p>04</p>
                <span>We keep you relevant and make sure you’re up-to-date</span>
            </div>
            <div class="more-offer">
                <p>05</p>
                <span>We don’t just follow trends, we are trendsetters</span>
            </div>
            <div class="more-offer">
                <p>06</p>
                <span>We are honest and transparent, we want what’s best for you</span>
            </div>
            <div class="more-offer">
                <p>07</p>
                <span>We make sure you can resonate with us</span>
            </div>
            <div class="more-offer">
                <p>08</p>
                <span>We make sure you can resonate with us</span>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Services',
  components: {
  }
};
</script>

<style scoped>

/* GLOBAL */

main {
    background-color: #FCF7F2;
}
h1 {
    color: #333333;
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
    flex-direction: column;
    margin-top: 64px;
    margin-left: 10%;
}

.value-content {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
}

.value-section h1 {
    margin: 0 0 4px 0;
}

.value-content p {
    color: #333333;
}

.value-section img {
    display: inline-block;
    width: 40%;
    margin: -68px 30px 0 30px;
}

/* WHAT WE OFFER SECTION */
.what-we-offer-section h1{
    display: flex;
    justify-content: center;
    margin: 144px 0 72px 0;
}

.what-we-offer-section {
    justify-items: center;
}

/* .offers {
    display: flex;
    /* justify-items: center; */
    /* flex-wrap: wrap;
} */

.offer {
    display: flex;
    width: 40%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 48px;
    /* margin: 0 64px; */
    padding: 32px;
    text-align: center;
}

.offer:first-child {
    display: flex;
    margin: 48px auto 0 auto;
}

.offer:nth-child(2) {
    display: inline-flex;
    margin: 48px 100px;
}

.offer:last-child {
    display: inline-flex;
    margin: 48px auto;
}

.offer h2 {
    font-size: 24px;
    font-weight: 700;
}

.offer span {
    width: 414px;
    line-height: 32px;
}

/* AND MORE SECTION */
.and-more-section {
    display: flex;
    width: 100%;
    align-self: center;
    flex-direction: column;
    justify-self: center;
    margin-top: 48px;
}

.and-more-section h1 {
    display: flex;
    align-self: center;
    margin: 0 0 72px 0;
}

.more-offers {
    display: flex;
    margin: 0 30%;
    justify-content: space-between;
    flex-wrap: wrap;
}

.more-offer {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin: 0 0 100px 0;
}

.more-offer span {
    display: flex;
    /* flex-direction: column; */
    text-align: center;
}

.more-offer p {
    display: inline-block;
    font-weight: 700;
    font-size: 64px;
    margin: 24px;
}

.more-offer:last-child {
    margin-bottom: 184px;
}

/* RESPONSIVE  */

/* TABLET */
@media screen and (max-width: 1000px){
    p {
        font-size: 16px;
    }

    .value-section h1 {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 100px;
        margin-bottom: 48px;
    }

    .value-section {
        width: 0 10%;
        margin: 0 5%;
    }

    .value-section img {
        width: 46vw;
        margin: 0 0 0 40px;
    }

    .offer {
        width: 100vw;
    }

    .offer h2 {
        font-size: 24px;
    }

    .offer:nth-child(2) {
        display: flex;
        margin: 40px auto;
    }

    .offer:last-child {
        display: flex; 
        margin: 40px auto;
    }

    .more-offers {
        margin: 0 15%;
    }
}

/* MOBILE */
@media screen and (max-width: 768px){

    /* * {
        width: 100vw;
    } */

    h1 {
        font-size: 24px;
        line-height: 32px;
    }

    .landing-logo {
        width: 120px;
    }

    .services-landing p {
        font-size: 16px;
        line-height: 24px;
    }

    .value-section {
        width: 100%;
        flex-direction: column;
        margin: 0;
    }

    .value-section h1 {
        margin: 72px 0 12px 0;
        justify-content: center;
        display: flex;
    }

    .value-content{
        display: block;
        width: 100%;   
    }

    .value-content p {
        margin: 0 5vw;  
    }

    .value-section img {
        width: 100%;
        margin: 24px 0 24px 0;
    }

    .and-more-section {
        display: flex;
    }

    .more-offers {
        align-items: center;
    }

    .and-more-section h1 {
        margin: 0 0 48px 0;
    }

    .what-we-offer-section {
        width: 100%;
    }

    .offer {
        width: 90%;
        /* justify-content: flex-start; */
        align-items: flex-start;
        margin: 0 5vw; 
        text-align: left;
        padding: 0;
        flex-wrap: wrap;
    }

    .offer span {
        font-size: 16px;
        width: auto;
    }

    .offer img {
        margin: 0 0 16px 0;
    }

    .what-we-offer-section h1 {
        justify-content: flex-start;
        margin: 0 5%; 
    }

    .what-we-offer-section h2 {
        line-height: 32px;
        justify-content: flex-start;
        margin: 0 0 12px 0;
    }

    .more-offers {
        flex-direction: column;
        justify-content: center;
        margin: 0 20%;
    }

    .more-offer {
        width: 60%;
        margin: 0 0 30px 0;
    }

    .more-offer p {
        font-size: 32px;
        margin: 0 0 8px 0;
    }

    .more-offer span {
        line-height: 32px;
        font-size: 12px;
    }

    .more-offer:last-child {
        margin: 0 0 70px 0;
    }

}
</style>