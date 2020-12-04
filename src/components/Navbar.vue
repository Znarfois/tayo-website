
    <!-- <nav>
        <div class='nav'>
            <div class='nav-content'>
                <div class="nav-primary">
                    <router-link to="/"><img :src="require('../assets/img/' + brand + '')" id="tayo-logo" alt="TAYO logo"></router-link>
                </div>
                <div class="nav-secondary">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">Who We Are</router-link>
                    <router-link to="/projects/kidsforkids">Projects</router-link>
                    <router-link to="/services">Services</router-link>
                    <router-link to="/contactus">Contact Us</router-link>
                </div>
            </div>
        </div>
    </nav> -->

<template>
  <nav :style="navHome">
    <div class="nav-content">
      <div id="nav-brand">
        <router-link to="/">
          <img
            alt="TAYO Logo"
            :src="require('@/assets/img/' + brand + '')"
          />
        </router-link>
      </div>
      <ul
        v-if="isDesktop"
        id="desktop-nav"
      >
        <li>
          <router-link :style="isHome ? navLink : {}" to="/"
            >Home</router-link>
        </li>
        <li>
          <router-link :style="isHome ? navLink : {}" to="/about"
            >Who We Are</router-link>
        </li>
        <li>
          <router-link :style="isHome ? navLink : {}" to="/projects/kidsforkids"
            >Projects</router-link>
        </li>
        <li>
          <router-link :style="isHome ? navLink : {}" to="/services"
            >Services</router-link>
        </li>
        <li>
          <router-link :style="isHome ? navLink : {}" to="/contactus"
            >Contact Us</router-link>
        </li>
      </ul>
    </div>
    <div v-if="!isDesktop" id="mobile-nav">
      <ul class="d-flex f-even">
        <li>
          <router-link to="/">
            <span>Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/services">
            <span>Services</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects/kidsforkids">
            <span>Projects</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <span>Who We Are</span>
          </router-link>
        </li>
        <li>
          <router-link to="/contactus">
            <span>Contact Us</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
// export default {
//     name: 'Navbar',
//     data() {
//         return {
//             brand: "tayo-logo-black.png",
//         }
//     }
// }
// var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
// if (scrollTop >= 40) {
//     document.querySelector('nav').style.backgroundColor = '#FFFFFF';
//     document.querySelector('nav').style.position = 'fixed';

// }
// else if (scrollTop < 40) {
//     document.querySelector('nav').style.backgroundColor = 'none';
//     document.querySelector('nav').style.position = 'static';
// }
// var myNav = document.getElementsByClassName('nav-content');
// window.onscroll = function () { 
//     "use strict";
//     if (window.scrollY >= 40 ) {
//         myNav.classList.add("nav-colored");
//         myNav.classList.remove("nav-transparent");
//     } 
//     else if (window.scrollY < 40 ){
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-colored");
//     }

//     if(this.$route.path === "/") {
//         this.brand = "tayo-logo.png";
//     }

//     else if (this.$route.path !== "/") {
//         this.brand = "tayo-logo-black.png";
//         document.getElementsByTagName('a').style.color = '#000000';
//     }
// }
export default {
  created() {
    window.addEventListener("resize", this.handleResizeNav);
    window.addEventListener("scroll", this.handleScroll);
    // this.brand = this.isHome ? "tayo-logo.png" : "tayo-logo-black.png";
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResizeNav);
    window.removeEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isHome: this.$route.path === "/" ? true : false,
      isDesktop: window.innerWidth >= 768 ? true : false,
      brand: "tayo-logo.png",
      navHome: {
        background: "transparent",
        boxShadow: "none"
      },
      navLink: {
        color: "#FFFFFF"
      }
    };
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      this.isHome = to.path === "/" ? true : false;
      this.brand = this.isHome ? "tayo-logo.png" : "tayo-logo-black.png";
    }
  },
  methods: {
    handleResizeNav() {
      if (window.innerWidth < 768) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    },
    handleScroll() {
      if (this.isHome) {
        if (window.scrollY > 20) {
        this.navHome = {
            background: "#FFFFFF",
            transition: "background 0.25s ease-in-out",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
            // color: '#000000'
          };
          this.navLink = {
            color: "#000000",
            transition: "color 0.25s ease-in-out"
          };
          this.brand = "tayo-logo-black.png";
        } 
        else {
          this.navHome = {
            background: "transparent",
            transition: "background 0.25s ease-in-out",
            boxShadow: "none",
          };
          this.navLink = {
            color: "#FFFFFF",
            transition: "color 0.25s ease-in-out"
          };
          this.brand = "tayo-logo.png";
        }
      }
      else {
          if (window.scrollY > 20) {
            this.navHome = {
                background: "#FFFFFF",
                transition: "background 0.25s ease-in-out",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
                // color: '#000000'
            };
        } 
        else {
          this.navHome = {
            background: "transparent",
            transition: "background 0.25s ease-in-out",
            boxShadow: "none",
          };  
        }
      }
    }
  }
};
</script>

<style scoped>
 /* Import Fonts */
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");
/*
    nav {
        position: fixed;
        display: block;
        height: 80px;
        width: 100%;
        z-index: 4000;
    }

    .nav {
        display: block;
    }

    nav a {
        text-decoration: none;
        color: #000000;
        margin: 0 32px;
        padding-bottom: 4px;
        font-weight: 700;
    }

    .nav-content {
        display: flex;
        justify-content: space-between;
        padding: 12px 52px;
        align-items: center;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    nav img {
        width: 48px;
    }

    .nav-secondary a:hover {
        font-family: "Karla"; 
        /* font-weight: 700; */
        /* border-bottom: 4px solid #EAA200;
    }

    .nav-transparent {
        background-color: transparent;
        transition: background 0.25s ease-in-out 0s;
        box-shadow: none;
    }

    .nav-colored {
        background-color: #FFFFFF;
        color: #000000;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    }

    @media screen and (max-width: 1300px) {

        .nav-content {
            padding: 12px 28px;
        }
        .nav-secondary a {
            margin: 0 24px;
            font-size: 16px;
            line-height: 24px;
        }
        
    } */
nav {
  width: 100%;
  position: fixed;
  z-index: 1000;
  background: #fff;
  padding: 16px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
}
nav img {
    width: 48px;
}
.nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/* Desktop Nav */
ul {
  list-style: none;
  letter-spacing: 0.02em;
}
#desktop-nav li {
  margin-left: 30px;
  display: inline;
}
#desktop-nav li > a {
  color: #000000;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  font-family: "Karla";
}
#desktop-nav li > a:hover,
#desktop-nav li > a.router-link-active {
  padding-bottom: 4px;
}
#desktop-nav li > a:hover,
#desktop-nav li > a.router-link-active {
  border-bottom: 4px solid #EAA200;
}

/* Mobile Nav */
#mobile-nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #FFFFFF;
}
#mobile-nav > ul {
  margin: 0;
  padding: 12px 0;
}
#mobile-nav li > a {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
}
#mobile-nav a > span {
  font-size: 14px;
  font-size: 10px;
  margin-top: 5px;
}
#mobile-nav a > i,
#mobile-nav a > span {
  color: #909090;
}
@media screen and (max-width: 767px) {
  img {
    display: none;
  }
}
</style>