<template>
  <footer>
      <aside class="column footer-column-1">
          <section class="footer-intro">
              <h2>Let's work together</h2>
              <img src="../assets/img/footer-rectangle.png" alt="rectangle">
              <p class="footer-mobile">Email</p>
              <p class="footer-mobile">Contact #</p>
          </section>
          <aside>
              <p class="footer-mobile copyright">Copyright &copy; TAYO Sustainable Strategies & Creative Consultancy 2020</p>
          </aside>
      </aside>
      <aside class="column footer-column-2">
          <section>
            <h2>Join our newsletter!</h2>
            <img src="../assets/img/footer-rectangle2.png" alt="rectangle">
            <form>
                <input type="email" placeholder="Enter your email">
                <button type="submit" class="email-submit">Submit</button>
            </form>
            <a href="#"><img class="footer-logo" src="../assets/img/footer-fb.png" alt="facebook"></a>
            <a href="#"><img class="footer-logo" src="../assets/img/footer-ig.png" alt="instagram"></a>
            <a href="#"><img class="footer-logo" src="../assets/img/footer-m.png" alt="m"></a>
          </section>
          <button class="portfolio-link">Request for Portfolio</button>
      </aside>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
}

</script>

<style scoped>
    footer {
        background: #ffffff;
        display: flex;
        justify-content: space-around;
    }

    input {
        font: inherit;
        border: #e1e1e1 1px solid;
        border-radius: 3px;
        border-right: none;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 40px;
        padding: 5px 7px;
        width: 230px;
        margin: 10px 0;
    }

    button {
        font: inherit;
        color: white;
        border: none;
        border-radius: 3px;
        height: 40px;
        cursor: pointer;
    }

 
    .footer-column-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .footer-mobile {
        font-size: 16px;
        line-height: 32px;
    }

    .copyright {
        color: #888888;
    }

    .footer-logo {
        width: 32px;
        margin: 8px 0;
        margin-right: 12px;
    }

    .email-submit {
        background: #375998;
        width: 120px;
    }

    .portfolio-link {
        background: #5aa3a9;
        width: 208px;
        margin-top: 10px;
    }
</style>