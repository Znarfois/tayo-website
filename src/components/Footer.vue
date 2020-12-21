<template>
  <footer>
      <section class="footer-content">
        <aside class="column footer-column-1">
            <section class="footer-intro">
                <h3>Let's work together</h3>
                <img src="../assets/img/footer-rectangle.png" alt="rectangle">
                <p class="footer-mobile">kamusta@tayo.com.ph</p>
                <p class="footer-mobile">+63 917 521 5785</p>
            </section>
            <aside class="copyright-desktop">
                <p class="footer-mobile copyright">Copyright &copy; TAYO Sustainable Strategies & Creative Consultancy 2020</p>
            </aside>
        </aside>
        <aside class="column footer-column-2">
            <section>
                <h3>Join our newsletter!</h3>
                <img src="../assets/img/footer-rectangle.png" alt="rectangle">
                <form>
                    <input type="email" placeholder="Enter your email">
                    <button type="submit" class="email-submit">Subscribe</button>
                </form>
                <a href="https://facebook.com/tayo.change" target="_blank" rel="noreferrer noopenner"><img class="footer-logo" src="../assets/img/footer-fb.png" alt="Facebook"></a>
                <a href="https://instagram.com/tayo.com.ph" target="_blank" rel="noreferrer noopenner"><img class="footer-logo" src="../assets/img/footer-ig.png" alt="Instagram"></a>
                <a href="http://medium.com/kwento-tayo" target="_blank" rel="noreferrer noopenner"><img class="footer-logo" src="../assets/img/footer-m.png" alt="Medium"></a>
            </section>
            <router-link to="/portfolio"><button class="portfolio-link">Request for Portfolio</button></router-link>
        </aside>
        <aside class="copyright-mobile">
            <p class="footer-mobile copyright">Copyright &copy; TAYO Sustainable Strategies & Creative Consultancy 2020</p>
        </aside>
      </section>
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
        height: 344px;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .footer-content {
        display: flex;
        justify-content: space-around;
        width: 100%;

    }

    input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        height: 40px;
        width: 230px;
        padding: 5px 7px;
        margin: 10px 0;
    }

    button {
        height: 40px;
    }

    .footer-column-1 {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 40%;
    }

    .footer-mobile {
        font-size: 16px;
        line-height: 32px;
    }

    .copyright {
        color: #888888;
    }

    .copyright-mobile {
        display: none;
    }

    .footer-logo {
        width: 32px;
        margin: 8px 0;
        margin-right: 12px;
    }

    .email-submit {
        background: #EAA201;
        width: 120px;
    }

    .portfolio-link {
        background: none;
        border: 1px solid #333333;
        color: #333333;
        width: 208px;
        margin-top: 10px;
    }

  

    @media screen and (max-width: 767px) {
        footer {
            height: 480px;   
            padding: 9px 0;      
        }

        input {
            height: 32px;
            width: 35%;
            font-size: 12px;
        }

        .copyright-desktop {
            display: none;
        }

        .copyright-mobile {
            display: block;
        }
        
        .footer-content {
            flex-direction: column;
            max-width: 90%;
        }

        .footer-content h3 {
            font-size: 16px;
            line-height: 24px;
        }

        .footer-column-1 {
            margin-bottom: 24px;
            width: 100%;
        }

        .footer-logo {
            margin-right: 24px;
        }

        .email-submit {
            width: 96px;
            height: 32px;
            font-size: 12px;
        }

        .copyright {
            margin-top: 30px;
            font-size: 12px;
        }
    }

    @media screen and (max-width: 500px) {
        input {
            height: 32px;
            width: 65%;
            font-size: 12px;
        }
    }

</style>