<template>
  <header :style="{ background: 'no-repeat center/cover url(' + require(`../assets/img/${background}`) + ')'}">
      <div class="header-content">
        <img class="header-logo" src="@/assets/img/tayo-logo.png" alt="">
        <h1>A change agency that innovates for transformational growth — where sustainability and creativity meet for positive change</h1>
        <div v-if="isHome">
            <button class="header-button button-request"><strong>Request for Porfolio</strong></button>
            <button class="header-button button-contact"><strong>Contact Us</strong></button>
        </div>
      </div>
  </header>
</template>

<script>
export default {
    name: 'Header',
    props: {
        isHome: {
            type: Boolean,
            required: true,
        },
        background: String,
    },
}
</script>

<style scoped>
    header {
        background: black;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100vh;
        text-align: center;
        padding: 10rem 0;
    }

    header h1 {
        color: white;
        font-size: 32px;
        margin: auto;
        margin-top: 32px;
        width: 790px;
    }

    .header-content {
        width: 80%;
    }

    .header-logo {
        width: 272px;
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
</style>