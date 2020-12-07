<template>
    <Project 

    :isKfk="false"
    logo='habilin/HABILIN_LOGO.png'
    title='Habilin'
    header='habilin/HAB_COVER.png'
    image1='habilin/HAB_1.png'
    image2='habilin/HAB_2.png'

    :who="[

    '<p>HABILIN is a movement that empowers, educates, and connects youth members with the goal of turning one’s passions and advocacies into positive change in the spirit of bayanihan and sustainability.</p>'

    ]"

    :what="[
    
    '<p>HABILIN is a Tagalog term to give someone something for safe keeping; in this case, passing our world to the next generations for safe keeping. We believe that our current societal systems do not ensure environmental, social, and economic safety of future generations.  This is why we educate and empower the youth to create a better future.<p>'
        
    ]"

    :why="[
    '<p>HABILIN began when we visited Siargao last 2018 and met different NGOs and communities. Realizing the impact of small efforts within the community towards environmental sustainability, we saw how education was such an important tool. We wanted to share what we learned back in Manila.</p>']"
    
    />

</template>

<script>
import Project from '../components/WWA_Project'
export default {
    components: {
        Project
    }
}

</script>

