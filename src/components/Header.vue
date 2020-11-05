<template>
  <header>
      <img class="header-logo" src="@/assets/img/tayo-logo.png" alt="">
      <h1>A change agency that innovates for transformational growth — where sustainability and creativity meet for positive change</h1>
      <div>
          <button class="header-button button-request">Request for Porfolio</button>
          <button class="header-button button-contact">Contact Us</button>
      </div>
      
  </header>
</template>

<script>
export default {
    name: 'Header',
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
        padding: 10rem;
    }

    header h1 {
        color: white;
        margin-top: 56px;
    }

    .header-logo {
        width: 336px;
    }

    .header-button {
        height: 64px;
        width: 208px;
        margin: 56px 16px;
    }

    .button-request {
        background: #F2E5D2;
        color: black;
    }

    .button-contact {
        background: #EAA200;
    }

    


</style>