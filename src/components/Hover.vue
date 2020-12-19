<template>
    <router-link :to="{name: 'ProjectTemplate', params : {project_id: id}}">
        <div class="project">
            <img class="project-img" :src="image" alt="Project Image">
            <div class="overlay">
                <div class="overlay-text">
                    <p class="body-2 service">{{ service }}</p>
                    <h3 class="title"> {{ title }}</h3>
                    <h4 class="client">{{ client }}</h4>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['service', 'title', 'client', 'image', 'id'],
}

</script>

<style scoped>

.project, .project-img {
    width: 100%;
    height: 100%;
}

.project {
  position: relative;
}

.project img {
    object-fit: cover;
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
  padding: 0 2rem;
}

.overlay-text {
    overflow: hidden;
}

.title {
    text-transform: uppercase;
    color: #EAA200;
}

@media screen and (min-width: 1377px){
    .project:hover .overlay {
        height: 50%;
        opacity: 1;
        color: black;
        background: white;
    }
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