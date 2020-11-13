<template>
  <footer>
      <section class="footer-content">
        <aside class="column footer-column-1">
            <section class="footer-intro">
                <h3>Let's work together</h3>
                <img src="../assets/img/footer-rectangle.png" alt="rectangle">
                <p class="footer-mobile">Email</p>
                <p class="footer-mobile">Contact #</p>
            </section>
            <aside class="copyright-desktop">
                <p class="footer-mobile copyright">Copyright &copy; TAYO Sustainable Strategies & Creative Consultancy 2020</p>
            </aside>
        </aside>
        <aside class="column footer-column-2">
            <section>
                <h3>Join our newsletter!</h3>
                <img src="../assets/img/footer-rectangle2.png" alt="rectangle">
                <form>
                    <input type="email" placeholder="Enter your email">
                    <button type="submit" class="email-submit">Subscribe</button>
                </form>
                <a href="#"><img class="footer-logo" src="../assets/img/footer-fb.png" alt="facebook"></a>
                <a href="#"><img class="footer-logo" src="../assets/img/footer-ig.png" alt="instagram"></a>
                <a href="#"><img class="footer-logo" src="../assets/img/footer-m.png" alt="m"></a>
            </section>
            <a href=""><button class="portfolio-link">Request for Portfolio</button></a>
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
        font: inherit;
        border: #e1e1e1 1px solid;
        border-radius: 3px;
        border-right: none;
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
        background: #375998;
        width: 120px;
    }

    .portfolio-link {
        background: #5aa3a9;
        width: 208px;
        margin-top: 10px;
    }

    @media (max-width: 320px) {
        footer {
            height: 480px;   
            padding: 9px 0;      
        }

        input {
            height: 32px;
            width: 65%;
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

</style>