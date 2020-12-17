<template>
    <a href="">
        <div class="project">
            <img class="project-img" :src="require(`@/assets/img/${img}`)" alt="">
            <div class="overlay">
                <div class="overlay-text">
                    <p class="body-2 service">{{ service }}</p>
                    <h3 class="title"> {{ title }}</h3>
                    <h3 class="client">{{ client }}</h3>
                </div>
            </div>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        service: String,
        title: String,
        client: String,
        img: String,
    }

}
</script>

<style scoped>

a, .project, .project-img {
    width: 100%;
    height: 100%;
}

.project {
  position: relative;
}

.overlay {
  position: absolute;
  height: 0;
  bottom: 0;
  width: 100%;  
  background:white; 
  transition: .5s ease-out;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.overlay-text {
    overflow: hidden;
}

.title {
    text-transform: uppercase;
    color: #EAA200;
}

.project:hover .overlay {
    height: 50%;
    opacity: 1;
    color: black;
    background: white;
}

@media screen and (max-width: 1366px) {
    .overlay {
        background: rgba(51, 51, 51, 0.5);
        color: white;
        height: 100%;
        opacity: 1;
    }

    .title {
        color: white;
    }

    .overlay-text {
        display: block;
    }
}
</style>