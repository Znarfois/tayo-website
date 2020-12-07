<template>
    <Project 

    :isKfk="false"
    logo='retaso/RETASO_LOGO.png'
    title='Retaso'
    header='retaso/RETASO_COVER.png'
    image1='retaso/RET_1.png'
    image2='retaso/RET_2.png'

    :who="[

    '<p>Retaso was founded by Tasha and Bella Tanjutco back in 2019 as an initiative to help solve textile waste in the Philippines. Every product created is 98-100% recycled plastic, as we aim to continue partnering with various local brands & designers to be able to lessen even by a little, the textile waste that may end up in our oceans. Now as it grows, the initiative turn social enterprise is currently being runned by Natasha Soriano and Hannah Garcia.</p>'

    ]"

    :what="[
    
    '<p>Looking for a solution to textile waste, Retaso within the name itself means “scraps” in the Filipino language. Here in Retaso we find value and purpose in what has been thrown away -- refining, upcycling, and repurposing textile scraps into sustainable and environmentally friendly products that can be used everyday, specifically bags. <p>'
        
    ]"

    :why="[
    '<p>Retaso was an initiative  to lessen textile waste, which only 1% of in the world is recycled. With fast fashion coming in second to oil as the largest contributor of pollution, we endeavour to create awareness, action, and to provide a solution to textile waste. Not only that but to also promote sustainability through upcycling excess local fabric as well as fair trade and empowerment to local Filipino seamstresses and brands who are a big part to our products.</p>']"
    
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

